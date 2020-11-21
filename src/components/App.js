import React, {useState, useEffect} from "react"
import CardBoard from "./CardBoard"
import dealCards from "./DealCards"

function App() {
  const [cards, startCards] = useState([])
  const [turnedOver, setTurnedOver] = useState([])
  const [matchCard, setMatchCard] = useState([])
  const [freezeBoard, setFreezeBoard] = useState(false)

  useEffect(() => {
    startCards(dealCards())
  }, [])

  const clickHandler = (id) => startTurnedOver([...turnedOver, id])

  return (
    <div>
      <h1>React to memory</h1>
      <div className="container">
        <div className="table__container">
          <CardBoard cards={cards} turnedOver={turnedOver} clickHandler={clickHandler} />
        </div>
      </div>
    </div>
  );
}
 
export default App;
