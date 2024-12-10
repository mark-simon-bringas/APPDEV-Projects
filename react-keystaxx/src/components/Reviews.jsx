export default function Reviews() {
    return (
        <>
            <div className="reviews-wrapper">
                <h1 className="page-title">Send a Review</h1>
                <div className="review-form-container">
                    <form className="review-form">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="first-name" placeholder="Enter your first name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="last-name" placeholder="Enter your last name" />
                        </div>

                        <div className="form-group">
                            <label>Affiliation</label>
                            <div className="radio-buttons">
                                <label>
                                    <input type="radio" name="affiliation" id="company" /> Company
                                </label>
                                <label>
                                    <input type="radio" name="affiliation" /> Individual
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="company-name">Company/Organization Name</label>
                            <input type="text" id="company-name" name="company-name" placeholder="Enter company name (if applicable)" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="review">Review</label>
                            <textarea id="review" name="review" placeholder="Write your review here..." rows="5"></textarea>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="submit-button">Submit Review</button>
                        </div>
                    </form>
                </div>
                <br />
            </div>
        </>
    )
};
