import { apiURL } from '../../../utils/api'

export const deletePlace = async (id: string) => {
  await fetch(`${apiURL}/places/remove`, {
    method: 'DELETE',
    credentials: 'include',
    body: JSON.stringify({ id }),
    headers: { 'Content-Type': 'application/json' },
  })
}
