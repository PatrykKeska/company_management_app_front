import React from "react";
import styled from "styled-components";
import {Input} from "../../Components/Input/Input";
import {Button} from "../../Components/Button /Button";


const StyledForm = styled.form`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Form = ()=>{


    return(
        <StyledForm>
        <Input placeholder={'Login...'} type={'text'}/>
        <Input placeholder={'Hasło...'} type={'password'}/>
            <Button>Zaloguj</Button>
        </StyledForm>
    )
}