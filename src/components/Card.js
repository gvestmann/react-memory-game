import React from "react"
import PropTypes from "prop-types"

function Card({clickHandler, id, turnedOver, name}) {
    return (
    <div className={`card__container ${turnedOver ? 'card__face-up' : ''}`}  onClick={() => clickHandler(id)}>

        <div className="card__turn-over">
            <img className={turnedOver? 'card__front-side' : 'card__back-side'} src={turnedOver ? `img/${name}.png` : `https://raw.githubusercontent.com/gvestmann/react-memory-game/main/src/img/back-side.png`}/>
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