import { useState } from 'react'

export default function Function() {
    const [number, setNumber] = useState(0)
    const updateNumber = () => {
        if (number === 0 || number % 2 === 0) {
            setNumber(n => (n + 1) * 2)
        } else if (number % 2 === 1) {
            setNumber(n => (n + 1) + 1) 
        }
    }
    return (
        <>
        <div className="function">
            <h2>Function</h2>
            <h2>{number}</h2>
            <button onClick={updateNumber}>Update Number</button>
        </div>
        </>
    )
};
