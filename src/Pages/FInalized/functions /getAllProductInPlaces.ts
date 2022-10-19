import { SingleProductTypes } from '../../../types/Product.types'
import { ApiList } from '../../../utils/api'
const {basicUrl} = ApiList
export async function getAllProductInPlaces(id: string) {
  const data = await fetch(`${basicUrl}/product-in-places/get-exact`, {
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
