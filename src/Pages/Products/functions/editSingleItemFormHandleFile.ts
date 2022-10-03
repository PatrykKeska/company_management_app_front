import React from 'react'
import { CallBackFunction } from '../../../types/CallBackFunction'
import { SingleProductTypes } from '../../../types/Product.types'

export const editSingleItemFormHandleFile = (
  e: React.ChangeEvent<HTMLInputElement>,
  setItemDetails: CallBackFunction,
  setPreview: CallBackFunction,
  itemDetails: SingleProductTypes,
) => {
  setItemDetails({ ...itemDetails, file: e.target.files![0] })
  setPreview({ src: URL.createObjectURL(e.target.files![0]) })
}
