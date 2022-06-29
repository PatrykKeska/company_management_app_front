import React from "react";
import {Nav} from "../../Layouts/Nav/Nav";
import {EditSinglePlaceForm} from "../../Layouts/EditSinglePlaceForm/EditSinglePlaceForm";
import {Wrapper} from "../../Components/Wrapper /Wrapper";



export const EditSinglePlacePage = ()=>{

    return (
        <>
            <Nav/>
        <Wrapper>
            <EditSinglePlaceForm />
        </Wrapper>
        </>
    )
}