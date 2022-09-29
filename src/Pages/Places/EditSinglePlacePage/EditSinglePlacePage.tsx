import React from 'react'
import { Nav } from '../../../Layouts/GeneralUse/Nav/Nav'
import { EditSinglePlaceForm } from '../../../Layouts/Places/EditSinglePlaceForm/EditSinglePlaceForm'
import { Wrapper } from '../../../Components/Wrapper /Wrapper'
import { useAuthCheck } from '../../../utils/useAuthCheck'

export const EditSinglePlacePage = () => {
  useAuthCheck()
  return (
    <>
      <Nav />
      <Wrapper>
        <EditSinglePlaceForm />
      </Wrapper>
    </>
  )
}
