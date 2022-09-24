import { apiURL } from '../../../utils/api'

export const deleteProduct = async (id: string) => {
  await fetch(`${apiURL}/products/remove`, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })
}
