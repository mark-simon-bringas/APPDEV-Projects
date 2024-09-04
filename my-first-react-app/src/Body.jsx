// This is my body component.
import PropTypes from 'prop-types'
export default function Body(props) {
    return (
       <div className="person">
        <img src="https://placeholder.pics/svg/150x150" alt="profile-icon" className='person-picture' />
        <p>This is <strong>{props.name}</strong>'s favorite food:</p>
        <p>{(props.food).toUpperCase()}</p>
        <p>Is it healthy? {props.isHealthy ? "Yes" : "No"}</p>
        <p><strong>{props.name} is {props.age} years old!</strong></p>
       </div>
    )
}
// PropTypes has a function that checks validitiy of types of data passed as props.
Body.propTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    isHealthy: PropTypes.bool,
    age: PropTypes.number
}

Body.defaultProps = {
    name: "Guest",
    food: "Unknown",
    isHealthy: false,
    age: 0
}