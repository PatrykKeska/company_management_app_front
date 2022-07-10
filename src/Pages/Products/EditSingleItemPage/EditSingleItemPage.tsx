import React from "react";
import {Nav} from "../../../Layouts/GeneralUse/Nav/Nav";
import {EditSingleItemForm} from "../../../Layouts/Products/EditSingleItemForm/EditSingleItemForm";
import {Wrapper} from "../../../Components/Wrapper /Wrapper";


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