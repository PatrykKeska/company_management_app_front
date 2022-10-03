import { FormEvent } from 'react'
import { updateProduct } from './updateProduct'
import { restoreProduct } from './restoreProduct'
import { makeProductUnavailable } from './makeProductUnavailable'
import { deleteProduct } from './deleteProduct'
import { SingleProductTypes } from '../../../types/Product.types'
import { CallBackFunction } from '../../../types/CallBackFunction'

export const editSingleItemHandleSubmit = async (
  e: FormEvent,
  toDelete: boolean,
  restore: boolean,
  unavailable: boolean,
  itemDetails: SingleProductTypes,
  setResponseMessage: CallBackFunction,
  amount: number,
  id: string,
  handleOpen: CallBackFunction,
  setItemDetails: CallBackFunction,
) => {
  e.preventDefault()
  try {
    if (!toDelete && !restore && !unavailable) {
      const resMessage = await updateProduct(itemDetails)
      setResponseMessage(resMessage)
    }
    if (restore && amount > 0) {
      const resMessage = await restoreProduct(
        itemDetails.id!,
        itemDetails.amount,
      )
      setResponseMessage(resMessage)
    } else if (unavailable && id) {
      const resMessage = await makeProductUnavailable(id)
      setResponseMessage(resMessage)
    }
    if (toDelete) {
      const resMessage = await deleteProduct(itemDetails.id!)
      setResponseMessage(resMessage)
    }
  } finally {
    handleOpen()
    setItemDetails({
      name: '',
      price: 0,
      amount: 0,
      dateOfBuy: '',
      img: '',
    })
  }
}
