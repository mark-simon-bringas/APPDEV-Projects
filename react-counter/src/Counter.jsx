import React, { useState } from 'react'
export default function Counter() {
    // useState hook for updating variable or stateful variables
    const [count, setCount] = useState(0)
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
    // To reset count
    const resetCount = () => {
        setCount(c => c = 0)
    }

    return (
        <>
            <div className="container">
                <p className="counter-container">
                    Counter: <br /> {count}
                </p>
                &nbsp;
                <button className='button-container-increment' onClick={incrementCount}>Increment</button>
                <button className='button-container-reset' onClick={resetCount}>Reset</button>
                <button className='button-container-decrement' onClick={decrementCount}>Decrement</button>
            </div>
        </>
    )
}