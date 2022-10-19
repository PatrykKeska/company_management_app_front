import { ApiList } from '../../../utils/api'
const {basicUrl} = ApiList

export const getAllFinalizedPlaces = async () => {
  const data = await fetch(`${basicUrl}/product-in-places/get-all`, {
    method: 'GET',
    credentials: 'include',
  })
  return await data.json()
}
