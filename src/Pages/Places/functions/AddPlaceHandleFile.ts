import React, { ChangeEvent } from 'react'
import { CallBackFunction } from '../../../types/CallBackFunction'
import { SinglePlaceTypes } from '../../../types/Places.types'

export const addPlaceHandleFile = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormValues: CallBackFunction,
  formValues: SinglePlaceTypes,
  setPreview: CallBackFunction,
) => {
  setFormValues({ ...formValues, file: e.target.files![0] })
  setPreview({ src: URL.createObjectURL(e.target.files![0]) })
}
