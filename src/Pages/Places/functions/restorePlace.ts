import { apiURL } from '../../../utils/api'

export const restorePlace = async (id: string) => {
  const data = await fetch(`${apiURL}/places/restore`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ placeId: id }),
  })
  const response = await data.json()
  if (response.isSuccess) {
    return { title: 'Success', message: response.message }
  } else {
    return { title: 'Fail', message: response.message }
  }
}
