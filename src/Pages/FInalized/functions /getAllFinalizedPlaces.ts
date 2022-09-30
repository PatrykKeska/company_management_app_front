import { apiURL } from '../../../utils/api'

export const getAllFinalizedPlaces = async () => {
  const data = await fetch(`${apiURL}/product-in-places/get-all`, {
    method: 'GET',
    credentials: 'include',
  })
  return await data.json()
}
