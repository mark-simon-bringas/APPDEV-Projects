/*
       App()
         |
      Login()
     /       \
Customer()  Admin()
*/

import Login from './Login'
import Shop from './Shop'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <>
      <Login />
      <Footer />
    </>
  )
}

export default App
