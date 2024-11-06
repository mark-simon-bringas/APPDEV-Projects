import { useState } from 'react'
import Shop from './Shop'

export default function Login() {
    // Items for the Shop component
    let items = [
        {id: 1, name: "grapes", price: 50, emoji: "🍇"},
        {id: 2, name: "orange", price: 20, emoji: "🍊"},
        {id: 3, name: "kiwi", price: 40, emoji: "🥝"},
        {id: 4, name: "banana", price: 35, emoji: "🍌"},
        {id: 5, name: "cucumber", price: 60, emoji: "🥒"}
      ]

    const [isLoggedIn, setIsLoggedIn] = useState(true)    // Boolean variable for logging in
    const [role, setRole] = useState("user")    // Variable for the user roles
    
    // Function to render shop
    function renderShop() {
        return (
            <Shop isLoggedIn={isLoggedIn} items={items} />
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
