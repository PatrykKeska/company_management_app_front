import {createContext} from "react";

export const  NavContext = createContext({
    isDone:true,
    setDone: (s:boolean)=>{}
})