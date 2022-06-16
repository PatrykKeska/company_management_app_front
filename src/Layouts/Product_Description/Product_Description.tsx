import React from "react";
import styled from "styled-components";
import {Paragraph} from "../../Components/Paragraphs/Paragraph";
import {Img} from "../../Components/Img/Img";
import pencil from '../../assets /img/pencil.webp'
import {Button} from "../../Components/Button /Button";
interface Props {
    title:string
    price:number;
    amount: number;
    date : string

}

const Wrapper = styled.div`
width: 350px;
  margin:10px auto;
  height: 330px;
  border: 2px solid black;
  display: grid;
  padding: 10px;
  grid-template-columns: 87px 87px 87px 87px;
  grid-template-rows: 50px 50px 50px 50px 50px 50px;
`



export const Product_Description = (props:Props)=>{


    return(
        <Wrapper>
            <Img src={pencil}/>
            <Paragraph positionStart={1} positionEnd={1}>{`${props.title}`}</Paragraph>
        <Paragraph positionStart={2} positionEnd={2}>{`Cena: ${props.price}`}</Paragraph>
        <Paragraph positionStart={3} positionEnd={3}>{`Ilość:${props.amount}`}</Paragraph>
        <Paragraph  positionStart={4} positionEnd={4}>{`Data Zakupu: ${props.date}`}</Paragraph>
            <Button small>Edytuj</Button>

        </Wrapper>
    )
}