import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export default function ListingIndiv() {
    const location = useLocation()
    const keyboard = location.state.keyboard

    const calculateAverageRating = (reviews) => {
        return reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    }

    const renderStarRating = (averageRating) => {
        const totalStars = 5;
        const fullStars = Math.floor(averageRating)
        const halfStars = averageRating % 1 >= 0.5 ? 1 : 0
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
        );
    }

    const [averageRating, setAverageRating] = useState(calculateAverageRating(keyboard.reviews))
    const [quantity, setQuantity] = useState(1)
    const [userReview, setUserReview] = useState([])

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    
    const increment = () => {
        setQuantity(quantity + 1)
    }


    const addUserReview = () => {
        let content = {
            date: (new Date().getFullYear()) + "-" + (new Date().getMonth() + 1) + "-" + (new Date().getDate()),
            name: document.getElementById("name").value,
            rating: parseInt(document.getElementById("rating").value),
            comment: document.getElementById("comment").value
        }

        setUserReview(prevReviews => {
            const newReviews = [...prevReviews, content]
            const updatedRating = calculateAverageRating([...keyboard.reviews, content])
            setAverageRating(updatedRating)
            return newReviews
        })

        document.getElementById("name").value = ""
        document.getElementById("rating").value = 0
        document.getElementById("comment").value = ""
    }

    const renderUserReview = () => {
        return (
            userReview.map((userReview) => {
                return (
                    <>
                        <div>
                            <h3>{userReview.name} - {userReview.rating}{renderStarRating(userReview.rating)}</h3>
                            <p><i>{userReview.date}</i></p>
                            <p>{userReview.comment}</p>
                        </div>
                    </>
                )
            })
        )
    }
    
    // automatic scroll on top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [location])
    

    return (
        <>
            <div className="product-image">
                <img
                    src={keyboard.image}
                    alt={keyboard.title}
                    title={keyboard.title}
                    style={{ width: "800px", height: "800px" }}
                />
            </div>

            <div className="product-title">
                <h1>{keyboard.title}</h1>
            </div>
            <div className="product-info">
                <h3>Rating: {averageRating.toFixed(2)}{renderStarRating(averageRating)}</h3>
                <h3>₱ {keyboard.price.toFixed(2)}</h3>
                <div className="product-info-specs">
                    <p><strong>Type: </strong>{keyboard.type}</p>
                    <p><strong>Layout: </strong>{keyboard.layout}</p>
                    <p><strong>Switch Type: </strong>{keyboard.keyswitch}</p>
                    <p><strong>Keycaps: </strong>{keyboard.keycaps}</p>
                    <p><strong>Backlighting: </strong>{keyboard.backlighting}</p>
                    <p><strong>Connectivity: </strong>{keyboard.connectivity}</p>
                    <p><strong>Dimensions: </strong>{keyboard.dimensions}</p>
                </div>
            </div>

            <div className="add-to-cart">
                Quantity:&nbsp;
                <button id="decreaseQty" onClick={decrement}> - </button>
                <input 
                    type="text" 
                    value={quantity} 
                    readOnly 
                    className="quantity-input" 
                />
                <button id="increaseQty" onClick={increment}> + </button>
                <br />
                <Link to={`/listing/${keyboard.id}/payment`} state={{ keyboard, quantity }}>
                    <button id="addToCart">Purchase</button>
                </Link>
            </div>

            <div className="product-features">
                <h2>Features</h2>
                <ul>
                    {
                        keyboard.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))
                    }
                </ul>
            </div>

            <div className="product-manual">
                <div className="product-manual-setup">
                    <h2>Setup Instructions</h2>
                    <ol>
                        {
                            keyboard.setup.map((s, index) => (
                                <li key={index}>{s}</li>
                            ))
                        }
                    </ol>
                </div>
                <div className="product-manual-customization">
                    <h2>Customization Instructions</h2>
                    <ul>
                        {
                            keyboard.customization.map((c, index) => (
                                <li key={index}>{c}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="product-manual-maintenance">
                    <h2>Maintenance and Care</h2>
                    <ul>
                        {
                            keyboard.maintenance.map((m, index) => (
                                <li key={index}>{m}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="product-manual-compliance">
                    <h2>Safety and Compliance</h2>
                    <ul>
                        {
                            keyboard.compliance.map((comp, index) => (
                                <li key={index}>{comp}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="product-manual-warranty">
                    <h2>Warranty</h2>
                    <ul>
                        <li>Warranty Period: 2 years from the date of purchase.</li>
                        <li>Customer Support: For assistance, contact customer support via the manufacturer’s website or send an email at the company’s email address.</li>
                    </ul>
                    <p><strong>Manufacturer’s Website: </strong>www.keystaxx.com</p>
                    <p><strong>Customer Support Email: </strong>support@keystaxx.com</p>
                </div>
            </div>

            <div className="product-reviews">
                <h2>Reviews</h2>
                {
                    keyboard.reviews.map((review) => (
                        <div key={review.id}>
                            <h3>{review.reviewer} - {review.rating}{renderStarRating(review.rating)}</h3>
                            <p>{review.comment}</p>
                        </div>
                    ))
                }
                {renderUserReview()}
            </div>

            <div className="product-reviews-user">
                <h2>Add a Review</h2>
                Name:&nbsp;<input type="text" name="name" id="name" />
                <br />
                Rating:&nbsp;<input type="text" name="rating" id="rating"/>
                <br />
                Comment: 
                <br />
                <textarea name="comment" id="comment" cols="50" rows="10"></textarea>
                <br />
                <button type="submit" onClick={addUserReview}>Submit</button>
            </div>
        </>
    )
};
