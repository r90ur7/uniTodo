import { useState, createContext,useEffect } from "react";
interface ThemeData {
isDarkMode: string
handledarkmode: () => void
}

export const TemaContext = createContext({} as ThemeData)

export const  TemaProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isDarkMode, setDarkMode] = useState("dark");
    const handledarkmode = () =>{
        if(isDarkMode ==="dark"){
            setDarkMode("light")
        } else{
            setDarkMode("dark")
        }
    }
    return(
        <TemaContext.Provider
            value = {{isDarkMode:isDarkMode,handledarkmode:handledarkmode}}
        >
            {children}
        </TemaContext.Provider>
    );
};