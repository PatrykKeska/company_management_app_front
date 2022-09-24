import { SingleProductTypes } from '../types/Product.types'

export const SummaryCalc = (items: SingleProductTypes[]): number => {
  return items.reduce((curr: number, items: SingleProductTypes): number => {
    return curr + items.price * items.amount
  }, 0)
}
