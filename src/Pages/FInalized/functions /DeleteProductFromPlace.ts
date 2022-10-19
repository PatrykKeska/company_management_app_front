import { CallBackFunction } from '../../../types/CallBackFunction'
import { ApiList } from '../../../utils/api'
const {basicUrl} = ApiList

export async function deleteProductFromPlace(
  placeId: string,
  productId: string,
  setMessage: CallBackFunction,
) {
  const data = await fetch(`${basicUrl}/product-in-places/remove`, {
    method: 'DELETE',
    credentials: 'include',
    body: JSON.stringify({ placeId, productId }),
    headers: { 'Content-type': 'application/json' },
  })
  const response = await data.json()
  setMessage({
    title: response.title,
    message: response.message,
    redirect: response.redirect,
  })
  return response
}
