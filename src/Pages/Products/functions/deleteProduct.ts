import { ApiList} from '../../../utils/api'
const {basicUrl} = ApiList;
export const deleteProduct = async (id: string) => {
  const data = await fetch(`${basicUrl}/products/remove`, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })
  const response = await data.json()
  if (response.isSuccess) {
    return { title: 'Success', message: response.message }
  } else {
    return { title: 'Fail', message: response.message }
  }
}
