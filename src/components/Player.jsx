import { useState, useEffect } from "react"
import confetti from "canvas-confetti"

export function Players({ name, setWinner, setWinnerName }) {

    const [level, setLevel] = useState(1)
    const [object, setObject] = useState(0)
    const [total, setTotal] = useState(level + object)
    

    

    const handleLevelDown = () => {
        setLevel(prevLevel => (prevLevel === 1 ? 1 : prevLevel - 1))
    }
    const handleLevelUp = () => {
        setLevel(prevLevel => (prevLevel === 10 ? 10 : prevLevel + 1));
    }

    const handleObjectDown = () => {
        setObject(prevObject => prevObject - 1);
    }
    const handleObjectUp = () => {
        setObject(prevObject => prevObject + 1);
    }

    useEffect(() => {
        if(level === 10){
            confetti();
            setWinner(true);
            setWinnerName(name)
        }
        setTotal(level + object)
    }, [level, object])

    return (
        <div className=" flex justify-between p-[.5rem_2rem] text-3xl items-center cursor-pointer hover:bg-[#0000002b]">
            <h3>{name}</h3>
            <aside className="flex gap-x-3">
                <div className="text-center flex items-center">
                    <p className="p-2 flex items-center"><img src="level-logo.png" alt="Imagen que representa el nivel" className="h-[65px] p-2" />: {level}</p>
                    <div className="text-sm flex flex-col-reverse gap-2">
                        <button onClick={() => handleLevelDown()}>↓</button>
                        <button onClick={() => handleLevelUp()}>↑</button>
                    </div>
                </div>

                <div className="text-center flex items-center p-[0_2rem]">
                    <p className="p-2 flex items-center"><img src="mochila.png" alt="" className="h-[65px] p-2" />: {object}</p>
                    <div className="text-sm flex flex-col-reverse gap-2">
                        <button onClick={() => handleObjectDown()}>↓</button>
                        <button onClick={() => handleObjectUp()}>↑</button>
                    </div>
                </div>
                <span className="flex items-center text-4xl"><img src="dano-logo.png" alt="" className="h-[65px] p-2" />: {total}</span>
            </aside>

        </div>
    )
}