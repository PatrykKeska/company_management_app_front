import React, {ChangeEventHandler, useState} from "react";
import styled from "styled-components";
import {Input} from "../../Components/Input/Input";
import {Button} from "../../Components/Button /Button";
import {StyledLabel} from "../../Components/StyledLabel/StyledLabel";
import {InputOnChange} from "../../types/common.types";
import {set} from "react-hook-form";


const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const LoginForm = () => {
    const [formValues, setFormValues] = useState({login: '', password: ''});

    return (
        <StyledForm>
            <StyledLabel>
                Login:
                <Input
                    value={formValues.login}
                    type={'text'} name={'login'}
                    onChange={(event: InputOnChange) => setFormValues({
                           ...formValues,
                           login: event.target.value
                       })}/>

            </StyledLabel>

            <StyledLabel>
                Password:
                <Input
                    name={'password'}
                    value={formValues.password}
                    onChange={(event: InputOnChange) => setFormValues({
                    ...formValues,
                    password: event.target.value
                })} type={'password'}/>

            </StyledLabel>

            <Button>Sign in</Button>
        </StyledForm>
    )
}