import PropTypes from 'prop-types'

export default function ListOfFruits(props) {
    // Javascript functions
    const listItems = props.items.map(item => 
        <li key={item.id}>
            <strong>{item.name}</strong>:
            &nbsp; {item.color}
        </li>
        )

    // HTML Elements
    return (
        <>
            <h3 className='list-category'>{props.category}</h3>
            <ol className="list">{listItems}</ol>
        </>
    )
}

ListOfFruits.defaultProps = {
    category: "Category: ",
    items: []
}