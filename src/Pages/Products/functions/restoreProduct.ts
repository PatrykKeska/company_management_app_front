import { apiURL } from '../../../utils/api'

export const restoreProduct = async (id: string, amount: number) => {
  await fetch(`${apiURL}/products/restore`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ productId: id, amount }),
  })
}
