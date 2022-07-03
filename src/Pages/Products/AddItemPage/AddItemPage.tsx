import React from "react";
import {Wrapper} from "../../../Components/Wrapper /Wrapper";
import {Nav} from "../../../Layouts/GeneralUse/Nav/Nav";
import styled from "styled-components";
import {AddProductForm} from "../../../Layouts/Products/AddProductForm/AddProductForm";





export const AddItemPage = () => {


    return (
            <Wrapper>
                <Nav/>
              <AddProductForm/>
            </Wrapper>

    )
}


