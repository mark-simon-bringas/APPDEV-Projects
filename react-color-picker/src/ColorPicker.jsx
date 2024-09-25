import React, { useState } from 'react'

const randomColor = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function ColorPicker() {
    // Functional component that uses useState (hook)
    // Stateless component transformed into a functional component
    // Invokes state into a variable.

    const [color, setColor] = useState("#FFFFFF")
    // Function to get a random number based on the index of randomColor
    function getRandomNumber() {
        return Math.floor(Math.random() * randomColor.length)
    }
    // Function to get a random color from randomColor
    function getRandomColor() {
        let hex = "#"
        for (let i = 0; i < 6; i++) {
            hex += randomColor[getRandomNumber()]
        }
        return hex
    }
    // Updating state color
    function randomColorChange() {
        setColor(getRandomColor())
    }
    // Event handling color changes for color input
    function handleColorChange(event) {
        setColor(event.target.value)
    }
    
    return (
        <>
            <div className='color-picker-container'>
                <h1>Color Picker</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p>Selected Color: {color.toUpperCase()}</p>
                </div>
                <label>Select a Color: </label>
                <input type="color" value={color} onChange={handleColorChange}/>
                <button className="randomize" onClick={randomColorChange}>Randomize</button>
            </div>
        </>
    )
}