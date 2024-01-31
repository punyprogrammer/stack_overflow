"use client";
import React,{createContext,useContext,useState,useEffect} from "react";
// interface for ThemeProvider
interface ThemeContextType{
    mode:string,
    setMode:(mode:string) => void,
}
// Initialise the theme for the context
const ThemeContext = createContext<ThemeContextType|undefined>(undefined);

export function ThemeProvider({children}:{
    children:React.ReactNode
}){
    const [mode,setMode] = useState('');
    const handleThemeChange = ()=>{
        if(mode === 'dark'){
            setMode('light');
            document.documentElement.classList.add('dark');
        }
        else {
            setMode('dark');
            document.documentElement.classList.add('light');
        }

    }
    useEffect(()=>{
        handleThemeChange();
    },[mode])
    return (
        <ThemeContext.Provider value={{mode,setMode}}>
            {children}

        </ThemeContext.Provider>
    )

}
export function useTheme(){
    const context = useContext(ThemeContext);
    if(context === undefined)
    {
        throw new Error("useTheme must be used inside a ThemeProvider")
    }
    return context;
}
