import { apiURL } from '../../../utils/api'
import { SinglePlaceTypes } from '../../../types/Places.types'

export const updateSinglePlace = async (placeDetails: SinglePlaceTypes) => {
  const { id, name, file, street, city, buildNumber } = placeDetails
  const formData = new FormData()
  formData.append('name', name)
  formData.append('id', id!)
  formData.append('street', street)
  formData.append('city', city)
  formData.append('buildNumber', buildNumber)
  formData.append('file', file!)
  await fetch(`${apiURL}/places/update`, {
    method: 'PATCH',
    credentials: 'include',
    body: formData,
  })
}
