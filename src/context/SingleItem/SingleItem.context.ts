import {createContext} from "react";
import {SingleProductTypes} from "../../types/Product.types";

export const SingleItemContext = createContext({
    itemDetails: {} as SingleProductTypes,
    setItemDetails: (obj: SingleProductTypes)=>{},
})