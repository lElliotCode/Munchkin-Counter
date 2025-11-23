import { useState, useEffect, useContext } from "react"
import confetti from "canvas-confetti"
import { CounterContext } from "../context/counterContext"

export function Players({ name, gender, setWinnerName }) {

    const { Munchkin, setMunchkin, initialObject } = useContext(CounterContext);

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

        setTotal((parseInt(level) > 0 ? parseInt(level) : 1) + (parseInt(object) > 0 ? parseInt(object) : 0))
    }, [level, object])

    const handleObjectChange = (e) => {
        let newValue = e.target.value
        if (newValue < 0) { newValue = 0 }
        if (newValue > 99) { newValue = 99 }
        setObject(newValue)
    }

    const handleLevelChange = (e) => {
        let newValue = e.target.value
        if (newValue < 0) { newValue = 0 }
        if (newValue > level + 1) {
            alert("Un nivel a la vez, tramposo cara de verga")
            return
        }
        if (newValue > 10) { newValue = 10 }
        
        setLevel(newValue)
    }


    const handleLevelDown = () => {
        setLevel(prevLevel => (prevLevel === 1 ? 1 : prevLevel - 1))
    }
    const handleLevelUp = () => {
        setLevel(prevLevel => (prevLevel === 10 ? 10 : parseInt(prevLevel) + 1));
    }

    const handleObjectDown = () => {
        setObject(prevObject => prevObject <= - 40 ? -40 : prevObject - 1);
    }
    const handleObjectUp = () => {
        setObject(prevObject => prevObject >= 99 ? 99 : prevObject + 1);
    }



    return (
        <div className=" flex justify-between p-[.6rem_2rem_.9rem] gap-4 text-xl items-center hover:bg-[#0000002b] max-[665px]:h-[80px]">
            <div className="flex flex-col gap-2 md:flex-row">
                <span className={`border h-[30px] w-[30px] flex justify-center items-center rounded-full text-xs ${gender === 'Femenino' ? " border-pink-600  text-pink-300" : "border-blue-600 text-blue-300"}`} >{gender === 'Masculino' ? '♂' : '♀'}</span>
                <h3 className=" max-[665px]:text-sm">{name}</h3>
            </div>
            <aside className="flex justify-center items-center">
                {initial &&
                    <div className="absolute bg-[rgba(0,0,0,0.36)] flex gap-3 items-center p-[1rem_5rem] rounded-xl backdrop-blur-md max-[665px]:p-[.4rem_2rem] max-[665px]:text-[12px] max-[665px]:translate-y-[-.2rem] max-[665px]:w-[290px]">Items Iniciales:
                        <form onSubmit={e => submitInitialObjects(e)} className="flex items-center">
                            <input type="number" min={0} max={99} onChange={e => e.target.value = Math.max(0, Math.min(99, parseInt(e.target.value)))} className="w-[45px] h-[45px] m-auto rounded-xl text-center border-none outline-none" />
                            <button type="submit" className="ml-[.5rem]"> Ready </button>
                        </form>
                    </div>
                }
                <div className="text-center flex items-center max-[665px]:w-[100px]">
                    <img src="level-logo.png" alt="Imagen que representa el nivel" className="h-[65px] p-1 m-auto max-[665px]:h-[35px] " />
                    <input type="number" className="text-center rounded-xl w-[40px]" min={1} max={10} value={level} onChange={handleLevelChange} />
                    <div className="text-sm flex gap-0.5 flex-col-reverse ">
                        <button onClick={() => handleLevelDown()} disabled={Munchkin === 10} className="max-[665px]:w-[20px] max-[665px]:h-[20px] max-[665px]:flex max-[665px]:items-center max-[665px]:justify-center">↓</button>
                        <button onClick={() => handleLevelUp()} disabled={Munchkin === 10} className="max-[665px]:w-[20px] max-[665px]:h-[20px] max-[665px]:flex max-[665px]:items-center max-[665px]:justify-center">↑</button>
                    </div>
                </div>

                <div className="text-center flex items-center max-[665px]:w-[100px]">
                    <img src="mochila.png" alt="" className="h-[65px] p-1 m-auto max-[665px]:h-[35px]" />
                    <input className="text-center rounded-xl w-[40px]" type="number" value={object} onChange={handleObjectChange} />
                    <div className="text-sm flex flex-col-reverse gap-0.5">
                        <button onClick={() => handleObjectDown()} disabled={Munchkin === 10} className="max-[665px]:w-[20px] max-[665px]:h-[20px] max-[665px]:flex max-[665px]:items-center max-[665px]:justify-center">↓</button>
                        <button onClick={() => handleObjectUp()} disabled={Munchkin === 10} className="max-[665px]:w-[20px] max-[665px]:h-[20px] max-[665px]:flex max-[665px]:items-center max-[665px]:justify-center">↑</button>
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