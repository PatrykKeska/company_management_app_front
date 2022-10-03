import React from 'react'
import { CallBackFunction } from '../../../types/CallBackFunction'
import { SingleProductTypes } from '../../../types/Product.types'

export const addProductFormHandleFile = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormValues: CallBackFunction,
  formValues: SingleProductTypes,
  setPreview: CallBackFunction,
) => {
  setFormValues({ ...formValues, file: e.target.files![0] })
  setPreview({ src: URL.createObjectURL(e.target.files![0]) })
}
