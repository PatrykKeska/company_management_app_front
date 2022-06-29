import React, {useContext} from "react";
import styled from "styled-components";
import {Paragraph} from "../../Components/Paragraphs/Paragraph";
import {Img} from "../../Components/Img/Img";
import {SingleProductTypes} from "../../types/Product.types";
import {LinkButton} from "../../Components/LinkButton/LinkButton";
import {SingleItemContext} from "../../context/SingleItem/SingleItem.context";


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
    const {setItemDetails} = useContext(SingleItemContext);
    const setContextForSingleProduct = ()=>{
        setItemDetails(props)
    }
    return(

        <Wrapper key={props.id}>
            <Img width={'150px'} height={'120px'} src={props.img}/>
            <Paragraph positionStart={2} positionEnd={2}>{`${props.name}`}</Paragraph>
        <Paragraph positionStart={3} positionEnd={3}>{`Price: ${props.price}`}</Paragraph>
        <Paragraph positionStart={4} positionEnd={4}>{`Amount:${props.amount}`}</Paragraph>
        <Paragraph  positionStart={5} positionEnd={5}>{`Date of buy: ${props.dateOfBuy}`}</Paragraph>
            <LinkButton small={'true'} onClick={setContextForSingleProduct} to={`/storage/${props.id}`}>Edit</LinkButton>
        </Wrapper>
    )
}