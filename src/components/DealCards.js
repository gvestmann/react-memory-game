// You could call this the start-up function, it deals and randomizes that cards
function dealCards() {
    // Create a ID variable to put all the cards in
    let id = 0

    // I simply named my cards from letters 1-8 to keep it simple (just like the card's images). Then the reduce()-method is used to build up the deck. 
    const cards = [1, 2, 3, 4, 5, 6, 7, 8].reduce((newCards, name) => {
        // Next an object is pushed on to the newCards, iterating the ID with +1 and using the card names seen above
        newCards.push({
            id: id++,
            name
        })
        // The same is then done again, since a memory game depends on having to identical cards of each
        newCards.push({
            id: id++,
            name
        })
        // Finally the newCards array is delivered
        return newCards
    }, [])

    // After this exercise, we call the randomize function below, using our cards are parameters
    return randomizeCards(cards)
}

// This function randomizes the order of the cards, so that they don't display in the DOM side-by-side. I'm using the Durstenfeld shuffle algorithm.
function randomizeCards(array) {
    for (var i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    return array
}

// .. and now we export our dealt cards! 
export default dealCards