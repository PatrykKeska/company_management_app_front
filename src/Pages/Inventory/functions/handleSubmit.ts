import { FormEvent } from 'react'
import { apiURL } from '../../../utils/api'
import { ProductInPlace } from '../../../types/product-in-place'
import { CallBackFunction } from '../../../types/CallBackFunction'

export const handleSubmit = async (
  e: FormEvent,
  assigned: ProductInPlace,
  setMessage: CallBackFunction,
  handleOpen: CallBackFunction,
) => {
  e.preventDefault()
  try {
    const response = await fetch(`${apiURL}/product-in-places/assign`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(assigned),
    })
    const data = await response.json()
    if (data.isSuccess) {
      await setMessage({ title: 'Success', message: data.message })
    } else {
      await setMessage({ title: 'Fail', message: data.message })
    }
  } catch (e) {
    console.log(e)
  } finally {
    handleOpen()
  }
}
