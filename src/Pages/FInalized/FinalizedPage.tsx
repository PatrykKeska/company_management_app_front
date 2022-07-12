import React, {useEffect, useState} from "react";
import {Nav} from "../../Layouts/GeneralUse/Nav/Nav";
import {Wrapper} from "../../Components/Wrapper /Wrapper";
import axios from "axios";
import {SinglePlaceTypes} from "../../types/Places.types";
import {PlaceDescriptionWrapper} from "../../Components/PlaceDescriptionWrapper/PlaceDescriptionWrapper";
import {FinalizedPlaceDescription} from "../../Layouts/Finalized/FinalizedPlaceDescription";
import {SingleFinalizedModal} from "./SingleFinalizedModal";
import {SinglePlacesProductsTypes} from "../../types/places_products.types";
import {FinalizedContext} from "../../context/Finalized/FinalizedContext";
import {apiURL} from "../../utils/api";


export const FinalizedPage = () => {
    const [places, setPlaces] = useState(Array<SinglePlaceTypes>);
    const [itemsInPlace, setItemsInPlace] = useState(Array<SinglePlacesProductsTypes>)
    const [isPicked, setisPicked] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`${apiURL}/places`);
            setPlaces(response.data.message)
        })()

    }, [itemsInPlace]);

    const getItemsInPlace = async (id: string) => {
        const itemsInPlace = await axios.post(`${apiURL}/finalized`, {pickedPlaceID: id});
        setItemsInPlace(itemsInPlace.data.response)
        setisPicked(true)
    }

    const handleModal = () => {
        setisPicked(false)
    }

    const deleteProduct = async (placeID: string, itemID: string) => {
       const response =  await axios.post(`${apiURL}/finalized/delete`, {place_id: placeID, item_id: itemID});
        setItemsInPlace(response.data.update)

    }


    return (
        <Wrapper>
            <FinalizedContext.Provider value={{itemsInPlace, setItemsInPlace}}>
            <Nav/>
            {isPicked ?
                <SingleFinalizedModal deleteProduct={deleteProduct} onClick={handleModal} items={itemsInPlace}/> :
                <PlaceDescriptionWrapper>
                    {places.map((place) =>
                        <FinalizedPlaceDescription
                            id={place.id}
                            key={place.id}
                            img={place.img}
                            name={place.name}
                            city={place.city}
                            street={place.street}
                            buildNumber={place.buildNumber}
                            onClick={getItemsInPlace}
                        />)}
                </PlaceDescriptionWrapper>
            }
            </FinalizedContext.Provider>
        </Wrapper>
    )

}