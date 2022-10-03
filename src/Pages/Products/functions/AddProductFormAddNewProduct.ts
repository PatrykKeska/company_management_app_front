import { FormEvent } from 'react'
import { createNewProduct } from '../../Places/functions/createNewProduct'
import { SingleProductTypes } from '../../../types/Product.types'
import { CallBackFunction } from '../../../types/CallBackFunction'

export const addProductFormAddNewProduct = async (
  e: FormEvent,
  formValues: SingleProductTypes,
  setResponseMessage: CallBackFunction,
  handleOpen: CallBackFunction,
  setFormValues: CallBackFunction,
) => {
  e.preventDefault()
  try {
    const resMessage = await createNewProduct(formValues)
    setResponseMessage(resMessage)
  } finally {
    handleOpen()
    setFormValues({
      name: '',
      price: 0,
      amount: 0,
      dateOfBuy: '',
      file: undefined,
    })
  }
}
