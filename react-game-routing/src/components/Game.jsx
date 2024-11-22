import { useLocation } from "react-router-dom"

export default function Game() {
    const location = useLocation()
    const game = location.state.game

    return (
        <>
            <div className="game-info">
                <h1>{game.name}</h1>
                <h3>Publisher: {game.publisher}</h3>
                <h3>Developer: {game.developer}</h3>
                <p>{game.description}</p>
            </div>
            <hr />
            <div className="game-reviews">
                <h3>Reviews:</h3>
                {
                    game.reviews.map((review) => (
                        <div key={review.id}>
                            <h4>{review.author} - {review.rating} / 5</h4>
                            <p>{review.text}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
};

