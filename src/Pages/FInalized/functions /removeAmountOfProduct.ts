import { apiURL } from '../../../utils/api'
import { CallBackFunction } from '../../../types/CallBackFunction'

export async function removeAmountOfProduct(
  productId: string,
  placeId: string,
  amount: number,
  setMessage: CallBackFunction,
) {
  const data = await fetch(`${apiURL}/product-in-places/update`, {
    method: 'PATCH',
    credentials: 'include',
    body: JSON.stringify({ productId, placeId, amount }),
    headers: { 'Content-type': 'application/json' },
  })
  const response = await data.json()
  setMessage({ title: response.title, message: response.message })
  return response
}
