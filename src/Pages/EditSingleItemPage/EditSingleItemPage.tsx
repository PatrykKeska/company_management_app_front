import React from "react";
import {Nav} from "../../Layouts/Nav/Nav";
import {EditSingleItemForm} from "../../Layouts/EditSingleItemForm/EditSingleItemForm";
import {Wrapper} from "../../Components/Wrapper /Wrapper";


export const EditSingleItemPage = ()=>{

    return (
        <>
            <Nav/>
            <Wrapper>
                <EditSingleItemForm />
            </Wrapper>
        </>
    )
}