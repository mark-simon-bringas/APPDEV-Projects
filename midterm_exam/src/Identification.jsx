import PropTypes from 'prop-types'

export default function Identification(props) {
    return (
        <>
            <div className="identification">
                <p>Name: {props.name}</p><br />
                <p>Age: {props.age}</p><br />
                <p>Course: {props.course}</p><br />
                <p>Dream Job: {props.job}</p><br />
            </div>
        </>
    )
};
Identification.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    course: PropTypes.string,
    job: PropTypes.string
};
Identification.defaultProps = {
    name: "No name.",
    age: 0,
    course: "No course.",
    job: "No dream job."
}

