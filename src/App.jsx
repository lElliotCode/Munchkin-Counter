
import { useContext, useEffect, useState } from "react"
import { Players } from "./components/Player"
// import { users } from "./data/players.json"
import { CounterContext } from "./context/counterContext"
// import { users } from "./components/AddUser"
import { AddUser } from "./components/AddUser"

function App() {

  const { Munchkin, setMunchkin, initialObject, setInitialObject, players } = useContext(CounterContext)

  const [winner, setWinner] = useState(false)
  const [winnerName, setWinnerName] = useState(null)
  const [start, setStart] = useState(false)


  const restartGame = () => {
    setMunchkin(Munchkin === 0 ? 1 : 0)
    setInitialObject(true)
    setWinner(false)
    setStart(false)
  }

  const restartSamePlayers = () => {
    setMunchkin(0);
    setInitialObject(true);
    setWinner(false);
  };

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
      
      {start ? (
        <div>
          <h1 className="text-center p-6 max-[665px]:text-2xl max-[665px]:text-left max-[665px]:w-[250px] ">Super Munchkin Counter</h1>
          <section className="md:px-12">
            <h2 className="p-5 max-[665px]:text-sm max-[665px]:p-[0_2rem] text-xl">Munchkins</h2>
            <div >
              {winner
                ?
                <div className="absolute text-xs md:left-[20vw] left-[10vw] w-[80%] md:w-[60%] h-[300px] mx-auto bg-[#00000068] text-center p-[1rem_2rem_5rem] border z-50 border-black rounded-xl backdrop-blur-xl">
                  <h1 className="py-12 max-[665px]:text-4xl">El ganador es </h1>
                  <span className=" font-bold text-xl md:text-3xl pb-12">{winnerName}</span>
                  <button className="absolute bottom-4 right-4 mx-auto text-sm" onClick={() => restartGame()}>⟲ Reset Game</button>
                  <button className="absolute bottom-4 left-4 mx-auto text-sm" onClick={() => restartSamePlayers()}>⟲ Reset Scores</button>

                </div>
                : ""
              }
              {players.map((user, index) => (
                <Players name={user.name} gender={user.gender} key={index} setWinner={setWinner} setWinnerName={setWinnerName} winner={winner} />
              ))}
            </div>
            {/* Este botón reestablece el juego*/}
            <button className="absolute right-10 -bottom-20 text-3xl bg-[#1a1a1a38]" onClick={() => restartGame()}>⟲</button>
          </section>
        </div>
      ) : <AddUser start={setStart} />}
    </div>
  )
}

export default App
