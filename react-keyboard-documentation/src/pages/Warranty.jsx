import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import kbx1000 from '../kbx1000.png'

export default function Warranty(prop) {
    return (
        <>
            <Header />
            <div className="product-warranty">            
                <img src={kbx1000} alt="product-png" title={prop.modelName}/>
            </div>
            <div className="wrapper">
                <div className="warranty">
                    <h2><center><strong>Warranty and Support</strong></center></h2>
                    <ul>
                        <li><strong>Warranty Period:</strong> {prop.warrantyYears} years from the date of purchase.</li>
                        <li><strong>Customer Support:</strong> For assistance, contact customer support via the manufacturer’s website or call the support hotline at {prop.custSuppNo}</li>
                    </ul>
                    <p><strong>Manufacturer’s Website:</strong> {prop.website}</p>
                    <p><strong>Customer Support Email:</strong> {prop.custSuppEmail}</p>
                    <p><strong>Support Hotline:</strong> {prop.custSuppNo}</p>
                </div>
            </div>
            <Footer />
        </>
    )
};

Warranty.PropTypes = {
    warrantyYears: PropTypes.number,
    custSuppNo: PropTypes.string,
    website: PropTypes.string,
    custSuppEmail: PropTypes.string,
    modelName: PropTypes.string
}

Warranty.defaultProps = {
    warrantyYears: 0,
    custSuppNo: "Unknown",
    website: "Unknown",
    custSuppEmail: "Unknown",
    modelName: "Unknown Model"
}