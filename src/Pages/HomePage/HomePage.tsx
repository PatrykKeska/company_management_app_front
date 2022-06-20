import React from "react";
import {Wrapper} from "../../Components/Wrapper /Wrapper";
import {Nav} from "../../Layouts/Nav/Nav";
import {Title} from "../../Components/Title /Title";
import {LoginForm} from "../../Layouts/LoginForm/LoginForm";


export const HomePage = () => {


    return (
        <Wrapper>
            <Nav/>
            <Title>Organizer Firmowy</Title>
            <LoginForm/>
        </Wrapper>
    )
}


