import React, {useContext} from "react";
import {Wrapper} from "../../Components/Wrapper /Wrapper";
import {Nav} from "../../Layouts/GeneralUse/Nav/Nav";
import {Title} from "../../Components/Title /Title";
import {LoginForm} from "../../Layouts/GeneralUse/LoginForm/LoginForm";
import {AuthProvider} from "../../context/AuthProvider/AuthProvider";
import {LogoutButton} from "../../Components/logoutButton/LogoutButton";


export const HomePage = () => {
    const {loginStatus} = useContext(AuthProvider);

    return (
        <>
            {loginStatus ? (
                <Wrapper>
                    <Nav/>
                    <Title>Inventory Management</Title>
                    <LogoutButton/>

                </Wrapper>) : <Wrapper>
                <Title>Inventory Management</Title>
                <LoginForm/>
            </Wrapper>}

        </>
    )
}


