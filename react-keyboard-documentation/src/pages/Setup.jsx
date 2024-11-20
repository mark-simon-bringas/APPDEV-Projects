import PropTypes from 'prop-types';
import Footer from "../Footer";
import Header from "../Header";
import kbx1000 from '../kbx1000.png'

export default function Setup(prop) {
    return (
        <>
            <Header />
            <div className="product-setup">            
                <img src={kbx1000} alt="product-png" title={prop.modelName}/>
            </div>
            <div className="wrapper">
                <div className="setup">
                    <h2><center><strong>Setup Instructions</strong></center></h2>
                    <h3><strong>Unboxing:</strong></h3>
                    <ul>
                        <li>Carefully remove the keyboard and accessories from the box.</li>
                    </ul>
                    <h3><strong>Connecting the Keyboard:</strong></h3>
                    <ul>
                        <li>Plug the USB cable into an available USB port on your computer.</li>
                        <li>The keyboard should be automatically recognized and ready for use. No additional drivers are required.</li>
                    </ul>
                    <h3><strong>Software Installation (<i>Optional</i>):</strong></h3>
                    <ul>
                        <li>Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.</li>
                        <li>Follow the on-screen instructions to install the software.</li>
                    </ul>
                    <h3><strong>Keycap Removal and Replacement:</strong></h3>
                    <ul>
                        <li>Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.</li>
                        <li>Replace keycaps by aligning them over the switch and pressing down until they click into place.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
};

Setup.PropTypes =  {modelName: PropTypes.string}
Setup.defaultProps = {modelName: "Unknown Model"}
