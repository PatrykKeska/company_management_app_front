import React, {useEffect, useState} from "react";
import {Wrapper} from "../../../Components/Wrapper /Wrapper";
import {Nav} from "../../../Layouts/GeneralUse/Nav/Nav";
import styled from "styled-components";
import {PlaceDescription} from "../../../Layouts/Places/PlaceDescription/PlaceDescription";
import {SinglePlaceTypes} from "../../../types/Places.types";


const GridWrapper = styled(Wrapper)`
display: flex;
justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  
  @media(min-width: 800px){
    flex-direction: row;
    flex-wrap: wrap;
    
  }
`


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
            <GridWrapper>

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

            </GridWrapper>
        </>
    )
}


