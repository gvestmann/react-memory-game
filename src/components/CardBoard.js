// Import of React, Prop-Type extras and my single-card-component
import React from "react"
import PropTypes from "prop-types"
import Card from "./Card"

// The card table takes in various props, including the clickHandler an arrays used in setState 
function CardBoard ({cards, turnedOver, clickHandler, freezeBoard, matchingCards}) {
    return  (
        // Returns JSX-code. It maps through the cards array and generates all 16 (8x2) cards with all data and functions that the element needs to take in. Most of them include that card's ID.
        <div className="table">
            {cards.map((card) => (
                <Card 
                name={card.name}
                key={card.id}
                id={card.id}
                turnedOver={turnedOver.includes(card.id)}
                clickHandler={clickHandler}
                freezeBoard={freezeBoard || matchingCards.includes(card.id)}
                matchingCards={matchingCards.includes(card.id)}
                />
            )
            )}
        </div>
    )
}

// Here the props are defined by type.
CardBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    turnedOver: PropTypes.arrayOf(PropTypes.number).isRequired,
    clickHandler: PropTypes.func.isRequired,
    freezeBoard: PropTypes.bool.isRequired,
    matchingCards: PropTypes.arrayOf(PropTypes.number).isRequired,

}

// And the game board is exported
export default CardBoard