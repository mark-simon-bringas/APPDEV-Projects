import { useState } from 'react'
import Shop from './Shop'
import AdminPanel from './AdminPanel'

export default function Login() {
    // Items for the Shop component
    let items = [
        {id: 1, name: "grapes", price: 50},
        {id: 2, name: "orange", price: 20},
        {id: 3, name: "pickles", price: 40}
      ]
    
    // Credentials for the account
    let accounts = [
        {id: 1, username: "customer", password: "customer", role: "customer"},
        {id: 2, username: "admin", password: "admin", role: "admin"},
        {id: 3, username: "customer2", password: "customer2", role: "customer"}
    ]

    const [isLoggedIn, setIsLoggedIn] = useState(false)    // Boolean variable for logging in
    const [role, setRole] = useState("")    // Variable for the user roles
    // Variables for entered credentials
    const [enteredUsernames, setEnteredUsernames] = useState("")
    const [enteredPasswords, setEnteredPasswords] = useState("")

    // Functions to get credentials from user
    function getUsername(event) {
        setEnteredUsernames(event.target.value)
    }

    function getPassword(event) {
        setEnteredPasswords(event.target.value)
    }

    // Function to handle login process
    function handleLogin() {
        accounts.map(
            (account) => {
                // Roles are used to render the customer/admin page
                if (account.username === enteredUsernames && account.password === enteredPasswords) {
                    setIsLoggedIn(true)
                    setRole(account.role)
                }
            }
        )
    }

    // Function that renders login page
    function renderLogin() {
        return (
            <div>
                <h1>Login: </h1>
                Username: <input type='text' placeholder='username' id='username' onChange={getUsername} />
                <br />
                Password: <input type='text' placeholder='password' id='password' onChange={getPassword} />
                <br />
                <button onClick={handleLogin}>Login</button>
            </div>
            
        )
    }
    
    // Function to render shop
    function renderShop() {
        return (
            <Shop isLoggedIn={isLoggedIn} items={items} />
        )
    }

    // Function to render admin page
    function renderAdmin() {
        return (
            <AdminPanel isLoggedIn={isLoggedIn} accounts={accounts} />
        )
    }

    // Handles rendering of components based on login credentials
    if (isLoggedIn === false) {
        return renderLogin()
    } else {
        if (role === "admin") {
            return renderAdmin()
        } else {
            return renderShop()
        }
    }
};
