import { ApiList } from '../../../utils/api'

const {basicUrl} = ApiList
export const restoreProduct = async (id: string, amount: number) => {
  const data = await fetch(`${basicUrl}/products/restore`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ productId: id, amount }),
  })
  const response = await data.json()
  if (response.isSuccess) {
    return { title: 'Success', message: response.message }
  } else {
    return { title: 'Fail', message: response.message }
  }
}
