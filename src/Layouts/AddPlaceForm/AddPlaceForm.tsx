import React from "react";
import styled from "styled-components";
import {Input} from "../../Components/Input/Input";
import {Button} from "../../Components/Button /Button";
import {Img} from "../../Components/Img/Img";
import office from '../../assets /img/office.jpeg'

const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const AddPlaceForm = () => {


    return (
        <StyledForm>
            <Img src={office}/>
            <Input placeholder={'Nazwa...'} type={'text'}/>
            <Input placeholder={'Miasto...'} type={'text'}/>
            <Input placeholder={'Ulica...'} type={'text'}/>
            <Input placeholder={'Numer Budynku...'} type={'number'}/>
            <Button>Dodaj</Button>
        </StyledForm>
    )
}