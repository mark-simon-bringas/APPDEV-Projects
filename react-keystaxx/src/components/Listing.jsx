import { useState } from 'react';
import { Link } from 'react-router-dom'
import keyboardsData from '../assets/json/keyboards.json'

export default function Listing() {
    const [keyboards] = useState(keyboardsData)
    const mechanicalKeyboards = keyboards.filter((keyboard) => keyboard.type === "Mechanical");
    const membraneKeyboards = keyboards.filter((keyboard) => keyboard.type === "Membrane");

    return (
        <>
            <div className="product-list">
                <h1>Product Listing</h1>
                
                {/* Mechanical Keyboard */}
                <div className="mechanical-keyboards">
                    <h2>Mechanical Keyboards</h2>
                    <div className="product-list-card">
                        {
                            mechanicalKeyboards.map((keyboard) => {
                                return (
                                    <div key={keyboard.id} className="product-card">
                                        <div className="product-list-image">
                                            <img
                                                src={keyboard.image}
                                                alt={keyboard.title}
                                                title={keyboard.title}
                                                style={{ width: "400px", height: "400px" }}
                                            />
                                        </div>
                                        <strong>{keyboard.title}</strong><br />
                                        &#8369; {keyboard.price.toFixed(2)}<br />
                                        <Link to={`/listing/${keyboard.id}`} state={{ keyboard }}>
                                            <button>Learn More</button>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <hr />
                {/* Membrane Keyboard */}
                <div className="membrane-keyboards">
                    <h2>Membrane Keyboards</h2>
                    <div className="product-list-card">
                        {
                            membraneKeyboards.map((keyboard) => {
                                return (
                                    <div key={keyboard.id} className="product-card">
                                        <div className="product-list-image">
                                            <img
                                                src={keyboard.image}
                                                alt={keyboard.title}
                                                title={keyboard.title}
                                                style={{ width: "400px", height: "400px" }}
                                            />
                                        </div>
                                        <strong>{keyboard.title}</strong><br />
                                        &#8369; {keyboard.price.toFixed(2)}<br />
                                        <Link to={`/listing/${keyboard.id}`} state={{ keyboard }}>
                                            <button>Purchase</button>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
};
