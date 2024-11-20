import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header>
                <nav>
                    <h1 title='Home'><Link to={"/"}>KB-X1000</Link></h1>
                    <button onClick={toggleMenu} className={`menu-toggle ${isOpen ? "open" : ""}`}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                    <ul className={isOpen ? "open" : ""}>
                        <li title='Home'><Link to={"/"}>Home</Link></li>
                        <li title='Specification'><Link to={"/specification"}>Specification</Link></li>
                        <li title='Features'><Link to={"/features"}>Features</Link></li>
                        <li title='Setup'><Link to={"/setup"}>Setup</Link></li>
                        <li title='Usage'><Link to={"/usage"}>Usage</Link></li>
                        <li title='Troubleshooting'><Link to={"/troubleshooting"}>Troubleshooting</Link></li>
                        <li title='Maintenance'><Link to={"/maintenance"}>Maintenance</Link></li>
                        <li title='Warranty'><Link to={"/warranty"}>Warranty</Link></li>
                    </ul>
                </nav>
            </header>
            <hr />
        </>
    )
}