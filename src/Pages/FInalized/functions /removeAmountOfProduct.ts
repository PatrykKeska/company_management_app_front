import { CallBackFunction } from '../../../types/CallBackFunction'
import { ApiList } from '../../../utils/api'
const {basicUrl} = ApiList
export async function removeAmountOfProduct(
  productId: string,
  placeId: string,
  amount: number,
  setMessage: CallBackFunction,
) {
  const data = await fetch(`${basicUrl}/product-in-places/update`, {
    method: 'PATCH',
    credentials: 'include',
    body: JSON.stringify({ productId, placeId, amount }),
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
