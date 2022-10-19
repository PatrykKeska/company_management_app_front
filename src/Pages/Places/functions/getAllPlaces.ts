import { ApiList} from '../../../utils/api'
const {basicUrl} = ApiList
export const getAllPlaces = async () => {
  const data = await fetch(`${basicUrl}/places`, {
    method: 'GET',
    credentials: 'include',
  })
  return await data.json()
}
