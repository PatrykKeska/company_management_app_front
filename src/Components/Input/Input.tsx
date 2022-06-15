import React from "react";
import styled from "styled-components";

interface Props {
placeholder:string
    type:string
}

export const StyledInput = styled.input`
  padding: 15px;
  min-width: 200px;
  width: 80vw;
  max-width: 500px;
  border: 0;
  background-color: white;
  border-radius: 25px;
  text-align: center;
  margin: 5px 0 ;

`




export const Input = (props:Props)=>{


    return(
        <StyledInput type={props.type} placeholder={props.placeholder}>

        </StyledInput>
    )
}
