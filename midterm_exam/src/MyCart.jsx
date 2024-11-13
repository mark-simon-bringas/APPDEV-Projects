import { useState } from 'react'

export default function MyCart() {
    const [myCart, setMyCart] = useState([])
    const addToCart = () => {
        const item = document.getElementById("add-to-cart").value
        setMyCart(myCart => [...myCart, item])
    }
    return (
        <>
        <div className="my-cart">
            <h2>My Cart</h2>
            <input type="text" name="add-to-cart" id="add-to-cart" />
            <br />
            <button onClick={addToCart}>Add To Cart</button>
            <ul>
                {
                    myCart.map((item, index) => 
                        <li key={index}>{item}</li>
                    )
                }
            </ul>
        </div>
        </>
    )
};
