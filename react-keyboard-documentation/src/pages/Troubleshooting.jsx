import PropTypes from 'prop-types';
import Footer from "../Footer";
import Header from "../Header";
import kbx1000 from '../kbx1000.png'

export default function Troubleshooting(prop) {
    return (
        <>
            <Header />
            <div className="product-troubleshooting">            
                <img src={kbx1000} alt="product-png" title={prop.modelName}/>
            </div>
            <div className="wrapper">
                <div className="troubleshooting">
                    <h2><center><strong>Troubleshooting</strong></center></h2>
                    <h3><strong>Keyboard Not Responding:</strong></h3>
                    <ul>
                        <li>Ensure the USB connection is secure.</li>
                        <li>Try connecting the keyboard to a different USB port.</li>
                        <li>Restart your computer if necessary.</li>
                    </ul>
                    <h3><strong>Backlighting Not Working:</strong></h3>
                    <ul>
                        <li>Check if the backlight is disabled or set to a minimal brightness level.</li>
                        <li>Verify that the configuration software is properly installed.</li>
                    </ul>
                    <h3><strong>Key Not Registering:</strong></h3>
                    <ul>
                        <li>Confirm that no physical obstructions are affecting the key.</li>
                        <li>Test the key in different applications to determine if the issue is software-related.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
};

Troubleshooting.PropTypes =  {modelName: PropTypes.string}
Troubleshooting.defaultProps = {modelName: "Unknown Model"}
