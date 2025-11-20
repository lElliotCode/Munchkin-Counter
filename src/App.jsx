
import { useContext, useEffect, useState } from "react"
import { Players } from "./components/Player"
import { users } from "./data/players.json"
import { CounterContext } from "./context/counterContext"


function App() {

  const { Munchkin, setMunchkin, initialObject, setInitialObject } = useContext(CounterContext)

  const [winner, setWinner] = useState(false)
  const [winnerName, setWinnerName] = useState(null)


  const restartGame = () => {
    setMunchkin(Munchkin === 0 ? 1 : 0)
    setInitialObject(true)
    setWinner(false)
  }

  useEffect(() => {
    if (Munchkin === 10) {
      setWinner(!winner)
    }
    else { 
      setWinner(false) 
      setInitialObject(!winner)
    }
  }, [Munchkin, setMunchkin, initialObject])


  return (
    <div className="relative w-full h-full">
      <h1 className="text-center p-6 max-[665px]:text-2xl max-[665px]:text-left max-[665px]:w-[250px] ">Super Munchkin Counter</h1>
      <section >
        <h2 className="p-5 max-[665px]:text-sm max-[665px]:p-[0_2rem] text-xl">Munchkins</h2>
        <div >
          {winner
            ?
            <div className="absolute left-[15vw] w-[800px] h-[300px] bg-[#00000068] text-center p-[1rem_2rem_5rem] border z-50 border-black  max-[665px]:w-[400px] max-[665px]:h-[max-content] max-[665px]:[1rem] rounded-xl backdrop-blur-xl">

              <h1 className="p-[3rem] max-[665px]:text-4xl">El ganador es </h1>
              <span className=" font-bold text-3xl max-[665px]:text6xl">{winnerName}</span>

            </div>
            : ""
          }
          {users.map((user, index) => (
            <Players name={user.name} key={index} setWinner={setWinner} setWinnerName={setWinnerName} winner={winner}/>
          ))}
        </div>
        {/* Este botón reestablece el juego*/}
        <button className=" absolute right-10 bottom-[-5rem] text-3xl max-[665px]:bottom-[20rem] max-[665px]:bg-[#1a1a1a38]" onClick={() => restartGame()}>⟲</button>
      </section>
    </div>
  )
}

export default App
