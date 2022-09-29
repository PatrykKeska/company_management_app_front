import { apiURL } from '../../../utils/api'
import { SingleProductTypes } from '../../../types/Product.types'

export async function getAllProductInPlaces(id: string) {
  const data = await fetch(`${apiURL}/product-in-places/get-exact`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ placeId: id }),
    headers: { 'Content-type': 'application/json' },
  })
  const response = await data.json()
  const extendedResponse = await response.products.map(
    (item: SingleProductTypes) => {
      return { ...item, isPicked: false }
    },
  )
  return {
    place: response.place,
    products: extendedResponse,
  }
}
