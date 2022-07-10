import React, {useEffect, useState} from "react";
import {Nav} from "../../../Layouts/GeneralUse/Nav/Nav";
import {PlaceDescription} from "../../../Layouts/Places/PlaceDescription/PlaceDescription";
import {SinglePlaceTypes} from "../../../types/Places.types";
import {PlaceDescriptionWrapper} from "../../../Components/PlaceDescriptionWrapper/PlaceDescriptionWrapper";




export const PlacesPage = () => {

    const [places, setPlaces] = useState([] as SinglePlaceTypes[]);

        useEffect(()=>{
            (async ()=>{
                try {
                    const data = await fetch('http://localhost:3001/places');
                    const results =await data.json();
                    setPlaces(results.message)
                }
                catch (error){
                    console.log(error)
                }

            })()
        },[])


    return (<>
            <Nav/>
            <PlaceDescriptionWrapper>
                {places.map((place)=>
                    <PlaceDescription
                        id={place.id}
                        key={place.id}
                        img = {place.img}
                        name={place.name}
                        city={place.city}
                        street={place.street}
                        buildNumber={place.buildNumber}
                    /> )}

            </PlaceDescriptionWrapper>
        </>
    )
}


