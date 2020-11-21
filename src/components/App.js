// Standard import of React + extra goodies from useState & useEffect
import React, {useState, useEffect} from "react"
// Import of my components for build the app
import Header from "./Header"
import CardBoard from "./CardBoard"
import dealCards from "./DealCards"
import Footer from "./Footer"
import "./style.css"

// The app's function - this all will be exported to Index.js which then sews this together
function App() {


  // Here we utilize the setState method. We use a few different arrays and functions for build the state. Most of the states start as an empty array

  // Cards variable is used for storing our game cards. The function is for setting the cards to the state
  const [cards, startCards] = useState([])


  // The varible is used for storing which cards have been turned over and the function later for setting the state
  const [turnedOver, setTurnedOver] = useState([])


  // The variable is for storing those cards which have been found matching and they are then set to the current state.
  const [matchingCards, setMatchingCards] = useState([])


  // This is used for de-activating the game board once a user has click 2 cards, so the 3 one won't be clicked as well. To start with the useState is "false", that is, the board is infact active and ready to be played
  const [freezeBoard, setFreezeBoard] = useState(false)


  // Here useEffect sets the cards to the state, with the dealCards function/component as a parameter. The second parameter is an empty array to start with.
  useEffect(() => {
    startCards(dealCards())
  }, [])


  // Here's a function for managing all the stuff when the user clicks a card. It takes in that clicked card's ID.
  const clickHandler = (id) => {
    // I freezes the board to start with chaning the state to "true"
    setFreezeBoard(true)
    // If there are no items in the turnedOver array ...
    if(turnedOver.length === 0){
      // ... it sets this card's ID into turnedOver state ...
      setTurnedOver([id])
      // ... and un-freezes the game boards
      setFreezeBoard(false)
    // However, if there is already an item in the array ...
    } else {
      // ... we call a function to make sure the user is not clicking the same card again
      if (isSameCard(id)) return
      // If so, we just set it again to the turned over array
      setTurnedOver([turnedOver[0], id])
      // This is infact a second and separate card, a function is called to chack if these two cards match
      if (doCardsMatch(id)) {
        // If the do match, we store the ID in a "matching-card-array" and reset the turned-over array so the user can keep on playing
        setMatchingCards([ ...matchingCards, turnedOver[0], id])
        // We also need to call another function to refresh the board (seen below)
        refreshBoard()
      } else {
        // Now, if the 2 cards don't match, we give the user 1.5 seconds to see both the cards, and the refresh the gameboard
        setTimeout(refreshBoard, 1500)
      }
    }
  }


  // A simple function that uses the cards ID and checks if the turnedOver array includes the provided ID
  const isSameCard = (id) => turnedOver.includes(id)


  // The function is only excuted if two cards have been selected. 
  const doCardsMatch = (id) => {
    // The first variable is used to store the clicked card. The ID is found with a find()-method.
    const clicked1 = cards.find((card) => card.id === id)
    // The second variable is to store the information on the card that has been turned over. Also uses find method.
    const clicked2 = cards.find((card) => turnedOver[0] === card.id)
    // It's then returned if these 2 IDs are the same
    return clicked1.name === clicked2.name
  }


  // Here's the function that refreshes the board
  const refreshBoard = () => {
    // Calls function to set the state back to original, using empty array
    setTurnedOver([])
    // Calls function to active the board again so the user can click 2 more tiles
    setFreezeBoard(false)
  }


  // Here we return all our components, plus some JSX markup for providing must-have props
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="table__container">
          <CardBoard cards={cards} turnedOver={turnedOver} clickHandler={clickHandler} freezeBoard={freezeBoard} matchingCards={matchingCards} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

 
// The app is then exported for index.js to use
export default App;