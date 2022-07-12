import React, {useContext} from "react";
import {Button} from "../Button /Button";
import {AuthProvider} from "../../context/AuthProvider/AuthProvider";


export const LogoutButton = () => {
    const {setLogginStatus} = useContext(AuthProvider);
    const logOut = () => {
        setLogginStatus(false)
        localStorage.clear()
    }
    return (

        <Button onClick={logOut}>Log out</Button>
    )
}