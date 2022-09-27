import { apiURL } from '../../../utils/api'

export const restorePlace = async (id: string) => {
  await fetch(`${apiURL}/places/restore`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ placeId: id }),
  })
}
