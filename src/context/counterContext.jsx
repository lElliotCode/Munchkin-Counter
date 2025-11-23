import { createContext, useState } from "react";

// 1. Crear el contexto
export const CounterContext = createContext()

// 2. Crear el Provider, para proveer el contexto
export function CounterProvider ({children}) {

    const [Munchkin, setMunchkin] = useState('0')
    const [initialObject, setInitialObject] = useState(true)
    const [players, setPlayers] = useState([])

    return (
        <CounterContext.Provider value={{
            Munchkin, setMunchkin, initialObject, setInitialObject, players, setPlayers
        }}>
            {children}
        </CounterContext.Provider>
    )
}