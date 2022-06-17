import React from "react";
import {Wrapper} from "../../Components/Wrapper /Wrapper";
import {Nav} from "../../Layouts/Nav/Nav";
import styled from "styled-components";
import {PlaceDescription} from "../../Layouts/PlaceDescription/PlaceDescription";


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


    return (<>
            <Nav/>
            <GridWrapper>

                {/*Dummy Data  to create styles*/}
                <PlaceDescription
                    title={"Centrala"}
                    city={'Limanowa'}
                    street={'Test 12'}
                    buildingNumber={12}
                />

                <PlaceDescription
                    title={"Centrala"}
                    city={'Limanowa'}
                    street={'Test 12'}
                    buildingNumber={12}
                />

                <PlaceDescription
                    title={"Centrala"}
                    city={'Limanowa'}
                    street={'Test 12'}
                    buildingNumber={12}
                />
            </GridWrapper>
        </>
    )
}


