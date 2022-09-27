import { apiURL } from '../../../utils/api'

export const makePlaceUnAvailable = async (id: string) => {
  await fetch(`${apiURL}/places/unavailable`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ placeId: id }),
  })
}
