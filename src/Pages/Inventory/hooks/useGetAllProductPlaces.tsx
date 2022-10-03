import { useEffect, useState } from 'react'
import { getAllProducts } from '../../Products/functions/getAllProducts'
import { SingleProductTypes } from '../../../types/Product.types'
import { getAllPlaces } from '../../Places/functions/getAllPlaces'
import { SinglePlaceTypes } from '../../../types/Places.types'
import { ProductToPick } from '../../../types/productToPick'
import { PlaceToPick } from '../../../types/PlaceToPick'

export const UseGetAllProductPlaces = (open: boolean) => {
  const [products, setProducts] = useState([] as ProductToPick[])
  const [places, setPlaces] = useState([] as PlaceToPick[])
  useEffect(() => {
    ;(async () => {
      const fetchProducts = (await getAllProducts()) as SingleProductTypes[]
      const fetchPlaces = (await getAllPlaces()) as SinglePlaceTypes[]
      const singleProduct = fetchProducts
        .filter((isAvailable) => isAvailable.productStatus === 1)
        .map((product) => {
          return { ...product, isPicked: false }
        })
      const singlePlace = fetchPlaces
        .filter((isAvailable) => isAvailable.placeStatus === 1)
        .map((place) => {
          return { ...place, isPicked: false }
        })
      setProducts(singleProduct)
      setPlaces(singlePlace)
    })()
  }, [open])
  return { products, places }
}
