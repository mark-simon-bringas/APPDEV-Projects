import { useLocation } from "react-router-dom"

export default function ListingIndiv() {
    const location = useLocation()
    const keyboard = location.state.keyboard

    return (
        <>
            {/* test */}
            <h1>Product page for {keyboard.title}</h1>
            <img
                src={keyboard.image}
                alt={keyboard.title}
                title={keyboard.title}
                style={{ width: "800px", height: "800px" }}
            />
            {
                keyboard.reviews.map((review) => (
                    <div key={review.id}>
                        <h3>{review.reviewer} - {review.rating} / 5</h3>
                        <p>{review.comment}</p>
                    </div>
                ))
            }
        </>
    )
};
