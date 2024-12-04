<<<<<<< HEAD
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Resume from './Resume'
import DeveloperImage from '../assets/image/Bringas, Mark Simon Z..png'

export default function Developer() {
    const [count, setCount] = useState(0)
    const vouch = () => {setCount(c => c + 1)}

    return (
        <>
            <div className="developer-image">
                <img src={DeveloperImage} alt="Developer's Image" title='Developer' style={{width: '500px', height: "500px"}}/>
            </div>
            <div className="developer-info">
                <h1>About the Developer</h1>
                <p>
                    At this time of creation, Mark Simon Bringas is a 19-year-old dedicated software developer and the creator of KeyStaxx. 
                    He has a passionate hobby of programming and has experience with various programming languages such as Python, where he excels at it, C/C++, and Java. 
                    He is also currently studying at University of Baguio in their Bachleor of Science in Computer Science programming as well as learning for other tech-related skills and knowledge, 
                    including this project with the use of React JS Web Framework.
                    Keystaxx is his second website project, and he is willing to do his best to accomplish the project beyond its standards.
                </p>
                <Link to='/developer/resume'>
                    <button>Resumé</button>
                </Link>
                <br /><br />
                <button className='vouch-points' onClick={vouch}>Vouch!</button>
                <p>Vouch Points: {count}</p>
            </div>

            <Routes>
                <Route path='/developer/resume' element={<Resume />} />
            </Routes>
        </>
    )
=======
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Resume from './Resume'
import DeveloperImage from '../assets/image/Bringas, Mark Simon Z..png'

export default function Developer() {
    const [count, setCount] = useState(0)
    const vouch = () => {setCount(c => c + 1)}

    return (
        <>
            <div className="developer-image">
                <img src={DeveloperImage} alt="Developer's Image" title='Developer' style={{width: '500px', height: "500px"}}/>
            </div>
            <div className="developer-info">
                <h1>About the Developer</h1>
                <p>
                    At this time of creation, Mark Simon Bringas is a 19-year-old dedicated software developer and the creator of KeyStaxx. 
                    He has a passionate hobby of programming and has experience with various programming languages such as Python, where he excels at it, C/C++, and Java. 
                    He is also currently studying at University of Baguio in their Bachleor of Science in Computer Science programming as well as learning for other tech-related skills and knowledge, 
                    including this project with the use of React JS Web Framework.
                    Keystaxx is his second website project, and he is willing to do his best to accomplish the project beyond its standards.
                </p>
                <Link to='/developer/resume'>
                    <button>Resumé</button>
                </Link>
                <br /><br />
                <button className='vouch-points' onClick={vouch}>Vouch!</button>
                <p>Vouch Points: {count}</p>
            </div>

            <Routes>
                <Route path='/developer/resume' element={<Resume />} />
            </Routes>
        </>
    )
>>>>>>> 2cb83542e095037af5af94eec9b81b670dbdc6b5
}