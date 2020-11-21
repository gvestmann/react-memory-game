import React from "react"
import PropTypes from "prop-types"
import Card from "./Card"

function CardBoard ({cards, turnedOver, clickHandler}) {
    return  (
        <div className="card-table">
            {cards.map((card) => (
                <Card 
                name={card.name}
                key={card.id}
                id={card.id}
                turnedOver={turnedOver.includes(card.id)}
                clickHandler={() => clickHandler(card.id)}
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
}

export default CardBoard