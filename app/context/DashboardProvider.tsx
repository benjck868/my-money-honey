import React, { createContext, ReactNode, useReducer, useState } from 'react'

type ThemeProps = "light" | "dark"

type InitStateProps = {
    sidebar : boolean,
    theme : ThemeProps
}

const initState: InitStateProps = {
    sidebar : false,
    theme : "light"
}
type ActionTypeProps = {
    type : "toggle_sidebar" | "toggle_theme",
    payload?: ThemeProps
}
function reducer(state: typeof initState, actionType : ActionTypeProps): typeof initState {
    const {sidebar, theme} = state
    switch(actionType.type){
        case "toggle_sidebar" : {
            if(!sidebar){
                return {...state, sidebar: true}
            }
            return {...state, sidebar: false}
        }
        case "toggle_theme" : {
            if(state.theme === "light"){
                return {...state, theme:"dark"}
            }
            return {...state, theme: "light"}
        }
        default : {
            throw new Error("DashboardProvider has an error")
        }
    }
}

type DashboardContextProviderProps = {
    state : typeof initState
    dispatch : React.Dispatch<ActionTypeProps>
}

export const DashboardContext = createContext<DashboardContextProviderProps | null>(null)

export default function DashboardProvider({children}:{children:ReactNode}) {
    const [state, dispatch] = useReducer(reducer, initState)
  return (
    <DashboardContext.Provider value={{state, dispatch}} >
        {children}
    </DashboardContext.Provider>
  )
}
