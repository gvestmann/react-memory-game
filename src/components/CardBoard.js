import React from "react"
import PropTypes from "prop-types"
import Card from "./Card"

function CardBoard ({cards, turnedOver, clickHandler, freezeBoard, matchingCards}) {
    return  (
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

CardBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    turnedOver: PropTypes.arrayOf(PropTypes.number).isRequired,
    clickHandler: PropTypes.func.isRequired,
    freezeBoard: PropTypes.bool.isRequired,
    matchingCards: PropTypes.arrayOf(PropTypes.number).isRequired,

}

export default CardBoard