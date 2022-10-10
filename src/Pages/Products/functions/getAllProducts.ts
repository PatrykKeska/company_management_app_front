import { apiURL } from '../../../utils/api'
import { SinglePlacesProductsTypes } from '../../../types/places_products.types'

export const getAllProducts = async () => {
  const response = await fetch(`${apiURL}/products`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })
  return (await response.json()) as SinglePlacesProductsTypes[]
}
