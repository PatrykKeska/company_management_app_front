import {createContext} from "react";
import {SinglePlacesProductsTypes} from "../../types/places_products.types";

export const FinalizedContext = createContext({
    itemsInPlace: {},
    setItemsInPlace: (obj: SinglePlacesProductsTypes[])=>{},
})
