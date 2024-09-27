import React, { useState } from 'react'
export default function Counter() {
    // useState hook for updating variable or stateful variables
    const [count, setCount] = useState(0)
    const [isPositive, setIsPositive] = useState(true)
    // To increase by 5
    const incrementByFiveCount = () => {
        setCount(c => c + 5)
    }
    // To increment count
    const incrementCount = () => {
        // Previous state points to new state
        // Updates previous state into a new state
        setCount(c => c + 1)
    }
    // To decrement count
    const decrementCount = () => {
        setCount(c => c - 1)
    }
    // To decrease by 5
    const decrementByFiveCount = () => {
        setCount(c => c - 5)
    }
    // Display random number
    const randomizeCount = () =>  {
        let num =  Math.floor(Math.random() * 1000)
        setCount(isPositive ? num : (num * -1))
        setIsPositive(isPositive => !isPositive)
    }
    // To reset count
    const resetCount = () => {
        setCount(c => c = 0)
    }
    // Changes text color to green if number is positive, red if it is negative
    let valueColor;
    if (count > 0) {
        valueColor = "#2E7D32"
    } else if (count < 0) {
        valueColor = "#B71C1C"
    } else {
        valueColor = "black";
    }

    return (
        <>
            <div className="container">
                <p className="counter-container" style={{color: valueColor}}>
                    Counter: <br /> {count}
                </p>
                &nbsp;
                <button className='button-container-increment-by-five' onClick={incrementByFiveCount}>Increment by 5</button>
                <button className='button-container-increment' onClick={incrementCount}>Increment</button>
                <button className='button-container-reset' onClick={randomizeCount}>Random</button>
                <button className='button-container-reset' onClick={resetCount}>Reset</button>
                <button className='button-container-decrement' onClick={decrementCount}>Decrement</button>
                <button className='button-container-decrement-by-five' onClick={decrementByFiveCount}>Decrement by 5</button>
            </div>
        </>
    )
}