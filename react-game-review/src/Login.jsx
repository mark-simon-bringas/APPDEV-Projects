import { useState } from "react"
import Reviews from "./Reviews"

var userReviews = []
export default function Login() {
    // login credentials
    const account = [{
        username: "admin",
        password: "admin"
    }]

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [enteredUsernames, setEnteredUsernames] = useState("")
    const [enteredPasswords, setEnteredPasswords] = useState("")
    function handleUserNameChange(event) {
        setEnteredUsernames(event.target.value)
    }
    function handlePasswordChange(event) {
        setEnteredPasswords(event.target.value)
    }
    function handleLogin() {
        account.map((acc) => {
                if (acc.username === enteredUsernames && acc.password === enteredPasswords) {
                    setIsLoggedIn(true)
                }
            }
        )
    }

    const renderLoginForm = () => {
        return(
            <div className="login-form">
                <h1>Welcome to Mark Simon's Reviews!</h1>
                <h4>Login to Continue:</h4>
                Username: <br />
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    onChange={handleUserNameChange} 
                    onKeyDown={(e) => {e.key === 'Enter' && handleLogin()}}
                />
                <br />
                <br />
                Password: <br />
                <input 
                    type="password" 
                    name="password"
                    id="password" 
                    onChange={handlePasswordChange}
                    onKeyDown={(e) => {e.key === 'Enter' && handleLogin()}}
                />
                <br />
                <br />
                <button type="button" onClick={handleLogin}>Login</button>
            </div>
        );
    }

    // game reviews
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [publisher, setPublisher] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [platform, setPlatform] = useState('');
    const [ageRating, setAgeRating] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    function handleIdChange(event) {
        setId(event.target.value);
    }
    function handleTitleChange(event) {
        setTitle(event.target.value);
    }
    function handlePublisherChange(event) {
        setPublisher(event.target.value);
    }
    function handleReleaseDateChange(event) {
        setReleaseDate(event.target.value);
    }
    function handlePlatformChange(event) {
        setPlatform(event.target.value);
    }
    // no handler function for age rating
    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    function handleRatingChange(event) {
        setRating(event.target.value);
    }

    function addReview(){
        if (!id || !title || !publisher || !releaseDate || !platform || !ageRating || !comment || rating === 0) {
            alert("Please enter all the fields in the game review.");
            return
        }
        userReviews.push(
            {
                id: id,
                title: title,
                publisher: publisher,
                releaseDate, releaseDate,
                platform: platform,
                ageRating: ageRating,
                comment: comment,
                rating: rating,
            }
        )
        alert("Review added.")
        setId(0)
        setTitle('')
        setPublisher('')
        setReleaseDate('')
        setPlatform('')
        setAgeRating('')
        setComment('')
        setRating(0)
    }

    // main app render
    if (isLoggedIn === false) {
        return renderLoginForm()
    } else {
        return (
            <>
                <h1>Game Reviews</h1>
                <hr />
                <div className="review-input">
                    Game ID:
                    <input 
                        type="number" 
                        value={id} 
                        placeholder="Enter game ID"
                        onChange={handleIdChange} 
                    />
                </div>
                <div className="review-input">
                    Title:
                    <input 
                        type="text" 
                        value={title} 
                        placeholder="Enter title"
                        onChange={handleTitleChange} 
                    />
                </div>
                <div className="review-input">
                    Publisher:
                    <input 
                        type="text" 
                        value={publisher} 
                        placeholder="Enter publisher"
                        onChange={handlePublisherChange} 
                    />
                </div>
                <div className="review-input">
                    Release Date:
                    <input 
                        type="date" 
                        value={releaseDate} 
                        onChange={handleReleaseDateChange} 
                    />
                </div>
                <div className="review-input">
                    Platform:
                    <input 
                        type="text" 
                        value={platform} 
                        placeholder="Enter platform"
                        onChange={handlePlatformChange} 
                    />
                </div>
                <div className="review-input">
                    Age Rating:
                    <label>
                        <input
                            type="radio"
                            value="E"
                            checked={ageRating === "E"}
                            onChange={() => setAgeRating("E")}
                        />
                        E for Everyone
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="T"
                            checked={ageRating === "T"}
                            onChange={() => setAgeRating("T")}
                        />
                        T for Teens
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="R"
                            checked={ageRating === "R"}
                            onChange={() => setAgeRating("R")}
                        />
                        R for Restricted (18+)
                    </label>
                </div>
                <div className="review-input">
                    Comment:
                    <br />
                    <textarea 
                        value={comment} 
                        placeholder="Enter review"
                        onChange={handleCommentChange} 
                    />
                </div>
                <div className="review-input">
                    Rating: <span> {rating}</span>
                    <br />
                    <input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        value={rating}
                        onChange={handleRatingChange}
                    />
                </div>
                <button className="add-review-button" onClick={addReview}>Add Review</button>
                <hr />
                <div className="review-container">
                    <h1><center>Preview</center></h1>
                    <h2>Game Title: <strong>{title}</strong></h2>
                    <h3>Publisher: <strong>{publisher}</strong></h3>
                    <p>Release Date: <strong>{releaseDate}</strong></p>
                    <p>Platform: <strong>{platform}</strong></p>
                    <p>Age Rating: <strong>{ageRating}</strong></p>
                    <h3>User Review:</h3>
                    <p>{comment}</p>
                    <h3>User Rating: <strong>{rating}</strong></h3>
                    <p><i>Review Created On: {new Date().toLocaleDateString()}</i></p>
                </div>
                <hr />
                {
                    userReviews.length > 0 ? 
                    (<Reviews reviews={userReviews} />) :
                    (<h3>No game reviews.</h3>)
                }
            </>
        )
    }
}