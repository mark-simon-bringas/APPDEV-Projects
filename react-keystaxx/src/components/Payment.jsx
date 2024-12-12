import { useState } from "react"
import { useLocation } from "react-router-dom"
import voucherCodes from "../assets/data/vouchers.json"

export default function Payment() {
    const location = useLocation()
    const { keyboard, quantity } = location.state
    
    const deliveryFee = 10.00
    const tentativeTotalFee = (keyboard.price * quantity) + deliveryFee
    const [voucherCode, setVoucherCode] = useState("")
    const [totalFee, setTotalFee] = useState(tentativeTotalFee)
    const [discountAmount, setDiscountAmount] = useState(0)

    const applyVoucher = () => {
        const voucher = voucherCodes.find(v => v.code === voucherCode)

        if (voucher) {
            const discountValue = tentativeTotalFee * voucher.discount
            setDiscountAmount(discountValue)
            setTotalFee(tentativeTotalFee - discountValue)
        } else {
            setDiscountAmount(0)
            setTotalFee(tentativeTotalFee)
        }
    }

    const handlePaymentValidation = () => {
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const zip = document.getElementById("zip").value;
        const cardName = document.getElementById("card-name").value;
        const cardNumber = document.getElementById("card-number").value;
        const cardExpiry = document.getElementById("card-expiry").value;
        const cardCvv = document.getElementById("card-cvv").value;

        if (!name || !address || !city || !state || !zip || !cardName || !cardNumber || !cardExpiry || !cardCvv) {
            alert("Please enter all the necessary fields.") // checks empty fields
            return;
        }
        if (isNaN(zip) || zip === "") {
            alert("Please enter a valid zip code.") // checks if zip code is a number
            return;
        }
        if (isNaN(cardNumber) || cardNumber.length !== 16) {
            alert("The card number is not valid.")  // checks if number and has 16 digits
            return;
        }
        const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
        if (!expiryRegex.test(cardExpiry)) {
            alert("Please enter a valid expiry date.")  // checks valid expiry date
            return;
        }
        if (isNaN(cardCvv) || cardCvv.length !== 3) {
            alert("The CVV is not valid.")  // checks valid ccv number
            return;
        }
        
        alert("Payment successful!")
    };

    return (
        <>
            <h1 className="page-title-2">Order Details</h1>
            <div className="payment-product">
                <div className="payment-product-image">
                    <img 
                        src={keyboard.image} 
                        alt={keyboard.title} 
                        title={keyboard.title}
                        style={{ width: "400px", height: "400px" }}
                    />
                </div>
                <div className="payment-product-info">
                    <h2>{keyboard.title}</h2>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
            <div className="payment-address">
                <h2>Delivery Address</h2>
                <input type="text" name="name" id="name" placeholder="Name" /><br />
                <input type="text" name="address" id="address" placeholder="Address" /><br />
                <input type="text" name="city" id="city" placeholder="City/Municipality" /><br />
                <input type="text" name="state" id="state" placeholder="State/Province" /><br />
                <input type="text" name="zip" id="zip" placeholder="Zip Code" /><br />
            </div>
            <div className="payment-method">
                <h2>Enter Payment</h2>
                <input type="text" name="card-name" id="card-name" placeholder="Name" /><br />
                <input type="text" name="card-number" id="card-number" placeholder="Card Number" /><br />
                <input type="text" name="card-expiry" id="card-expiry" placeholder="Expiry Date" /><br />
                <input type="text" name="card-cvv" id="card-cvv" placeholder="CVV" /><br />
            </div>
            <div className="payment-voucher">
                <h2>Enter Voucher Code</h2>
                <input 
                    type="text"
                    name="voucher" 
                    id="voucher" 
                    placeholder="Voucher Code"
                    value={voucherCode} 
                    onChange={(e) => setVoucherCode(e.target.value)} 
                />
                <button type="button" onClick={applyVoucher}>Apply Voucher</button>
                <br />
            </div>
            <div className="payment-summary">
                <h2>Payment Details</h2>
                <p><strong>Subtotal: </strong>₱ {keyboard.price.toFixed(2)}</p>
                <p><strong>Shipping Fee: </strong>₱{deliveryFee.toFixed(2)}</p>
                {
                    (discountAmount > 0) && 
                    <p style={{color: "var(--cardinal)"}}><strong>Voucher Discount: </strong>-₱ {discountAmount.toFixed(2)}</p>
                }
                <p><strong>Total Fee: ₱ {totalFee.toFixed(2)}</strong></p>
            </div>
            <div className="payment-button">
                <button onClick={handlePaymentValidation}>Process Payment</button>
            </div>
        </>
    )
}