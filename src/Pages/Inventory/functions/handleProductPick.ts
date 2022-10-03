import { ProductToPick } from '../../../types/productToPick'
import { CallBackFunction } from '../../../types/CallBackFunction'
import { ProductInPlace } from '../../../types/product-in-place'

export const handleProductPick = (
  id: string,
  assigned: ProductInPlace,
  setAssigned: CallBackFunction,
  products: ProductToPick[],
) => {
  setAssigned({ ...assigned, amount: 0, productId: id })
  products
    .filter((product) => {
      if (product.isPicked) {
        product.isPicked = false
      }
      if (product.id === id) {
        product.isPicked = true
      }
    })
    .map((product) => (product.isPicked = !product.isPicked))
}
