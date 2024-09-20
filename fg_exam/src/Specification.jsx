import PropTypes from 'prop-types'

export default function Specification(prop) {
    return (
        <body>
            <div className="specsList">
                <h2>Specifications:</h2>
                <ul>
                    <li>{prop.switchType}</li>
                    <li>{prop.keyLayout} ({prop.keyCount} keys)</li>
                    <li>{prop.backlighting}</li>
                    <li>{prop.connectivity}</li>
                    <li>{prop.dim1} mm x {prop.dim2} mm x {prop.dim3} mm</li>
                    <li>{prop.weight} kg</li>
                    <li>{prop.cableLength} meters</li>
                    <li>{prop.additionalFeatures}</li>
                </ul>
            </div>
            <div className="inTheBox">
                <h2>In The Box:</h2>
                <ul>
                    <li>{prop.modelName} Keyboard</li>
                    <li>USB Cable</li>
                    <li>User Manual</li>
                    <li>Keycap Removal Tool</li>
                    <li>Warranty Card</li>
                </ul>
            </div>
        </body>
    )
}

Specification.PropTypes = {
    switchType: PropTypes.string,
    keyLayout: PropTypes.string,
    keyCount: PropTypes.number,
    backlighting: PropTypes.string,
    connectivity: PropTypes.string,
    dim1: PropTypes.number,
    dim2: PropTypes.number,
    dim3: PropTypes.number,
    weight: PropTypes.number,
    cableLength: PropTypes.number,
    additionalFeatures: PropTypes.string,
    modelName: PropTypes.string
}

Specification.defaultProps = {
    switchType: "Unknown",
    keyLayout: "Unknown",
    keyCount: 0,
    backlighting: "Unknown",
    connectivity: "Unknown",
    dim1: 0,
    dim2: 0,
    dim3: 0,
    weight: 0,
    cableLength: 0,
    additionalFeatures: "Unknown",
    modelName: "Unknown"
}
