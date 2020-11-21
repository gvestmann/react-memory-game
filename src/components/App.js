import React, {useState, useEffect} from "react"
import Header from "./Header"
import Footer from "./Footer"
import CardBoard from "./CardBoard"
import dealCards from "./DealCards"

function App() {
  const [cards, startCards] = useState([])
  const [turnedOver, setTurnedOver] = useState([])
  const [matchingCards, setMatchingCards] = useState([])
  const [freezeBoard, setFreezeBoard] = useState(false)

  useEffect(() => {
    startCards(dealCards())
  }, [])

  const clickHandler = (id) => {
    setFreezeBoard(true)
    if(turnedOver.length === 0){
      setTurnedOver([id])
      setFreezeBoard(false)
    } else {
      if (isSameCard(id)) return
      setTurnedOver([turnedOver[0], id])
      if (doCardsMatch(id)) {
        setMatchingCards([ ...matchingCards, turnedOver[0], id])
        refreshBoard()
      } else {
        setTimeout(refreshBoard, 500)
      }
    }
  }

  const refreshBoard = () => {
    setTurnedOver([])
    setFreezeBoard(false)
  }

  const isSameCard = (id) => turnedOver.includes(id)
  const doCardsMatch = (id) => {
    const clicked1 = cards.find((card) => card.id === id)
    const clicked2 = cards.find((card) => turnedOver[0] === card.id)
    return clicked1.name === clicked2.name
  }


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
 
export default App;