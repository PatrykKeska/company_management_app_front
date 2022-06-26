import React, {useState} from "react";
import styled from "styled-components";
import {Nav} from "../../Layouts/Nav/Nav";
import {EditSinglePlaceForm} from "../../Layouts/EditSinglePlaceForm/EditSinglePlaceForm";

const Wrapper = styled.div`
  background-color: #FFF96B;
  padding: 50px 10px;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const Strong = styled.strong`
color:crimson;
`

export const EditSinglePlace = ()=>{

    return (
        <>
            <Nav/>
        <Wrapper>
            <EditSinglePlaceForm />
        </Wrapper>
        </>
    )
}