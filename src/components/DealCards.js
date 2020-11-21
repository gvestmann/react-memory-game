import React from "react"

function randomizeCards(data) {
    const newData = data.slice(0)
    for(let i = 0; i < data.length - 1; i++) {
    let dataRandomizer = Math.floor(Math.random() * (i + 1))
    let randomData = newData[i]
    newData[i] = newData[dataRandomizer]
    newData[dataRandomizer] = randomData
    }

    return newData
}

function dealCards() {
    let id = 0
    const cards = [1, 2, 3, 4, 5, 6, 7, 8].reduce((deck, name) => {
        deck.push({
            id: id++,
            name
        })
        deck.push({
            id: id++,
            name
        })
        return deck
    }, [])

    return randomizeCards(cards)
}

export default dealCards