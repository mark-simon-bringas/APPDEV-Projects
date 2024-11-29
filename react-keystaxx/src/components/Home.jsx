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
                        Handcrafted artisan and custom mechanical keyboards for every need – from office work to gaming setups. Discover your perfect keyboard with Keystaxx.
                    </p>
                    <div className="cta-buttons">
                        <a href="/shop" className="btn-shop">Shop Now</a>
                        <a href="/about" className="btn-learn-more">Learn More</a>
                    </div>
                </div>
            </div>

            <section className="product-categories">
                <h2>Our Keyboards</h2>
                <div className="categories">
                    <div className="category">
                        <h3>Artisan Keyboards</h3>
                        <p>Handcrafted, high-quality designs for those who want a personal touch.</p>
                        <a href="/shop/artisan" className="btn-category">Explore</a>
                    </div>
                    <div className="category">
                        <h3>Regular Mechanical Keyboards</h3>
                        <p>Reliable and durable, built for professionals and office workers.</p>
                        <a href="/shop/regular" className="btn-category">Explore</a>
                    </div>
                    <div className="category">
                        <h3>Gaming Keyboards</h3>
                        <p>Responsive and customizable, designed for gamers and enthusiasts.</p>
                        <a href="/shop/gaming" className="btn-category">Explore</a>
                    </div>
                </div>
            </section>

            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    <div className="product">
                        <img src="path-to-your-image.jpg" alt="Product 1"/>
                        <h3>Custom Mechanical Keyboard</h3>
                        <p>Perfect for office and gaming.</p>
                        <a href="/product/1" className="btn-product">Buy Now</a>
                    </div>
                    <div className="product">
                        <img src="path-to-your-image.jpg" alt="Product 2"/>
                        <h3>Artisan Keycap Set</h3>
                        <p>Handcrafted keycaps for a unique touch.</p>
                        <a href="/product/2" className="btn-product">Buy Now</a>
                    </div>
                    <div className="product">
                        <img src="path-to-your-image.jpg" alt="Product 3"/>
                        <h3>Ergonomic Keyboard</h3>
                        <p>Designed for comfort during long typing sessions.</p>
                        <a href="/product/3" className="btn-product">Buy Now</a>
                    </div>
                </div>
            </section>

            <section className="about-us">
                <h2>About Keystaxx</h2>
                <p>At Keystaxx, we combine craftsmanship with technology to design and build the best mechanical keyboards for all users – whether you're an office worker, gamer, or keyboard enthusiast.</p>
            </section>

            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial">
                        <p>"I absolutely love my Keystaxx keyboard! The quality and feel are unmatched." – Emma</p>
                    </div>
                    <div className="testimonial">
                        <p>"Perfect for my gaming setup. The RGB lighting and custom switches are amazing." – John</p>
                    </div>
                    <div className="testimonial">
                        <p>"The ergonomic design really helped with my wrist pain. Highly recommend!" – Sarah</p>
                    </div>
                </div>
            </section>
        </>
    )
};
