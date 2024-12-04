import { Link } from 'react-router-dom'
/*
https://www.itech.ph/product/redragon-k683wb-rgb-fidd-8k-adjustable-magnetic-switch-gaming-keyboard/
https://www.itech.ph/product/keychron-k2-v2-84-key-white-backlight-wireless-mechanical-keyboard-hot-swappable-k2-a1h-red/
https://www.itech.ph/product/rk-royal-kludge-rk-h81-81-keys-tri-mode-with-knob-control-rgb-wireless-mechanical-keyboard-star-night-sky-cyan-switch/
https://www.itech.ph/product/rk-royal-kludge-rk96-rgb-limited-edition-tri-mode-hot-swappable-mechanical-keyboard-forest-blue-brown-switch/
https://www.itech.ph/product/rk-royal-kludge-h81-81-keys-tri-mode-with-knob-control-rgb-wireless-mechanical-keyboard-skycan-switch/

https://redragonshop.com/products/s142-wireless-combo
https://redragonshop.com/products/shiva-k512
https://redragonshop.com/products/shiva-k512-white-gaming-keyboard
https://redragonshop.com/products/aditya-k513-membrane-gaming-keyboard
https://redragonshop.com/products/shiva-k515-membrane-gaming-keyboard
*/
const keyboards = [
    {
        id: 1,
        title: "K683WB-RGB Fidd 8K Adjustable Magnetic Switch Gaming Keyboard",
        type: "Mechanical",
        layout: "60% (61 keys)",
        keyswitch: "Blue Switch",
        keycaps: "White, Mint Cyan",
        backlighting: "RGB",
        connectivity: "Wired (USB-C)",
        dimensions: "279mm x 114mm x 50mm",
        features: [
            
        ],
        price: 3550.00,
        reviews: [
            {
                id: 1,
                rating: 5,
                reviewer: "Alice",
                comment: "Absolutely love this keyboard! The switches are smooth, and the build quality is top-notch. Highly recommend!"
            },
            {
                id: 2,
                rating: 4,
                reviewer: "Bob",
                comment: "Great keyboard overall, but the spacebar feels a bit off compared to the rest of the keys. Still, I enjoy typing on it."
            },
            {
                id: 3,
                rating: 3,
                reviewer: "Charlie",
                comment: "Good for the price, but the keycaps feel cheap and the sound of the keys could be better. Not bad, but not great."
            },
            {
                id: 4,
                rating: 5,
                reviewer: "Diana",
                comment: "This keyboard is perfect for gaming. The RGB lighting is vibrant, and the keys respond quickly. Worth every pesos!"
            },
            {
                id: 5,
                rating: 2,
                reviewer: "Ethan",
                comment: "Had high hopes, but the keyboard arrived with a few dead keys, and I wasn't impressed with the overall feel. Disappointing."
            }
        ],
        image: "https://www.itech.ph/wp-content/uploads/2024/04/Redragon-K683WB-RGB-8.jpg"
    },
    {
        id: 2,
        title: "K2 V2 84-Key White Backlight Wireless Mechanical Keyboard Hot Swappable K2-A1H [Red]",
        type: "Mechanical",
        layout: "75% (84 keys)",
        keyswitch: "Red Switch",
        keycaps: "Black, White, Red",
        backlighting: "White",
        connectivity: "Wireless",
        dimensions: "343mm x 127mm x 50mm",
        features: [

        ],
        price: 4295.00,
        reviews: [
            {
                id: 1,
                rating: 4,
                reviewer: "Fiona",
                comment: "Solid keyboard! The tactile feedback is excellent, though I wish the software was a bit more intuitive for customizing RGB settings."
            },
            {
                id: 2,
                rating: 5,
                reviewer: "George",
                comment: "Fantastic build quality and an absolute joy to type on. The mechanical switches are smooth and satisfying, definitely worth the price."
            },
            {
                id: 3,
                rating: 3,
                reviewer: "Hannah",
                comment: "Good keyboard, but it’s quite noisy for office use. The performance is great, but it might be too loud in a shared workspace."
            },
            {
                id: 4,
                rating: 1,
                reviewer: "Ian",
                comment: "Terrible experience. The keyboard stopped working after two days, and customer service was unhelpful. I would not recommend this product."
            },
            {
                id: 5,
                rating: 4,
                reviewer: "Jessica",
                comment: "Really impressed with the design and feel. The keys are responsive, but the wrist rest could be a little more comfortable."
            }
        ],
        image: "https://www.itech.ph/wp-content/uploads/2021/03/keychron-k2-v2-red.jpg"
    },
    {
        id: 3,
        title: " Royal Kludge RK H81 81 Keys Tri-Mode with Knob Control RGB Wireless Mechanical Keyboard (Star Night) Sky Cyan Switch",
        type: "Mechanical",
        layout: "75% (81 keys)",
        keyswitch: "Sky Cyan Switch",
        keycaps: "Royal Blue, Brown, Black",
        backlighting: "RGB",
        connectivity: "Wired (USB-C)/Wireless",
        dimensions: "318mm x 127mm x 50mm",
        features: [

        ],
        price: 2750.00,
        reviews: [
            {
                id: 1,
                rating: 5,
                reviewer: "Kyle",
                comment: "Amazing keyboard! The feel of the keys is incredibly satisfying, and the RGB lighting is beautiful. It's perfect for long typing sessions."
            },
            {
                id: 2,
                rating: 5,
                reviewer: "Lily",
                comment: "I couldn't be happier with this keyboard. The switches are super responsive, and the overall design is sleek and modern. It's a joy to use."
            },
            {
                id: 3,
                rating: 5,
                reviewer: "Mark",
                comment: "This is hands down the best keyboard I've ever used. The key presses are crisp, and it feels so durable. Absolutely worth every cent."
            },
            {
                id: 4,
                rating: 5,
                reviewer: "Nina",
                comment: "I love everything about this keyboard—the feel, the sound, the customization options. It's a perfect addition to my setup!"
            },
            {
                id: 5,
                rating: 5,
                reviewer: "Oscar",
                comment: "Superb keyboard! Typing has never been more satisfying. The keys are smooth, the design is fantastic, and the RGB is stunning!"
            }
        ],
        image: "https://www.itech.ph/wp-content/uploads/2023/12/RK-Royal-Kludge-RK-H81-81-Keys-Tri-Mode-with-Knob-Control-RGB-Wireless-Mechanical-Keyboard-Star-Night-Sky-Cyan-Switch-jpg.webp"
    },
    {
        id: 4,
        title: "Royal Kludge RK96 RGB Limited Edition Tri-Mode Hot-Swappable Mechanical Keyboard – Forest Blue | Brown Switch",
        type: "Mechanical",
        layout: "96% (96 keys)",
        keyswitch: "Brown Switch",
        keycaps: "Forest Blue, Sky Blue, Dark Grey, Khaki",
        backlighting: "RGB",
        connectivity: "Wired (USB-C)/Wireless",
        dimensions: "395mm x 152mm x 50mm",
        features: [

        ],
        price: 2950.00,
        reviews: [
            {
                id: 1,
                rating: 5,
                reviewer: "Sophia",
                comment: "This keyboard is incredible! The key presses are smooth, and the RGB is amazing. It really enhances my setup!"
            },
            {
                id: 2,
                rating: 5,
                reviewer: "Lucas",
                comment: "Absolutely love it. The typing experience is second to none, and it's perfect for gaming. Worth every penny!"
            },
            {
                id: 3,
                rating: 5,
                reviewer: "Olivia",
                comment: "Perfect mechanical keyboard! The tactile feedback is perfect, and I love how customizable the RGB lighting is. A must-buy!"
            },
            {
                id: 4,
                rating: 4,
                reviewer: "James",
                comment: "Great keyboard overall, but the spacebar is slightly wobbly. Still, the performance and build quality are top-notch."
            },
            {
                id: 5,
                rating: 5,
                reviewer: "Mia",
                comment: "Best keyboard I've used for work and gaming. The switches are smooth, and it's so comfortable to type on for long hours."
            }
        ],
        image: "https://www.itech.ph/wp-content/uploads/2023/11/RK-Royal-Kludge-RK96-RGB-Limited-Edition-Tri-Mode-Hot-Swappable-Mechanical-Keyboard-Forest-Blue-Brown-Switch-jpg.webp"
    },
    {
        id: 5,
        title: "Royal Kludge H81 81 Keys Tri-Mode with Knob Control RGB Wireless Mechanical Keyboard",
        type: "Mechanical",
        layout: "75% (81 keys)",
        keyswitch: "SkyCan Switch",
        keycaps: "White, Dark Grey",
        backlighting: "RGB",
        connectivity: "Wired (USB-C)/Wireless",
        dimensions: "343mm x 127mm x 50mm",
        features: [

        ],
        price: 2750.00,
        reviews: [
            {
                id: 1,
                rating: 5,
                reviewer: "Ella",
                comment: "This keyboard is amazing! The keys feel great to type on, and the build quality is fantastic. RGB lighting is also a big plus!"
            },
            {
                id: 2,
                rating: 5,
                reviewer: "Liam",
                comment: "Absolutely perfect! The switches are so responsive, and the sound is just right. Definitely a great buy for any gamer or typist."
            },
            {
                id: 3,
                rating: 5,
                reviewer: "Noah",
                comment: "In love with this keyboard. The keycaps feel premium, the RGB is gorgeous, and it’s extremely durable. Highly recommend!"
            },
            {
                id: 4,
                rating: 3,
                reviewer: "Ava",
                comment: "It’s a decent keyboard, but I expected more for the price. The switches are a bit too loud, and the software is clunky. It's fine, but not great."
            },
            {
                id: 5,
                rating: 5,
                reviewer: "Oliver",
                comment: "Best mechanical keyboard I've used! The tactile feel is fantastic, and it's perfect for both work and gaming. Couldn't ask for more."
            }
        ],
        image: "https://www.itech.ph/wp-content/uploads/2022/10/RK-Royal-Kludge-H81-81-Keys-Tri-Mode-with-Knob-Control-RGB-Wireless-Mechanical-Keyboard-SkyCan-Switch.jpg"
    },
    {
        id: 6,
        title: "RYLO PRO S142 Membrane Gaming Keyboard & Mouse Tri-Mode Combo",
        type: "Membrane",
        layout: "98% (98 keys)",
        keyswitch: "None",
        keycaps: "Black",
        backlighting: "RGBe",
        connectivity: "Wired (USB-C)/Wireless",
        dimensions: "386mm x 160mm x 70mm",
        features: [

        ],
        price: 2400.00,
        reviews: [
            {
                id: 1,
                rating: 5,
                reviewer: "Emily",
                comment: "This keyboard is exactly what I needed for work. The keys are soft and quiet, perfect for typing long documents without disturbing others. It's comfortable to use, and the price is unbeatable for the quality."
            },
            {
                id: 2,
                rating: 4,
                reviewer: "Ethan",
                comment: "I’ve been using this keyboard for a few weeks now, and I’m generally happy with it. The key travel is nice, and the overall feel is great for typing. My only complaint is that the keys could be a little more responsive, but for the price, it’s a solid option."
            },
            {
                id: 3,
                rating: 3,
                reviewer: "Olivia",
                comment: "Overall, this is a decent membrane keyboard. The typing experience is okay—keys are quiet, but they feel a bit too soft for my liking. I don’t get much feedback from the keys, and it feels somewhat sluggish when typing quickly. The build quality is good, but the key presses aren’t as satisfying as I hoped. If you’re just looking for a basic keyboard for casual use, it’s fine, but if you type a lot or need something more responsive, you might want to consider a different option."
            },
            {
                id: 4,
                rating: 5,
                reviewer: "James",
                comment: "Perfect membrane keyboard for my home office setup. It's quiet, comfortable, and has a solid build. I love how smooth the keys feel, and I’ve been able to type for hours without feeling any strain. Highly recommend for anyone needing an affordable yet reliable keyboard."
            },
            {
                id: 5,
                rating: 4,
                reviewer: "Sarah",
                comment: "Good keyboard overall, especially for the price. The keys are quiet, and the typing experience is smooth, but I wish the key travel was a little bit more pronounced. It’s still great for everyday tasks and casual gaming, though. Definitely worth the investment."
            }
        ],
        image: "https://redragonshop.com/cdn/shop/files/RedragonS142WirelessGamingKeyboard_MouseCombo_1_4c660e2d-f531-43a1-9b71-038073881f7d.png?v=1732070383"
    },
    {
        id: 7,
        title: "SHIVA K512 Membrane Gaming Keyboard",
        type: "Membrane",
        layout: "100% (104 keys)",
        keyswitch: "None",
        keycaps: "Black",
        backlighting: "RGB",
        connectivity: "Wired (USB-C)/Wireless",
        dimensions: "464mm x 213mm x 70mm",
        features: [

        ],
        price: 2200.00,
        reviews: [
            {
                id: 1,
                rating: 5,
                reviewer: "Benjamin",
                comment: "I’m really impressed with this membrane keyboard! The keys feel great to type on—soft yet responsive. It’s quiet, which is a huge plus for me since I work in a shared space. For the price, this keyboard delivers excellent performance."
              },
              {
                id: 2,
                rating: 3,
                reviewer: "Isabella",
                comment: "It’s an okay keyboard. The keys are fairly quiet, but they feel a bit too soft for my liking. I don’t get much feedback when typing quickly, and it’s not as comfortable as I hoped. It works fine for light tasks, but if you're someone who types a lot, you might want to try something else."
              },
              {
                id: 3,
                rating: 4,
                reviewer: "Liam",
                comment: "Good keyboard for the price. The key presses are smooth, and it’s quiet enough not to disturb anyone around me. The only downside is that the build quality feels a little cheap, but it’s still a solid option for casual use and typing."
              }
        ],
        image: "https://redragonshop.com/cdn/shop/products/redragonk512manual.png?v=1609237143"
    },
    {
        id: 8,
        title: "SHIVA K512 WHITE Membrane Gaming Keyboard",
        type: "Membrane",
        layout: "100% (104 keys)",
        keyswitch: "None",
        keycaps: "Whiten",
        backlighting: "RGB",
        connectivity: "Wired (USB-C)/Wireless",
        dimensions: "464mm x 213mm x 70mm",
        features: [
            {
                id: 1,
                rating: 5,
                reviewer: "David",
                comment: "This membrane keyboard is fantastic! It's super quiet, which is great for typing in a shared space. The key presses feel smooth and responsive. It's also very comfortable for long typing sessions. Highly recommend it if you're looking for an affordable, reliable keyboard!"
              },
              {
                id: 2,
                rating: 4,
                reviewer: "Sophia",
                comment: "Overall, this is a solid keyboard. The keys are quiet and have a good amount of travel, making typing comfortable. The only downside is that the build quality feels a little light, and the keycaps could be more durable. But for the price, it’s a great choice!"
              },
              {
                id: 3,
                rating: 3,
                reviewer: "Ethan",
                comment: "The keyboard works fine for basic use, but I was expecting a bit more. The keys feel a little mushy, and there’s not enough feedback when typing quickly. It’s fine for light work or casual use, but I wouldn’t recommend it for long typing sessions or gaming."
              }
        ],
        price: 2400.00,
        reviews: [

        ],
        image: "https://redragonshop.com/cdn/shop/products/whitekeyboard.png?v=1621668482"
    },
    {
        id: 9,
        title: "ADITYA K513 Membrane Gaming Keyboard",
        type: "Membrane",
        layout: "100% (104 keys",
        keyswitch: "Blue Switch",
        keycaps: "Black",
        backlighting: "RGB",
        connectivity: "Wired (USB-C)/Wireless",
        dimensions: "441mm x 165mm x 35mm",
        features: [

        ],
        price: 1900.00,
        reviews: [
            {
                id: 1,
                rating: 5,
                reviewer: "Charlotte",
                comment: "This membrane keyboard is fantastic for the price! The keys are quiet and smooth, perfect for typing long documents without disturbing anyone. The build quality is solid, and the layout is very comfortable."
              },
              {
                id: 2,
                rating: 4,
                reviewer: "Jack",
                comment: "I’m impressed with this keyboard. The membrane switches are surprisingly responsive, and the overall feel is soft yet firm. Only downside is the lack of customization options for the keys."
              },
              {
                id: 3,
                rating: 3,
                reviewer: "Sophia",
                comment: "It’s a decent keyboard for casual use, but the key presses feel a bit mushy compared to what I’m used to. The lack of tactile feedback is noticeable when gaming. Overall, it’s fine for everyday tasks but not for high-performance gaming."
              },
              {
                id: 4,
                rating: 2,
                reviewer: "Henry",
                comment: "I had high hopes for this keyboard, but I was quite disappointed. The keys are soft but feel unresponsive at times, especially during typing sessions that require more pressure. After a few weeks of use, the keys started to feel even more mushy, and I began to notice some issues with key registration. It’s okay for casual typing, but I wouldn't recommend it for anyone who types a lot or needs precision. The build quality is decent, but the overall typing experience left me wanting more. If you're looking for a membrane keyboard that’s responsive and reliable, I’d suggest looking elsewhere."
              },
              {
                id: 5,
                rating: 5,
                reviewer: "Mason",
                comment: "This is the best membrane keyboard I’ve used! The keys are quiet, and the typing experience is smooth. It’s perfect for my work environment where I need to keep noise to a minimum. Great value for the price."
              }
        ],
        image: "https://redragonshop.com/cdn/shop/files/ADITYAK513MembraneGamingKeyboard3.png?v=1693815011"
    },
    {
        id: 10,
        title: "SHIVA K515 Membrane Gaming Keyboard",
        type: "Membrane",
        layout: "98% (98 keys)",
        keyswitch: "None",
        keycaps: "Black",
        backlighting: "RGB",
        connectivity: "Wired (USB-C)/Wireless",
        dimensions: "383mm x 156mm x 40mm",
        features: [
            
        ],
        price: 1800.00,
        reviews: [
            {
                id: 1,
                rating: 5,
                reviewer: "Alice",
                comment: "I absolutely love this keyboard! The keys are soft yet responsive, and the typing experience is smooth. It's very quiet, which is perfect for my office. For the price, it’s an incredible deal!"
              },
              {
                id: 2,
                rating: 4,
                reviewer: "Benjamin",
                comment: "Solid keyboard for the price. The keys have just the right amount of resistance, and it's comfortable for long typing sessions. Only issue is that it could be a bit more durable, but otherwise a great choice."
              },
              {
                id: 3,
                rating: 5,
                reviewer: "Chloe",
                comment: "This keyboard has been fantastic for my daily work. It’s smooth, quiet, and the keys feel very responsive. I can type for hours without any discomfort. Totally worth the investment!"
              },
              {
                id: 4,
                rating: 4,
                reviewer: "Daniel",
                comment: "Great membrane keyboard! The typing experience is much better than I expected. The only downside is that the build quality is a little light, but overall, it’s a solid performer for the price."
              },
              {
                id: 5,
                rating: 5,
                reviewer: "Ella",
                comment: "I’ve been using this keyboard for a few weeks now, and I’m very happy with it. The key presses are quiet, smooth, and the ergonomics are spot on. It’s perfect for both work and casual gaming."
              },
              {
                id: 6,
                rating: 4,
                reviewer: "Felix",
                comment: "Nice membrane keyboard with great typing feel. It’s responsive and relatively quiet, which is perfect for shared spaces. The only thing I wish for is a more solid build, but for the price, it’s a great deal."
              },
              {
                id: 7,
                rating: 5,
                reviewer: "Grace",
                comment: "Couldn’t be happier with this keyboard. It’s quiet, comfortable, and the keys feel really nice to press. It's perfect for office work and doesn't make any noise, which is a huge plus in my environment."
              }
        ],
        image: "https://redragonshop.com/cdn/shop/files/SHIVAK515MembraneGamingKeyboard_2_ef94fa2a-efca-446e-8e36-a812e69eea8f.png?v=1720680803"
    },
]

export default function Listing() {
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
                                            <button>Purchase</button>
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
