import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import ListOfFruits from "./ListOfFruits";
import Footer from "./Footer";

function App() {
  const fruits = [  
    // apple object
    {
      id: 1,
      name: "apple",
      color: "red",
    },
    // banana object
    {
      id: 2,
      name: "banana",
      color: "yellow",
    },
    // orange object
    {
      id: 3,
      name: "orange",
      color: "orange",
    },
    // grape object
    {
      id: 4,
      name: "grape",
      color: "purple",
    },
    // kiwi object
    {
      id: 5,
      name: "kiwi",
      color: "green"
    }
  ]
  const desserts = [
    // cake object
    {
      id: 1,
      name: "cake",
      color: "red"
    },
    // ice cream object
    {
      id: 2,
      name: "ice cream",
      color: "blue"
    },
    // pie object
    {
      id: 3,
      name: "pie",
      color: "green"
    }
  ]

  return (
    <>
      <Header />
      {
        fruits.length > 0 ?
        (<ListOfFruits items={fruits} category="My Favorite Fruits: "/>) :
        <h3 className='list-category'>No fruits.</h3>
      }
      {
        desserts.length > 0 ?
        (<ListOfFruits items={desserts} category="My Favorite Desserts: "/>) :
        <p>I do not like desserts.</p>
      }
      <Footer />
    </>
  )
}

export default App;
