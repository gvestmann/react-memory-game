import React from "react"
import PropTypes from "prop-types"

function Card({clickHandler, id, turnedOver, name, freezeBoard, matchingCards}) {
    return (
    <div className={`card__container ${turnedOver ? 'card__face-up' : ''}`}  onClick={() => freezeBoard ? null : clickHandler(id)}>

        <div className="card__turn-over">
            <img className={turnedOver? 'card__front-side' : 'card__back-side'} src={turnedOver || matchingCards ?  `https://raw.githubusercontent.com/gvestmann/react-memory-game/main/src/img/${name}.jpg` : `https://raw.githubusercontent.com/gvestmann/react-memory-game/main/src/img/back-side.png`} alt={id}/>
        </div>

    </div>
    )
}

Card.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    turnedOver: PropTypes.bool.isRequired,
    matchingCards: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.number.isRequired,
    freezeBoard: PropTypes.bool.isRequired
}

export default Card