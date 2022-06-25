import React from "react";
import styled from "styled-components";
import {Paragraph} from "../../Components/Paragraphs/Paragraph";
import {Img} from "../../Components/Img/Img";
import {Button} from "../../Components/Button /Button";
import {SingleProductTypes} from "../../types/Product.types";


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



export const ProductDescription = (props:SingleProductTypes)=>{
    return(

        <Wrapper key={props.id}>
            <Img src={props.img}/>
            <Paragraph positionStart={2} positionEnd={2}>{`${props.name}`}</Paragraph>
        <Paragraph positionStart={3} positionEnd={3}>{`Cena: ${props.price}`}</Paragraph>
        <Paragraph positionStart={4} positionEnd={4}>{`Ilość:${props.pieces}`}</Paragraph>
        <Paragraph  positionStart={5} positionEnd={5}>{`Data Zakupu: ${props.dateOfBuy}`}</Paragraph>
            <Button small>Edytuj</Button>
        </Wrapper>
    )
}