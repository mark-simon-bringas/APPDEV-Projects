export default function Reviews(props) {
    const reviewsList = props.reviews
    const review = reviewsList.map(game => 
            <>
                <h2 key={game.id}>Game Title: {game.title}</h2>
                <h3>Publisher: {game.publisher}</h3>
                <p>Release Date: {game.releaseDate}</p>
                <p>Platform: {game.platform}</p>
                <p>Age Rating: {game.ageRating}</p>
                <h3>User Review:</h3>
                <p>{game.comment}</p>
                <h3>User Rating: {game.rating}</h3>
                <p><i>Review Created On: {new Date().toLocaleDateString()}</i></p>
            </>
        )
    return (
        <>
            <div className="review-card">
                {review}
            </div>
        </>
    )

}