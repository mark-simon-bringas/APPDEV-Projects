import PropTypes from 'prop-types';
import Footer from "../Footer";
import Header from "../Header";
import kbx1000 from '../kbx1000.png'

export default function Features(prop) {
    return (
        <>
            <Header />
            <div className="product-features">            
                <img src={kbx1000} alt="product-png" title={prop.modelName}/>
            </div>
            <div className="wrapper">
                <div className="keyFeatures">
                    <h2><center><strong>Key Features</strong></center></h2>
                    <h3>
                        <strong>Customizable RGB Backlighting:</strong>
                    </h3>
                    <p>
                        Personalize the keyboard’s illumination with a wide range of colors and lighting effects.

                    </p>
                    <h3>
                        <strong>Mechanical Switches:</strong>
                    </h3>
                    <p>
                        Cherry MX Red switches for a responsive and smooth typing experience.
                    </p>
                    <h3>
                        <strong>Programmable Keys:</strong>
                    </h3>
                    <p>
                        Assign macros and custom functions to any key with the included software.
                    </p>
                    <h3>
                        <strong>Anti-Ghosting & N-Key Rollover:</strong>
                    </h3>
                    <p>
                        Ensure accurate keypress registration during intense gaming sessions.
                    </p>
                    <h3>
                        <strong>Dedicated Media Controls:</strong>
                    </h3>
                    <p>
                        Easily control music and videos with dedicated media keys.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
};

Features.PropTypes =  {modelName: PropTypes.string}
Features.defaultProps = {modelName: "Unknown Model"}
