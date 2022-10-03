import { CallBackFunction } from '../../../types/CallBackFunction'
import { PlaceToPick } from '../../../types/PlaceToPick'
import { ProductInPlace } from '../../../types/product-in-place'

export const handlePlacePick = (
  id: string,
  setAssigned: CallBackFunction,
  places: PlaceToPick[],
  assigned: ProductInPlace,
) => {
  setAssigned({ placeId: '', productId: '', amount: 0 })
  places
    .filter((place) => {
      if (place.isPicked) {
        place.isPicked = false
      }
      if (place.id === id) {
        place.isPicked = true
      }
    })
    .map((place) => (place.isPicked = !place.isPicked))
  setAssigned({ ...assigned, placeId: id })
}
