import { ApiList } from '../../../utils/api'

const {basicUrl} = ApiList
export const makeProductUnavailable = async (id: string) => {
  const data = await fetch(`${basicUrl}/products/unavailable`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ productId: id }),
  })
  const response = await data.json()
  if (response.isSuccess) {
    return { title: 'Success', message: response.message }
  } else {
    return { title: 'Fail', message: response.message }
  }
}
