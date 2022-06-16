import React from "react";
import {Wrapper} from "../../Components/Wrapper /Wrapper";
import {Nav} from "../../Layouts/Nav/Nav";
import {Title} from "../../Components/Title /Title";
import {Form} from "../../Layouts/Form/Form";


export const Home_Page = () => {


    return (
        <Wrapper>
            <Nav/>
            <Title>Menedżer Firmowy</Title>
            <Form/>
        </Wrapper>
    )
}


