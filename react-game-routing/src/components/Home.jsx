import { useLocation } from "react-router-dom"
import Footer from "../Footer"

export default function Home() {
    return (
        <>
            <div className="home-info">
                <h1>Welcome to my Games List!</h1>
                <p>Here, you will see the Top 5 Games I am playing right now.</p>
            </div>
            <div className="home-footer">
                <Footer />
            </div>
        </>
    )
};
