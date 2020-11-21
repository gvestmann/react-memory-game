import React, {useState, useEffect} from "react"
import CardBoard from "./CardBoard"
import dealCards from "./DealCards"

function App() {
  const [cards, startCards] = useState([])
  const [turnedOver, startTurnedOver] = useState([])

  useEffect(() => {
    startCards(dealCards())
  }, [])

  const clickHandler = (id) => startTurnedOver([...turnedOver, id])

  return (
    <div>
      <h2>Memory!</h2>
      <CardBoard cards={cards} turnedOver={turnedOver} clickHandler={clickHandler} />
    </div>
  );
}
 
export default App;
