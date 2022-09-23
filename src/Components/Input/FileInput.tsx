import React, {ChangeEventHandler} from "react";
import styled from "styled-components";

interface Props {
    value?: string | number | any
    name: string
    onChange: ChangeEventHandler
}

export const StyledInput = styled.input`
  width: 100%;
  border:1px solid black;
  border-radius: 20px;
  max-width:350px;
  margin: 10px;

  ::-webkit-file-upload-button{
    width: 100px;
    height: 35px;
    background-color: black;
    border-radius: 20px;
    color: white;
    border: none;
    padding: 10px;
    
  }
`




export const FileInput = (props:Props)=>{


    return(
        <StyledInput onChange={props.onChange} value={props.value} name={props.name}  type='file'>

        </StyledInput>
    )
}
