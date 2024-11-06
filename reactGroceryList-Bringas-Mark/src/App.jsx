/*
       App()
         |
      Login()
     /       \
Customer()  Admin()
*/

import Login from './Login'
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
