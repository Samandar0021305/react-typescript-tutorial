import React, { createContext } from "react";
import { theme } from "./theme"; 

type THemeCOntextProps ={
    children:React.ReactNode
}

export const ThemeContext  = createContext(theme)
 
 export const THemeCOntextProvider = ({children}:THemeCOntextProps)=>{
   return   <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider> 
}
