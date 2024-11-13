import PropTypes from 'prop-types'

export default function FavoriteFood(props) {
    const foodItems = props.items.map(item => 
            <li key={item.id}>
                <strong>Name: </strong>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}<br />
                <strong>Color: </strong>{item.color}<br />
                <strong>Rating: </strong>{item.rating}<br />
            </li>
        )
    
    return (
        <>
            <div className="favorite-food">
                <h3>My Favorite Foods:</h3>
                <ol>{foodItems}</ol>
            </div>
        </>
    )
};
FavoriteFood.defaultProps = {
    items: []
};
