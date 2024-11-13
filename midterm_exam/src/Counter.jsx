import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(c => c + 2)
    }
    const decrementCount = () => {
        setCount(c => c - 2)
    }
    // green if positive, red if negative, black if 0 (for styling)
    let textColor
    if (count > 0) {
        textColor = "green"
    } else if (count < 0) {
        textColor = "red"
    } else {
        textColor = "black"
    }
    return (
        <>
        <div className="counter">
            <h2>Counter</h2>
            <h2 style={{color: textColor}}>{count}</h2>
            <button onClick={incrementCount}>Increment</button>
            <br />
            <button onClick={decrementCount}>Decrement</button>
        </div>
        </>
    )
};
