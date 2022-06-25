import React from "react";
import styled from "styled-components";
import {Paragraph} from "../../Components/Paragraphs/Paragraph";
import {Img} from "../../Components/Img/Img";
import office from '../../assets /img/office.jpeg'
import {Button} from "../../Components/Button /Button";
import {SinglePlaceTypes} from "../../types/Places.types";


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


    return(
        <Wrapper key={props.id}>
            <Img src={props.img}/>
            <Paragraph positionStart={2} positionEnd={2}>{`${props.name}`}</Paragraph>
            <Paragraph positionStart={3} positionEnd={3}>{`Miasto: ${props.city}`}</Paragraph>
            <Paragraph positionStart={4} positionEnd={4}>{`Ulica:${props.street}`}</Paragraph>
            <Paragraph  positionStart={5} positionEnd={5}>{`Numer Bydynku: ${props.buildNumber}`}</Paragraph>
            <Button small>Edytuj</Button>

        </Wrapper>
    )
}