import { Link } from "react-router-dom"
import keyboardsData from '../assets/data/keyboards.json'
import mech1 from "../assets/image/mech-showcase 01.jpg"
import mech2 from "../assets/image/mech-showcase 02.jpg"
import mech3 from "../assets/image/mech-showcase03.jpg"
import memb1 from "../assets/image/mem-showcase01.jpg"
import memb2 from "../assets/image/mem-showcase02.jpg"
import arti1 from "../assets/image/arti-showcase01.webp"
import arti2 from "../assets/image/arti-showcase02.webp"
import arti3 from "../assets/image/arti-showcase03.webp"

export default function Showcase() {
    const keyboards = keyboardsData
    const filteredReviews = keyboards.filter(keyboard =>
        keyboard.reviews.some(review => review.rating >= 4)
    )

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
            <div className="showcase-wrapper-main">
                {/* membrane and mechanical keyboards showcase */}
                <div className="showcase-wrapper">
                    <h1 className="page-title">Check our Keyboards</h1>
                    <p style={{ textShadow: "1px 2px var(--lapis-lazuli-dark)", margin: "0 50px" }}>
                        Discover the ideal blend of performance and aesthetics with our wide range of mechanical and membrane keyboards. Whether you&apos;re a professional gamer or a casual typist, we offer the perfect keyboard for every need, designed for durability, comfort, and style.
                    </p>

                    <div className="showcase-wrapper-2">
                        <div className="showcase-img">
                            <img 
                                src={mech1} 
                                alt="mech-showcase01"
                                style={{ width: "720px", height: "480px" }} 
                            />
                        </div>
                        <div className="showcase-info">
                            <p>
                                This mechanical keyboard combines high-end switches with premium keycaps, offering a tactile typing experience that ensures both speed and precision. Perfect for professionals who demand reliability and performance in their daily tasks, whether at work or play.
                            </p>
                            <hr />
                        </div>
                    </div>

                    <div className="showcase-wrapper-2">
                        <div className="showcase-info">
                            <p>
                                Featuring RGB backlighting and customizable keys, this mechanical keyboard is built for those who seek both functionality and flair. The durable construction ensures it stands the test of time, while its ergonomic design reduces strain during long typing sessions.
                            </p>
                            <hr />
                        </div>
                        <div className="showcase-img">
                            <img 
                                src={mech2} 
                                alt="mech-showcase02"
                                style={{ width: "720px", height: "480px" }} 
                            />
                        </div>
                    </div>

                    <div className="showcase-wrapper-2">
                        <div className="showcase-img">
                            <img 
                                src={mech3} 
                                alt="mech-showcase03"
                                style={{ width: "720px", height: "480px" }} 
                            />
                        </div>
                        <div className="showcase-info">
                            <p>
                                Crafted for serious gamers, this mechanical keyboard boasts ultra-responsive switches and programmable keys. Its fast input response and anti-ghosting technology ensure flawless gameplay, while the sleek design makes it an impressive addition to any gaming setup.
                            </p>
                            <hr />
                        </div>
                    </div>

                    <div className="showcase-wrapper-2">
                        <div className="showcase-info">
                            <p>
                                This membrane keyboard combines a sleek, minimalist design with quiet, responsive keys, making it an excellent choice for office environments. The ergonomic layout provides comfort for long hours of typing, while its slim profile ensures a clutter-free workspace.
                            </p>
                            <hr />
                        </div>
                        <div className="showcase-img">
                            <img 
                                src={memb1} 
                                alt="memb-showcase01"
                                style={{ width: "720px", height: "480px" }} 
                            />
                        </div>
                    </div>

                    <div className="showcase-wrapper-2">
                        <div className="showcase-img">
                            <img 
                                src={memb2} 
                                alt="memb-showcase02"
                                style={{ width: "720px", height: "480px" }} 
                            />
                        </div>
                        <div className="showcase-info">
                            <p>
                                Ideal for those who prefer quiet, smooth keystrokes, this membrane keyboard provides a soft typing experience. The lightweight design makes it portable, while the reliable performance ensures it excels in everyday tasks such as typing, web browsing, and office work.
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
                {/* artisan keyboard showcase */}
                <div className="showcase-wrapper-artisan">
                    <h1 className="page-title">Showcase Your Artistry</h1>
                    <p style={{ textShadow: "1px 2px var(--lapis-lazuli-dark)", margin: "0 50px" }}>
                        Explore the beauty of artisan keyboards, where creativity meets craftsmanship. Our community of keyboard enthusiasts and creators showcases custom-built, one-of-a-kind designs that take personalization to the next level.
                    </p>

                    <div className="showcase-wrapper-2">
                        <div className="showcase-info">
                        <p>
                                This custom artisan keyboard is a perfect example of blending form with function and nature. With hand-crafted keycaps and a meticulously designed layout, it’s a statement piece for anyone who appreciates the art of mechanical keyboards.
                            </p>
                            <hr />
                        </div>
                        <div className="showcase-img">
                            <img 
                                src={arti1} 
                                alt="arti-showcase01"
                                style={{ width: "720px", height: "480px" }} 
                            />
                        </div>
                    </div>

                    <div className="showcase-wrapper-2">
                        <div className="showcase-img">
                            <img 
                                src={arti2} 
                                alt="arti-showcase02"
                                style={{ width: "720px", height: "480px" }} 
                            />
                        </div>
                        <div className="showcase-info">
                            <p>
                                This artisan keyboard showcases a high level of attention to detail, from the intricate designs on the keycaps to the premium materials used in construction. A true work of art, it offers a unique typing experience while making a bold statement on any desk.
                            </p>
                            <hr />
                        </div>
                    </div>

                    <div className="showcase-wrapper-2">
                        <div className="showcase-info">
                            <p>
                                A perfect blend of elegance and innovation, this artisan keyboard is a masterpiece in both design and functionality. Every keycap is hand-painted to create a truly unique set, making it not just a tool for typing, but a piece of art to be admired.
                            </p>
                            <hr />
                        </div>
                        <div className="showcase-img">
                            <img 
                                src={arti3} 
                                alt="arti-showcase03"
                                style={{ width: "720px", height: "480px" }} 
                            />
                        </div>
                    </div>
                </div>
                {/* product review page */}
                <div className="showcase-wrapper-reviews">
                    <div>
                        <h1 className="page-title">Check What our Customers Have to Say</h1>
                        <p style={{ textShadow: "1px 2px var(--lapis-lazuli-dark)", margin: "0 50px", marginBottom: "40px" }}>
                            Take a look at what our customers have to say about our products. Happy shopping!
                        </p>
                    </div>

                    <div className="showcase-product-reviews">
                        {
                            filteredReviews.map(keyboard => (
                                <div key={keyboard.id} className="showcase-product-card">
                                    <img 
                                        src={keyboard.image} 
                                        alt={keyboard.title} 
                                        className="showcase-product-image" 
                                    />
                                    <div className="showcase-product-info">
                                        <h2>{keyboard.title}</h2>
                                        <div className="showcase-reviews">
                                            {
                                                keyboard.reviews.filter(review => review.rating >= 4).map(review => (
                                                    <div key={review.id} className="showcase-review">
                                                        <p><strong>{review.reviewer} - {review.rating}</strong></p>
                                                        {renderStarRating(review.rating)}
                                                        <p>{review.comment}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <Link to={`/listing/${keyboard.id}`} state={{ keyboard }}>
                                            <button className="learn-more-btn">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
};
