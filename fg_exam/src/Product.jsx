import PropTypes from 'prop-types'
import kbx1000 from './kbx1000.png'

export default function Product(prop) {
    return (
        <body>
            <div className="product">            
                <img src={kbx1000} alt="product-png" />
                <div className="description">
                    <h1>{prop.modelName}</h1>
                    <h2>{prop.overview}</h2>
                </div>
            </div>        
        </body>
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