import React from 'react'
import { StyledTbody } from '../../Components/Tbody/Tbody'
import { StyledTh } from '../../Components/Th/Th'

export const TbodyLayoutItem = () => (
  <StyledTbody>
    <tr>
      <StyledTh>Name</StyledTh>
      <StyledTh>Price</StyledTh>
      <StyledTh>Amount</StyledTh>
      <StyledTh>Edit</StyledTh>
    </tr>
  </StyledTbody>
)
