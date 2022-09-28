import { apiURL } from '../../../utils/api'
import { SinglePlaceTypes } from '../../../types/Places.types'

export function createNewPlace(productDetails: SinglePlaceTypes) {
  const responseFunction = async () => {
    const { name, city, buildNumber, street, file } = productDetails
    const formData = new FormData()
    formData.append('name', name)
    formData.append('city', city)
    formData.append('street', street)
    formData.append('buildNumber', buildNumber)
    formData.append('file', file!)

    const data = await fetch(`${apiURL}/places/add-new`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    })
    const response = await data.json()
    return {
      title: response.title,
      message: response.message,
    }
  }
  return responseFunction()
}
