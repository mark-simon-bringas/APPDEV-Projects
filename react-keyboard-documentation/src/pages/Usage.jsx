import PropTypes from 'prop-types';
import Footer from "../Footer";
import Header from "../Header";
import kbx1000 from '../kbx1000.png'

export default function Usage(prop) {
    return (
        <>
            <Header />
            <div className="product-usage">            
                <img src={kbx1000} alt="product-png" title={prop.modelName}/>
            </div>
            <div className="wrapper">
                <div className="usingKeyboard">
                    <h2><center><strong>Using the Keyboard</strong></center></h2>
                    <h3><strong>Basic Typing:</strong></h3>
                    <ul>
                        <li>Simply start typing; the keyboard is pre-configured with standard key mappings.</li>
                    </ul>
                    <h3><strong>Customizing Backlighting:</strong></h3>
                    <ul>
                        <li>Press <code>Fn</code> + <code>F9</code> to cycle through preset lighting effects.</li>
                        <li>Use the configuration software to create custom lighting profiles.</li>
                    </ul>
                    <h3><strong>Programming Keys:</strong></h3>
                    <ul>
                        <li>Open the configuration software.</li>
                        <li>Select the key you want to program.</li>
                        <li>Assign a macro or function and save your changes.</li>
                    </ul>
                    <h3><strong>Using Media Controls:</strong></h3>
                    <ul>
                        <li>Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
};

Usage.PropTypes =  {modelName: PropTypes.string}
Usage.defaultProps = {modelName: "Unknown Model"}
