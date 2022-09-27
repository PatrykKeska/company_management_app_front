import { apiURL } from '../../../utils/api'

export const getAllPlaces = async () => {
  const data = await fetch(`${apiURL}/places`, {
    method: 'GET',
    credentials: 'include',
  })
  return await data.json()
}
