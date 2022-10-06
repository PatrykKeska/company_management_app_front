import { apiURL } from '../../../utils/api'

export const getAllProducts = async () => {
  const response = await fetch(`${apiURL}/products`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })
  return await response.json()
}
