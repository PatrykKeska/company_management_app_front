import React, {useContext, useState} from "react";
import styled from "styled-components";
import {Input} from "../../../Components/Input/Input";
import {Button} from "../../../Components/Button /Button";
import {StyledLabel} from "../../../Components/StyledLabel/StyledLabel";
import {InputOnChange, onSubmitType} from "../../../types/common.types";
import {AuthProvider} from "../../../context/AuthProvider/AuthProvider";


const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const LoginForm = () => {
    const {setLogginStatus} = useContext(AuthProvider)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e: onSubmitType) => {
        e.preventDefault();
        try {

            const response = await fetch('http://localhost:3001/', {
                method: "POST",
                credentials: 'include',
                body: JSON.stringify({
                    login,
                    password
                }),
                headers: {'Content-Type': 'application/json'},

            });
            const data = await response.json()
            console.log(data)


            if (!data.auth) {
                setLogginStatus(false);

            } else {
                setLogginStatus(true)


            }


        } catch (err) {

        } finally {

        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>
                Login:
                <Input
                    value={login}
                    type={'text'} name={'login'}
                    onChange={(event: InputOnChange) => setLogin(event.target.value)}/>

            </StyledLabel>

            <StyledLabel>
                Password:
                <Input
                    name={'password'}
                    value={password}
                    onChange={(event: InputOnChange) => setPassword(event.target.value)} type={'password'}/>

            </StyledLabel>

            <Button>Sign in</Button>
        </StyledForm>
    )
}