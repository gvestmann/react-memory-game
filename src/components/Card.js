// Import of React + some extra goodies from PropTypes component
import React from "react"
import PropTypes from "prop-types"

// This function handles the single card element. It's provided functions and arrays to work with through-out the game. It returns a JSX-code using the provided parameters.
function Card({clickHandler, id, turnedOver, name, freezeBoard, matchingCards}) {
    return (
    // This is the card's container. On click if will check if the board is frozen, or else the clickHandler function. Below is the card's image. If the card is turned over or is a matching card, the front side is used as src. Otherwise, the backside is shown.
    <div className="card__container"  onClick={() => freezeBoard ? null : clickHandler(id)}>
        <img src={turnedOver || matchingCards ?  `https://raw.githubusercontent.com/gvestmann/react-memory-game/main/src/img/${name}.jpg` : `https://raw.githubusercontent.com/gvestmann/react-memory-game/main/src/img/back-side.png`} alt={id}/>
    </div>
    )
}

// Here are defenitions for the prop-types being used in the function
Card.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    turnedOver: PropTypes.bool.isRequired,
    matchingCards: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.number.isRequired,
    freezeBoard: PropTypes.bool.isRequired
}

// Our card is then exported
export default Card