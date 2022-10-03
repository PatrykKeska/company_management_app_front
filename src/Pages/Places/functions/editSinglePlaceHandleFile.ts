import React from 'react'
import { CallBackFunction } from '../../../types/CallBackFunction'
import { SinglePlaceTypes } from '../../../types/Places.types'

export const editSinglePlaceHandleFile = (
  e: React.ChangeEvent<HTMLInputElement>,
  setPlaceDetails: CallBackFunction,
  placeDetails: SinglePlaceTypes,
  setPreview: CallBackFunction,
) => {
  setPlaceDetails({ ...placeDetails, file: e.target.files![0] })
  setPreview({ src: URL.createObjectURL(e.target.files![0]) })
}
