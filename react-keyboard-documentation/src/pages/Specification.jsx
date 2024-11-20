import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import kbx1000 from '../kbx1000.png'

export default function Specification(prop) {
    return (
        <>
            <Header />
            <div className="product-specification">            
                <img src={kbx1000} alt="product-png" title={prop.modelName}/>
            </div>
            <div className='wrapper'>
                <div className="specsList">
                    <h2><center>Specifications</center></h2>
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
                    <h2><center>In The Box</center></h2>
                    <ul>
                        <li>{prop.modelName} Keyboard</li>
                        <li>USB Cable</li>
                        <li>User Manual</li>
                        <li>Keycap Removal Tool</li>
                        <li>Warranty Card</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
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
