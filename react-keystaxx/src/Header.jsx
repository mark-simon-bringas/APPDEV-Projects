import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MissionVision from './components/MissionVision'
import Showcase from './components/Showcase'
import Listing from './components/Listing'
import ListingIndiv from './components/ListingIndiv'
import Payment from './components/Payment'
import Reviews from './components/Reviews'
import Company from './components/Company'
import Employee from './components/Employee'
import Developer from './components/Developer'
import Resume from './components/Resume'

export default function Header() {
    return (
        <>
            <header>
                <Link to='/'>
                    <h1>KeyStaxx</h1>
                </Link>
                <nav>
                    <ul>
                        <li title='Home'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li title='Mission & Vision'>
                            <Link to='/mission-vision'>Mission & Vision</Link>
                        </li>
                        <li title='Showcase'>
                            <Link to='/showcase'>Showcase</Link>
                        </li>
                        <li title='Listing'>
                            <Link to='/listing'>Listing</Link>
                        </li>
                        <li title='Reviews'>
                            <Link to='/reviews'>Reviews</Link>
                        </li>
                        <li title='Company'>
                            <Link to='/company'>Company</Link>
                        </li>
                        <li title='Developer'>
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
                <Route path='/showcase'>
                    <Route index element={<Showcase />} />
                    <Route path=':keyboardID' element={<ListingIndiv />} />
                </Route>
                <Route path='/listing'>
                    <Route index element={<Listing />} />
                    <Route path=':keyboardID'>
                        <Route index element={<ListingIndiv />} />
                        <Route path=':paymentID' element={<Payment />} />
                    </Route>
                </Route>
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/company'>
                    <Route index element={<Company />} />
                    <Route path=':employeeID' element={<Employee />} />
                </Route>
                <Route path='/developer' element={<Developer />} />
                <Route path='/developer/resume' element={<Resume />} />
            </Routes>
        </>
    )
};
