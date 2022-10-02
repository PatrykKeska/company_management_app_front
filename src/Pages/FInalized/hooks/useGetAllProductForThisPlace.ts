import { useEffect, useState } from 'react'
import { getAllProductInPlaces } from '../functions /getAllProductInPlaces'
import { SinglePlaceTypes } from '../../../types/Places.types'
import { ProductToPick } from '../../../types/productToPick'

const defaultValues = {
  place: {
    id: '',
    name: '',
    city: '',
    placeStatus: 0,
    street: '',
    img: '',
    key: '',
    buildNumber: '',
  } as SinglePlaceTypes,
  products: [],
}

export function useGetAllProductForThisPlace(placeId: string, status: boolean) {
  const [productsInPlace, setProductsInPlace] = useState({
    place: {} as SinglePlaceTypes,
    products: [] as ProductToPick[],
  })

  useEffect(() => {
    ;(async () => {
      const productInPlaces = await getAllProductInPlaces(placeId)
      setProductsInPlace({
        place: productInPlaces.place,
        products: productInPlaces.products,
      })

      return () => {
        setProductsInPlace({
          place: defaultValues.place,
          products: defaultValues.products,
        })
      }
    })()
  }, [status])

  return productsInPlace
}
