import Header from "./Header"
import Identification from "./Identification"
import FavoriteFood from "./FavoriteFood"
import Counter from "./Counter"
import Function from "./Function"
import Paragraph from "./Paragraph"
import MyCart from "./MyCart"
import Footer from "./Footer"

function App() {
  const fruits = [
    {id:1, name:"orange", color:"orange", rating:5},
    {id:2, name:"mango", color:"yellow-orange", rating:5},
    {id:3, name:"banana", color:"yellow", rating:5},
    {id:4, name:"blueberry", color:"blue", rating:4},
    {id:5, name:"strawberry", color:"red", rating:4}
  ]
  const porkDishes = [] // empty list of pork dishes

  return (
    <>
      <Header />
      <Identification 
        name="Bringas, Mark Simon Z."
        age={19}
        course="Bachelor of Science in Computer Science"
        job="DevOps Engineer"
      />
      <hr />
      {
        fruits.length > 0 ?
        <FavoriteFood items={fruits} /> :
        <>
          <h2 className="favorite-food">I have no favorite fruits.</h2>
          <hr />
        </>
      }
      {
        porkDishes.length > 0 ?
        <FavoriteFood items={porkDishes} /> :
        <>
          <h2 className="favorite-food">I have no favorite Pork Dishes.</h2>
          <hr />
        </>
      }
      <Counter />
      <hr />
      <Function />
      <hr />
      <Paragraph />
      <hr />
      <MyCart />
      <Footer />
    </>
  )
}

export default App
