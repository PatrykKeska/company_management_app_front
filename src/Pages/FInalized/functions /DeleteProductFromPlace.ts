import { apiURL } from '../../../utils/api'
import { CallBackFunction } from '../../../types/CallBackFunction'

export async function deleteProductFromPlace(
  placeId: string,
  productId: string,
  setMessage: CallBackFunction,
) {
  const data = await fetch(`${apiURL}/product-in-places/remove`, {
    method: 'DELETE',
    credentials: 'include',
    body: JSON.stringify({ placeId, productId }),
    headers: { 'Content-type': 'application/json' },
  })
  const response = await data.json()
  setMessage({ title: response.title, message: response.message })
  return response
}
