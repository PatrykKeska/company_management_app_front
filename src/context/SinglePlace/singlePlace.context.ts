import {createContext} from "react";
import {SinglePlaceTypes} from "../../types/Places.types";

export const SinglePlaceContext = createContext({
    details: {} as SinglePlaceTypes,
    setDetails: (obj: SinglePlaceTypes)=>{},
})