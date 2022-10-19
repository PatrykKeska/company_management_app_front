import { ApiList } from '../../../utils/api'

const {basicUrl} = ApiList
export const restorePlace = async (id: string) => {
  const data = await fetch(`${basicUrl}/places/restore`, {
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
