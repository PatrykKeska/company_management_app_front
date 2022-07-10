import React from "react";
import {StyledTbody} from "../../Components/Tbody/Tbody";
import {StyledTh} from "../../Components/Th/Th";


export const TbodyLayoutPlace = ()=>{

    return(
        <StyledTbody>
            <tr>
                <StyledTh>Name</StyledTh>
                <StyledTh>City</StyledTh>
                <StyledTh>Street</StyledTh>
                <StyledTh>Edit</StyledTh>
            </tr>
        </StyledTbody>
    )
}