import { CallBackFunction } from '../../../types/CallBackFunction'
import { ProductToPick } from '../../../types/productToPick'

export const handleUpdate = (
  id: string,
  setInputValue: CallBackFunction,
  setUpdate: CallBackFunction,
  products: any,
  update: boolean,
) => {
  setInputValue(1)
  setUpdate(!update)
  products.products.filter((item: ProductToPick) => {
    if (item.id !== id) {
      item.isPicked = false
    }
    if (item.id === id) {
      item.isPicked = !item.isPicked
    }
  })
}
