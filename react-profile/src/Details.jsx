import PropTypes from 'prop-types'

export default function Details(prop) {
    return (
        <body>            
        <h1>{prop.name}</h1>
        <div className='details'>
            <p>
                Hello, my name is {prop.firstName}, a {prop.age}-year-old aspiring {prop.occupation}.
                I am currently a student in {prop.school} studying a Bachelor's in {prop.program}.
                Intrigued in the technology of computers and the Internet, I was once a kid who was
                curious in tinkering and messing with computer components, both hardware and in software.
                The curiosity ablazed more during the pandemic when I had the chance to self study Python,
                a programming language that I have been accustomed to. Today, I am willing to learn more
                programming languages and software development contents so that I can improve and grow
                as a successful software developer that I aspire to become.
            </p>
        </div>
        </body>
    )
}

Details.propTypes = {
    name: PropTypes.string,
    firstName: PropTypes.string,
    occupation: PropTypes.string,
    school: PropTypes.string,
    program: PropTypes.string,
    age: PropTypes.number
}

Details.defaultProps = {
    name: "Unknown",
    firstName: "Unknown",
    occupation: "Unknown",
    school: "Unknown",
    program: "Unknown",
    age: 0
}