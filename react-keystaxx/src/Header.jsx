import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MissionVision from './components/MissionVision'
import Showcase from './components/Showcase'
import Listing from './components/Listing'
import Reviews from './components/Reviews'
import Developer from './components/Developer'
import Resume from './components/Resume'
import ListingIndiv from './components/ListingIndiv'

export default function Header() {
    return (
        <>
            <header>
                <h1>KeyStaxx</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/mission-vision'>Mission & Vision</Link>
                        </li>
                        <li>
                            <Link to='/showcase'>Showcase</Link>
                        </li>
                        <li>
                            <Link to='/listing'>Listing</Link>
                        </li>
                        <li>
                            Manual
                        </li>
                        <li>
                            <Link to='/reviews'>Reviews</Link>
                        </li>
                        <li>
                            Company
                        </li>
                        <li>
                            <Link to='/developer'>Developer</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <span className="header-2">&nbsp;</span>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mission-vision' element={<MissionVision />} />
                <Route path='/showcase' element={<Showcase />} />
                <Route path='/listing'>
                    <Route index element={<Listing />} />
                    <Route path=':keyboardID' element={<ListingIndiv />} />
                </Route>
                <Route path='/reviews' element={<Reviews />} />

                <Route path='/developer' element={<Developer />} />
                <Route path='/developer/resume' element={<Resume />} />
            </Routes>
        </>
    )
};
