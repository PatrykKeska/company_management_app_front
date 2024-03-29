import { ApiList } from '../../../utils/api'

export const deletePlace = async (id: string) => {
const {basicUrl} = ApiList
  const data = await fetch(`${basicUrl}/places/remove`, {
    method: 'DELETE',
    credentials: 'include',
    body: JSON.stringify({ id }),
    headers: { 'Content-Type': 'application/json' },
  })
  const response = await data.json()
  if (response.isSuccess) {
    return { title: 'Success', message: response.message }
  } else {
    return { title: 'Fail', message: response.message }
  }
}
