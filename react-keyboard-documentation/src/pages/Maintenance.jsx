import PropTypes from 'prop-types';
import Footer from "../Footer";
import Header from "../Header";
import kbx1000 from '../kbx1000.png'

export default function Maintenance(prop) {
    return (
        <>
            <Header />
            <div className="product-maintenance">            
                <img src={kbx1000} alt="product-png" title={prop.modelName}/>
            </div>
            <div className="wrapper">
                <div className="maintenance">
                    <h2><center><strong>Maintenance</strong></center></h2>
                    <h3><strong>Cleaning:</strong></h3>
                    <ul>
                        <li>Disconnect the keyboard from the computer.</li>
                        <li>Use a soft, dry cloth to clean the surface</li>
                        <li>For deeper cleaning, carefully remove keycaps and use compressed air to remove debris</li>
                    </ul>
                    <h3><center><strong>Storage</strong></center></h3>
                    <ul>
                        <li>Store the keyboard in a cool, dry place</li>
                        <li>Avoid exposure to liquids or extreme temperatures</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
};

Maintenance.PropTypes =  {modelName: PropTypes.string}
Maintenance.defaultProps = {modelName: "Unknown Model"}
