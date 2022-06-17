import React from "react";
import styled from "styled-components";
import {Input} from "../../Components/Input/Input";
import {Button} from "../../Components/Button /Button";
import {Img} from "../../Components/Img/Img";
import pencil from '../../assets /img/pencil.webp'

const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const AddProductForm = () => {


    return (
        <StyledForm>
            <Img src={pencil}/>
            <Input placeholder={'Nazwa...'} type={'text'}/>
            <Input placeholder={'Cena...'} type={'number'}/>
            <Input placeholder={'Ilość...'} type={'number'}/>
            <Input placeholder={'Data Zakupu...'} type={'date'}/>
            <Button>Dodaj</Button>
        </StyledForm>
    )
}