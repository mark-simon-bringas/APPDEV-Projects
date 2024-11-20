import PropTypes from 'prop-types'
import kbx1000 from '../kbx1000.png'
import Header from '../Header'
import Footer from '../Footer'

export default function Product(prop) {
    return (
        <>
            <Header />
            <div className="product">            
                <img src={kbx1000} alt="product-png" title={prop.modelName}/>
                <div className="description">
                    <h1>{prop.modelName}</h1>
                    <h2>{prop.overview}</h2>
                </div>
            </div>        
            <Footer />
        </>
    )
}

Product.PropTypes =  {
    modelName: PropTypes.string,
    overview: PropTypes.string
}

Product.defaultProps = {
    modelName: "Unknown Model",
    overview: "No overview."
}