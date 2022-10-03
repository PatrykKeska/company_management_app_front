import { ChangeEvent } from 'react'
import { CallBackFunction } from '../../../types/CallBackFunction'
import { ProductInPlace } from '../../../types/product-in-place'

export const handleInput = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setAssigned: CallBackFunction,
  assigned: ProductInPlace,
) => {
  setAssigned({ ...assigned, amount: Number(e.target.value) })
}
