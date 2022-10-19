import { ApiList} from '../../../utils/api'
const {basicUrl} = ApiList
export const getAllProducts = async () => {
  const response = await fetch(`${basicUrl}/products`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })
  return await response.json()
}
