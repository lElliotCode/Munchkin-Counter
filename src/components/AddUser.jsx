import { useState, useContext } from "react"
import { CounterContext } from "../context/counterContext"

export function AddUser({ start }) {

    const { players, setPlayers } = useContext(CounterContext)
    const [choosingAvatar, setChoosingAvatar] = useState(false)
    const [newPlayer, setNewPlayer] = useState({ name: "", avatar: null, gender: "Masculino" })

    const handleSubmit = (e) => {
        e.preventDefault();
        let existingName = players.find(player => player.name === newPlayer.name)
        console.log(existingName) 
        if (!newPlayer.avatar) {
            setNewPlayer({ ...newPlayer, avatar: false })
            return
        } else if (newPlayer.name.length < 1 || newPlayer.name === 'Empty') {
            setNewPlayer({ ...newPlayer, name: 'Empty' })
            return
        } else if (existingName) {
            setNewPlayer({ ...newPlayer, name: null })
            return
        } else {
            setPlayers([...players, newPlayer])
            cleanData(e)
        }

    }

    const cleanData = (e) => {
        setNewPlayer({ name: "", avatar: null, gender: "none" })
        e.target[0].value = ''
    }

    const cleanPlayers = () => {
        setPlayers([])
    }

    return (
        <>
            <div className="h-full w-full mt-24">

                <div className="flex flex-col gap-2 w-[max-content] m-auto border border-black rounded p-12">
                    <h1 className="text-center text-3xl">Super Munchkin Counter</h1>

                    <h2 className="text-left pt-4">Agregar jugadores</h2>
                    <div className="w-full">
                        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col md:flex-row md:items-center gap-4 justify-around items-start w-full">
                            <div className="flex flex-row items-center md:flex-col gap-2 relative">
                                <small className="text-sm">Avatar</small>
                                <div className="w-[40px] h-[40px] rounded-full bg-[#1a1a1a] cursor-pointer hover:border hover:border-black relative flex items-center justify-center" onClick={() => setChoosingAvatar(!choosingAvatar)}>
                                    {newPlayer.avatar !== null ? newPlayer.avatar : ''}
                                </div>
                                {newPlayer.avatar === false &&
                                    <small className="text-red-400 absolute w-[50px] text-center md:-bottom-9 -right-14 md:-right-1 text-xs">Elige un avatar</small>
                                }
                                {choosingAvatar && (
                                    <div className="flex flex-wrap gap-4 min-w-[150px] justify-center items-center absolute z-10 border border-black rounded mt-[3.8rem] p-4 text-center bg-[#222]">
                                        <div className="w-[40px] h-[40px] rounded-full bg-[#1a1a1a] flex items-center justify-center cursor-pointer hover:border hover:border-black" onClick={() => {
                                            setChoosingAvatar(false)
                                            setNewPlayer({ ...newPlayer, avatar: 1 })
                                        }}>1</div>
                                        <div className="w-[40px] h-[40px] rounded-full bg-[#1a1a1a] flex items-center justify-center cursor-pointer hover:border hover:border-black" onClick={() => {
                                            setChoosingAvatar(false)
                                            setNewPlayer({ ...newPlayer, avatar: 2 })
                                        }}>2</div>
                                        <div className="w-[40px] h-[40px] rounded-full bg-[#1a1a1a] flex items-center justify-center cursor-pointer hover:border hover:border-black" onClick={() => {
                                            setChoosingAvatar(false)
                                            setNewPlayer({ ...newPlayer, avatar: 3 })
                                        }}>3</div>
                                    </div>
                                )}

                            </div>
                            <div className="flex flex-col gap-2">
                                <small className="text-sm">Nombre</small>
                                <div className="relative">
                                    <input type="text" className="rounded-xl h-[40px] pl-4 bg-[#1a1a1a]" id="player" onChange={e => setNewPlayer({ ...newPlayer, name: e.target.value })} />
                                    { newPlayer.name === 'Empty' && (
                                        <small className="absolute text-red-400 w-[max-content] -bottom-5 left-0 text-xs">No puedes tener el nombre vacío</small>
                                    ) }
                                    { newPlayer.name === null && (
                                        <small className="absolute text-red-400 w-[max-content] -bottom-5 left-0 text-xs">No puedes tener un nombre existente</small>
                                    ) }
                                </div> 
                            </div>
                            <div>
                                <small className="text-sm">Genero</small>
                                <div className="flex gap-2 justify-center items-center h-[40px]">
                                    <small onClick={() => setNewPlayer({ ...newPlayer, gender: "Masculino" })} className={`cursor-pointer border border-blue-600 p-2 rounded-full hover:bg-blue-600 ${newPlayer.gender === 'Masculino' ? "bg-blue-600" : ""}`}>Masculino</small>
                                    <small onClick={() => setNewPlayer({ ...newPlayer, gender: "Femenino" })} className={`cursor-pointer  border border-pink-600 p-2 rounded-full hover:bg-pink-600 ${newPlayer.gender === 'Femenino' ? "bg-pink-600" : ""}`} >Femenino</small>
                                </div>
                            </div>
                            <button type="submit" className="rounded-xl h-[40px] pl-4 bg-[#1a1a1a] cursor-po hover:bg-[#1a1a1a] hover:text-[#fff] flex items-center">Agregar</button>
                        </form>


                    </div>
                    <h2 className="text-left pt-4 mt-4">Jugadores</h2>
                    <div className="w-[60%] bg-[#1a1a1a] mx-auto">
                        <div className="flex flex-col gap-2 rounded px-4 py-2">
                            <button className={`${players.length > 0 ? "hover:text-red-400 hover:border-red-400" : "bg-gray-700 text-gray-900 outline-none border-none cursor-not-allowed"}`} onClick={(cleanPlayers)} disabled={players.length === 0}>Clean Players</button>
                            {players.length > 0 ? players.map((player, index) => (
                                <div key={index} className="flex justify-between">
                                    <div className="flex gap-2">
                                        <div>{player.avatar}</div>
                                        <div >{player.name}</div>
                                    </div>
                                    <div className={`border h-[30px] w-[30px] flex justify-center items-center rounded-full text-xs ${player.gender === 'Masculino' ?  "border-blue-600 text-blue-300" : " border-pink-600  text-pink-300" }`} >{player.gender === 'Masculino' ? '♂' : '♀'}</div>
                                </div>
                            )) : <p className="text-red-300"> No hay jugadores</p>}
                        </div>
                    </div>
                    <button onClick={() => {
                        players.length > 1 ? start(true) : alert('Almenos 2 jugadores para iniciar la partida')
                    }}>Start</button>
                </div>
            </div>

        </>
    )
}