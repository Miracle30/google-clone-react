import React, { createContext, useContext, useReducer } from "react"

//preparing the data layer
export const StateContext = createContext();


export const StateProvider = ({reducer, initialState, children })=> (
    <StateContext.Provider
        value={useReducer(reducer,initialState)}
    >
        {/* Đại diện cho App bên index.js */}
        {children} 
    </StateContext.Provider>
);

//hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext)