import { useState } from 'react'
import Login from './Login'

export default function Shop(props) {
    let shopItems = props.items
    const [cart, setCart] = useState([])
    const [amount, setAmount] = useState('')
    const [receipt, setReceipt] = useState('')

    function addItem(item) {
        setCart(c => [...c, item])
    }

    const renderItems = () => {
        return (
            <>
                <div className="item-wrapper">
                    {shopItems.map(
                            (item) => {
                                return (
                                    <div className="item-card" key={item.id}>
                                        <div className="item-title">
                                            <h1>{item.emoji}</h1>
                                            <h3>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                                        </div>
                                        <div className="item-info">
                                            <p className='item-price'>Price per piece: ${item.price}</p>
                                            <button className='add-to-cart' onClick={() => addItem(item)}>
                                                Add to Cart
                                            </button>
                                        </div>
                                        <br />
                                    </div>
                                )
                            }
                        ) 
                    }
                </div>
            </>
        )
    }

    const renderCart = () => {
        return (
            <>
                <div className="cart-column-headers">
                    <span className="column-header product-header">Product</span>
                    <span className="column-header price-header">Price per Piece</span>
                    <span className="column-header quantity-header">Quantity</span>
                    <span className="column-header total-header">Accumulated Price</span>
                </div>
                <ul className="cart-list">
                    {
                        cart.map(
                            (product) => {
                                return (
                                    <>
                                        <li key={product.id} className="cart-item"> 
                                            <div className="cart-item-content">
                                                <span className="product-name">{product.emoji + (product.name.charAt(0).toUpperCase() + product.name.slice(1))}</span>
                                                <span className="product-price">${product.price}</span>
                                                <span className="product-quantity">{product.quantity}</span>
                                                <span className="product-total">${product.price * product.quantity}</span>
                                            </div>
                                        </li>
                                    </>
                                )
                            }
                        )
                    }
                </ul>
                <div className="cart-column-footers">
                    <span className="column-header empty1-footer"></span>
                    <span className="column-header empty2-footer"></span>
                    <span className="column-header empty2-footer"></span>
                    <span className="column-header calculate-footer">Total Amount: ${calculateTotalAmount()}</span>
                </div>
            </>
        )
    }

    function addItem(item) {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((product) => product.id === item.id);
            if (existingProduct) {
                return prevCart.map((product) => product.id === item.id
                        ? {...product, quantity: product.quantity++}
                        : product
                );
            } else {
                return [...prevCart, {...item, quantity: 1}];
            }
        });
    }

    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    const calculateTotalAmount = () => {
        const total = cart.reduce(
            (total, product) => total + (product.price * product.quantity),
            0
        )
        return total
    }

    const handlePayment = () => {
        const totalAmount = calculateTotalAmount()
        const payment = parseFloat(amount)

        if (isNaN(payment)) {
            setReceipt('')
            alert("Please enter a valid amount.")
        } else if (payment < totalAmount) {
            setReceipt('')
            alert(`Insufficient funds.\nYou need $${(totalAmount - payment).toFixed(2)} more.`)
        } else {
            const change = payment - totalAmount
            const receiptInfo = cart.map(
                (product) => {
                    if (product.name === "cucumber") {
                        return `${product.name.charAt(0).toUpperCase() + product.name.slice(1)}\t\t${product.quantity}\t$${(product.price * product.quantity).toFixed(2)}`
                    } else if (product.name === "kiwi") {
                        return `${product.name.charAt(0).toUpperCase() + product.name.slice(1)}\t\t\t\t${product.quantity}\t$${(product.price * product.quantity).toFixed(2)}`
                    } else {
                        return `${product.name.charAt(0).toUpperCase() + product.name.slice(1)}\t\t\t${product.quantity}\t$${(product.price * product.quantity).toFixed(2)}`
                    }
                }
            ).join('\n')
            setReceipt(
                `Receipt\n----------------------------------------\n` +
                `Items\t\t\tQty\tPrice\n` +
                `----------------------------------------\n` +
                `${receiptInfo}\n` +
                `----------------------------------------\n` +
                `Total: $${totalAmount.toFixed(2)}\n` +
                `Paid: $${payment.toFixed(2)}\n` +
                `Change: $${change.toFixed(2)}\n` +
                `----------------------------------------`
            )
        }
    }

    if (props.isLoggedIn === false) {
        return (
            <Login />
        )
    } else {
        return (
            <>
                <h1>Grocery Store!</h1>
                <ul>
                    {renderItems()}
                </ul>
    
                <h4>These are the cart items: </h4>
                <ul>
                    {renderCart()}
                </ul>
                <div className="payment-section">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount to pay"
                        className="payment-input"
                    />
                    <button onClick={handlePayment} className="pay-button">Pay</button>
                </div>
                <div className="receipt">
                    <pre>{receipt}</pre>
                </div>
            </>
        )
    }
};
