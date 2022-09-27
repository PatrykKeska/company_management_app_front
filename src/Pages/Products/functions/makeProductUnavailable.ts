import { apiURL } from '../../../utils/api'
export const makeProductUnavailable = async (id: string) => {
  await fetch(`${apiURL}/products/unavailable`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ productId: id }),
  })
}
