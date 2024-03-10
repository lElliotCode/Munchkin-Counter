
import { useState } from "react"
import { Players } from "./components/Player"
import { users } from "./data/players.json"


function App() {
  
  const [winner, setWinner] = useState(false)
  const [winnerName, setWinnerName] = useState(null)

  console.log(users)

  return (
    <div className="relative">
      <h1 className="text-center p-6">Super Munchkin Counter</h1>
      <section>
        <h2 className="text-4xl p-5">Munchkins</h2>
        {winner 
          ? 
            <div className="absolute left-[15vw] w-[800px] h-[300px] bg-[#00000068] text-center p-[1rem_2rem_5rem] border border-black">
              <h1 className="p-[3rem]">El ganador es </h1>
              <span className=" font-bold text-3xl">{winnerName}</span>
            </div>
          : ""
        }
        {users.map((user, index) => (
          <Players name={user.name} key={index} setWinner={setWinner} setWinnerName={setWinnerName}/>
        ))}
        
        <button className=" absolute right-10 bottom-[-7rem] text-3xl" onClick={()=> location.reload()}>Restart</button>
      </section>
    </div>
  )
}

export default App
