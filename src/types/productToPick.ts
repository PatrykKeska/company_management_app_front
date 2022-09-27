import { SingleProductTypes } from './Product.types'

export interface ProductToPick extends SingleProductTypes {
  isPicked: boolean
}
