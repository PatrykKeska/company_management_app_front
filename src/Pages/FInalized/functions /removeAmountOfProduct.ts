import { apiURL } from '../../../utils/api'

export async function removeAmountOfProduct(
  productId: string,
  placeId: string,
  amount: number,
) {
  const data = await fetch(`${apiURL}/product-in-places/update`, {
    method: 'PATCH',
    credentials: 'include',
    body: JSON.stringify({ productId, placeId, amount }),
    headers: { 'Content-type': 'application/json' },
  })
  return await data.json()
}
