import { createContext, useContext, useEffect, useReducer } from "react";

const HolyContext = createContext()

const initialState = JSON.parse(localStorage.getItem('cart')) || []

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return [...state, action.payload]
        case 'REMOVE':
            return action.payload
    }
}

const ContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(state))
        console.log(state)
    }, [state])
    
    return(
        <HolyContext.Provider value={{state, dispatch}}>
            {children}
        </HolyContext.Provider>
    )
}

export default ContextProvider

export const useHolyContext = () => useContext(HolyContext)