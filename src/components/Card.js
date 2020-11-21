import React from "react"
import PropTypes from "prop-types"

function Card({clickHandler, id, turnedOver, name}) {
    return (
    <div className={`flip-container ${turnedOver ? 'flipped' : ''}`}  onClick={() => clickHandler(id)}>

        <div className="flipper">
            <img className={turnedOver? 'front' : 'back'} src={turnedOver ? `img/${name}.png` : `img/back-side.png`}/>
        </div>

    </div>
    )
}

Card.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    turnedOver: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.number.isRequired,
}

export default Card