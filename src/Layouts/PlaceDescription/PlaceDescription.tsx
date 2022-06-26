import React, {useContext, useState} from "react";
import styled from "styled-components";
import {Paragraph} from "../../Components/Paragraphs/Paragraph";
import {Img} from "../../Components/Img/Img";

import {SinglePlaceTypes} from "../../types/Places.types";
import {LinkButton} from "../../Components/LinkButton/LinkButton";
import {SinglePlaceContext} from "../../context/SinglePlace/singlePlace.context";

const Wrapper = styled.div`
width: 350px;
  margin:10px auto;
  height: 330px;
  border: 2px solid black;
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr ;
  transition: .3s linear all;
  
  @media(min-width: 500px){
    width: 600px;
    height: 400px;
  }
  
  &:hover{
   box-shadow: 0 0 10px 5px white;
  }
`



export const PlaceDescription = (props:SinglePlaceTypes)=>{
const {details,setDetails} = useContext(SinglePlaceContext);
const [placeDescription, setPlaceDescription] = useState(props);
const setContextForSingleElement = ()=>{
setDetails(placeDescription)
}
    return(
        <Wrapper key={props.id}>
            <Img width={'150px'} height={'120px'} src={props.img}/>
            <Paragraph positionStart={2} positionEnd={2}>{`${props.name}`}</Paragraph>
            <Paragraph positionStart={3} positionEnd={3}>{`City: ${props.city}`}</Paragraph>
            <Paragraph positionStart={4} positionEnd={4}>{`Street:${props.street}`}</Paragraph>
            <Paragraph  positionStart={5} positionEnd={5}>{`Number of the building: ${props.buildNumber}`}</Paragraph>
            <LinkButton small={'true'} onClick={setContextForSingleElement} to={`/places/${props.id}`}>Edit</LinkButton>


        </Wrapper>
    )
}