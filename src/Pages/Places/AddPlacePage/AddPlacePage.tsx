import React from 'react'
import { Wrapper } from '../../../Components/Wrapper /Wrapper'
import { Nav } from '../../../Layouts/GeneralUse/Nav/Nav'
import { AddPlaceForm } from '../../../Layouts/Places/AddPlaceForm/AddPlaceForm'

export const AddPlacePage = () => {
  return (
    <Wrapper>
      <Nav />
      <AddPlaceForm />
    </Wrapper>
  )
}
