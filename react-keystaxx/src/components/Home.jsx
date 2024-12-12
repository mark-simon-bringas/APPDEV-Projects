import { Link } from 'react-router-dom'
import HomeVideoBg from '../assets/video/keystaxx-home-bg.mp4'

export default function Home() {
    return (
        <>
            <div className="home-info">
                <video autoPlay muted loop className='home-video-bg'>
                    <source src={HomeVideoBg} type='video/mp4'/>
                </video>
                <div className='home-overlay'></div>
                <div className='home-desc'>
                    <h1><center>KEYSTAXX</center></h1>
                    <p>
                        Handcrafted artisan and custom mechanical keyboards designed for every need – from professional office work to high-performance gaming setups, and everything in between.
                        Whether you’re looking for tactile feedback, ergonomic comfort, or aesthetic designs, Keystaxx offers the perfect keyboard tailored to your preferences. 
                        Discover exceptional quality and innovation with Keystaxx, where craftsmanship meets functionality.
                    </p>
                    <div className="cta-buttons">
                        <Link to='/listing' className="btn-shop">Shop Now</Link>
                        <Link to='/company' className="btn-learn-more">Learn More</Link>
                    </div>
                </div>
            </div>

            <section className="product-categories">
                <h2>Our Keyboards</h2>
                <div className="categories">
                    <div className="category">
                        <h3>Regular Mechanical Keyboards</h3>
                        <p>Reliable and durable, built for professionals and office workers.</p>
                        <Link to='/showcase' className='btn-category'>Explore</Link>
                    </div>
                    <div className="category">
                        <h3>Gaming Keyboards</h3>
                        <p>Responsive and customizable, designed for gamers and enthusiasts.</p>
                        <Link to='/showcase' className='btn-category'>Explore</Link>
                    </div>
                </div>
            </section>

            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    <div className="product">
                        <img 
                            src="https://www.itech.ph/wp-content/uploads/2023/11/RK-Royal-Kludge-RK96-RGB-Limited-Edition-Tri-Mode-Hot-Swappable-Mechanical-Keyboard-Forest-Blue-Brown-Switch-jpg.webp" 
                            alt="Product 1"
                            style={{ width: "300px", height: "300px", objectFit: "cover" }}
                        />
                        <h3>Amazing Mechanical Keyboard</h3>
                        <p>Perfect for office and gaming.</p>
                        <Link to='/listing' className="btn-product">Buy Now</Link>
                    </div>
                    <div className="product">
                        <img 
                            src="https://redragonshop.com/cdn/shop/files/ADITYAK513MembraneGamingKeyboard3.png?v=1693815011" 
                            alt="Product 2"
                            style={{ width: "300px", height: "300px", objectFit: "cover" }}
                        />
                        <h3>Spectacular Membrane Keyboard</h3>
                        <p>Designed for comfort during long typing sessions.</p>
                        <Link to='/listing' className="btn-product">Buy Now</Link>
                    </div>
                </div>
            </section>

            <section className="about-us">
                <h2>About Keystaxx</h2>
                <p>At Keystaxx, we combine craftsmanship with technology to design and build the best mechanical keyboards for all users – whether you&apos;re an office worker, gamer, or keyboard enthusiast.</p>
            </section>

            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial">
                        <p>&quot;I absolutely love my Keystaxx keyboard! The quality and feel are unmatched.&quot; – Emma</p>
                    </div>
                    <div className="testimonial">
                        <p>&quot;Perfect for my gaming setup. The RGB lighting and custom switches are amazing.&quot; – John</p>
                    </div>
                    <div className="testimonial">
                        <p>&quot;The ergonomic design really helped with my wrist pain. Highly recommend!&quot; – Sarah</p>
                    </div>
                </div>
            </section>
        </>
    )
};
