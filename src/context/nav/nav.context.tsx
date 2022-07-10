import {createContext} from "react";

export const  NavContext = createContext({
    isNavOpen:true,
    setIsNavOpen: (s:boolean)=>{}
})