import React from "react";
import styled from "styled-components";
import {OnChangeCheckbox} from "../../types/common.types";

const StyledCheckbox = styled.input`
margin-left: 10px;
`

interface Props{
    checked: boolean;
    onChange: OnChangeCheckbox;
}


export const Checkbox = (props: Props)=>{
const {checked, onChange} = props
    return(
<StyledCheckbox type={'checkbox'} checked={checked} onChange={onChange} />
    )
}