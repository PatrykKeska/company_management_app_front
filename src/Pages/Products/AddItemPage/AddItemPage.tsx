import React from 'react'
import { Wrapper } from '../../../Components/Wrapper /Wrapper'
import { Nav } from '../../../Layouts/GeneralUse/Nav/Nav'
import { AddProductForm } from '../../../Layouts/Products/AddProductForm/AddProductForm'
import { useAuthCheck } from '../../../utils/useAuthCheck'

export const AddItemPage = () => {
  useAuthCheck()
  return (
    <Wrapper>
      <Nav />
      <AddProductForm />
    </Wrapper>
  )
}
