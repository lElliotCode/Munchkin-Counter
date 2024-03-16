import { useState, useEffect, useContext } from "react"
import confetti from "canvas-confetti"
import { CounterContext } from "../context/counterContext"

export function Players({ name, setWinnerName }) {

    const { Munchkin, setMunchkin, initialObject, setInitialObject } = useContext(CounterContext);

    const [level, setLevel] = useState(1)
    const [object, setObject] = useState(0)
    const [initial, setInitial] = useState(initialObject)
    const [total, setTotal] = useState(level + object)

    useEffect(() => {
        if (Munchkin === 10) {
            confetti();
        } else if (Munchkin === 1 || Munchkin === 0) {
            setLevel(1)
            setObject(0)
            setInitial(true)
        }
    }, [Munchkin, initialObject])

    function submitInitialObjects(e) {
        e.preventDefault()
        const valorInicial = parseInt(e.target[0].value)
        valorInicial ? setObject(valorInicial) : setObject(0)
        setInitial(false)

    }

    useEffect(() => {
        if (level === 10) {
            setMunchkin(10)
            setWinnerName(name)
        }
        setTotal(level + object)
    }, [level, object])


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



    return (
        <div className=" flex justify-between p-[.6rem_2rem_.9rem] text-xl items-center hover:bg-[#0000002b] max-[665px]:h-[80px]">
            <h3 className=" max-[665px]:text-sm">{name}</h3>
            <aside className="flex justify-center items-center">
                {initial && <div className="absolute bg-[rgba(0,0,0,0.36)] flex gap-3 items-center p-[1rem_5rem] rounded-xl backdrop-blur-md max-[665px]:p-[.7rem_3rem] max-[665px]:text-[18px] max-[665px]:translate-y-[-.7rem]">Items Iniciales:
                    <form onSubmit={e => submitInitialObjects(e)} className="flex items-center">
                        <input type="number" className="w-[45px] h-[45px] m-auto rounded-xl text-center border-none outline-none" />
                        <button type="submit" className="ml-[2rem]"> Ready </button>
                    </form>
                </div>}
                <div className="text-center flex items-center max-[665px]:w-[100px]">
                    <img src="level-logo.png" alt="Imagen que representa el nivel" className="h-[65px] p-1 m-auto max-[665px]:h-[35px] " />
                    <p type="text" className="text-center rounded-xl w-[40px]" >{level}</p>
                    <div className="text-sm flex gap-0.5 flex-col-reverse ">
                        <button onClick={() => handleLevelDown()} className="max-[665px]:w-[20px] max-[665px]:h-[20px] max-[665px]:flex max-[665px]:items-center max-[665px]:justify-center">↓</button>
                        <button onClick={() => handleLevelUp()} className="max-[665px]:w-[20px] max-[665px]:h-[20px] max-[665px]:flex max-[665px]:items-center max-[665px]:justify-center">↑</button>
                    </div>
                </div>

                <div className="text-center flex items-center max-[665px]:w-[100px]">
                    <img src="mochila.png" alt="" className="h-[65px] p-1 m-auto max-[665px]:h-[35px]" />
                    <p className="text-center rounded-xl w-[40px]">{object}</p>
                    <div className="text-sm flex flex-col-reverse gap-0.5">
                        <button onClick={() => handleObjectDown()} className="max-[665px]:w-[20px] max-[665px]:h-[20px] max-[665px]:flex max-[665px]:items-center max-[665px]:justify-center">↓</button>
                        <button onClick={() => handleObjectUp()} className="max-[665px]:w-[20px] max-[665px]:h-[20px] max-[665px]:flex max-[665px]:items-center max-[665px]:justify-center">↑</button>
                    </div>
                </div>
                <div className="text-center flex items-center max-[665px]:w-[100px] justify-center">
                    <img src="dano-logo.png" alt="" className="h-[65px] p-2 max-[665px]:h-[35px]" />
                    <span className="flex items-center text-xl">{total}</span>
                </div>
            </aside>

        </div>
    )
}