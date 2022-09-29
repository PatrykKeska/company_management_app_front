import { apiURL } from '../../../utils/api'

export async function deleteProductFromPlace(
  placeId: string,
  productId: string,
) {
  const data = await fetch(`${apiURL}/product-in-places/remove`, {
    method: 'DELETE',
    credentials: 'include',
    body: JSON.stringify({ placeId, productId }),
    headers: { 'Content-type': 'application/json' },
  })
  return await data.json()
}
