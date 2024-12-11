import { useState } from 'react';
import { Link } from 'react-router-dom'
import keyboardsData from '../assets/data/keyboards.json'

export default function Listing() {
    const [keyboards] = useState(keyboardsData)
    const mechanicalKeyboards = keyboards.filter((keyboard) => keyboard.type === "Mechanical");
    const membraneKeyboards = keyboards.filter((keyboard) => keyboard.type === "Membrane");

    const calculateAverageRating = (reviews) => {
        const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
        return (sum / reviews.length).toFixed(2)
    }

    const renderStarRating = (averageRating) => {
        const totalStars = 5
        const fullStars = Math.floor(averageRating)
        const halfStars = ((averageRating % 1) >= 0.5) ? 1 : 0
        const emptyStars = totalStars - fullStars - halfStars

        return (
            <div className="star-rating">
                {
                    Array(fullStars).fill("★").map((_, index) => (
                        <span key={`filled-${index}`} className="filled-star">★</span>
                    ))
                }
                {
                    Array(halfStars).fill("☆").map((_, index) => (
                        <span key={`half-${index}`} className="half-star">★</span> 
                    ))
                }
                {
                    Array(emptyStars).fill("☆").map((_, index) => (
                        <span key={`empty-${index}`} className="empty-star">☆</span>
                    ))
                }
            </div>
        )
    }

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
                                const averageRating = calculateAverageRating(keyboard.reviews)
                                
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
                                        <strong>Rating: </strong>{averageRating}{renderStarRating(averageRating)}<br />
                                        <Link to={`/listing/${keyboard.id}`} state={{ keyboard }}>
                                            <button>Learn More</button>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <br />
                {/* Membrane Keyboard */}
                <div className="membrane-keyboards">
                    <h2>Membrane Keyboards</h2>
                    <div className="product-list-card">
                        {
                            membraneKeyboards.map((keyboard) => {
                                const averageRating = calculateAverageRating(keyboard.reviews)
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
                                        <strong>Rating: </strong>{averageRating}{renderStarRating(averageRating)}<br />
                                        <Link to={`/listing/${keyboard.id}`} state={{ keyboard }}>
                                            <button>Learn More</button>
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
