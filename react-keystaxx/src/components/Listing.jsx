import { useState } from 'react';
import { Link } from 'react-router-dom'
import keyboardsData from '../assets/data/keyboards.json'

export default function Listing() {
    const [keyboards] = useState(keyboardsData)
    const [searchQuery, setSearchQuery] = useState("")
    const [filterOption, setFilterOption] = useState("all")
    const [sortOption, setSortOption] = useState("")

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

    const filteredKeyboards = keyboards.filter((keyboard) => {
        const matchesSearch = keyboard.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter =
            filterOption === "all" ||
            (filterOption === "mechanical" && keyboard.type === "Mechanical") ||
            (filterOption === "membrane" && keyboard.type === "Membrane")
        
        return matchesSearch && matchesFilter
    })

    const sortedKeyboards = [...filteredKeyboards].sort((a, b) => {
        if (sortOption === "title") {
            return a.title.localeCompare(b.title)   // alphabetical ascending
        }

        else if (sortOption === "priceLowToHigh") {
            return a.price - b.price    // low to high
        }

        else if (sortOption === "priceHighToLow") {
             return b.price - a.price    // high to low
        }

        return  // default
    });

    return (
        <>
            <div className="product-list">
                <h1 className='page-title-2'>Product Listing</h1>
                {/* PRODUCT FILTERS */}
                <div className="product-filters">
                    <div className="search-bar">
                        <label htmlFor="search">Search:&nbsp;</label>
                        <input
                            type="text"
                            placeholder="Search products"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="filter-dropdown">
                        <label htmlFor="filter">Keyboard Type:&nbsp;</label>
                        <select
                            id="filter"
                            value={filterOption}
                            onChange={(e) => setFilterOption(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="mechanical">Mechanical</option>
                            <option value="membrane">Membrane</option>
                        </select>
                    </div>

                    <div className="sort-dropdown">
                        <label htmlFor="sort">Sort By:&nbsp;</label>
                        <select
                            id="sort"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="">Default</option>
                            <option value="title">Title (A-Z)</option>
                            <option value="priceLowToHigh">Price (Low to High)</option>
                            <option value="priceHighToLow">Price (High to Low)</option>
                        </select>
                    </div>
                </div>
                {/* KEYBOARDS LISTING */}
                <div className="all-keyboards">
                    <div className="product-list-card">
                        {
                            sortedKeyboards.length > 0 ? (
                                sortedKeyboards.map((keyboard) => {
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
                                            <p><strong>{keyboard.title}</strong><br /></p>
                                            &#8369; {keyboard.price.toFixed(2)}<br />
                                            <strong>Rating: </strong>{averageRating}{renderStarRating(averageRating)}<br />
                                            <Link to={`/listing/${keyboard.id}`} state={{ keyboard }}>
                                                <button>Learn More</button>
                                            </Link>
                                        </div>
                                    );
                                })
                            ) : (
                                /* DEFAULT PRODUCT DISPLAY */
                                <>                                
                                    <h3>No products found. Find other products here instead.</h3>
                                    <div className="product-list-card">
                                        {   
                                            keyboards.map((keyboard) => {
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
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
};
