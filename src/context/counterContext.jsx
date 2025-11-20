import { createContext, useState } from "react";

// 1. Crear el contexto
export const CounterContext = createContext()

// 2. Crear el Provider, para proveer el contexto
export function CounterProvider ({children}) {

    const [Munchkin, setMunchkin] = useState('0')
    const [initialObject, setInitialObject] = useState(true)

    return (
        <CounterContext.Provider value={{
            Munchkin, setMunchkin, initialObject, setInitialObject
        }}>
            {children}
        </CounterContext.Provider>
    )
}