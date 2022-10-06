import { useEffect, useState } from 'react'
import { SingleProductTypes } from '../../../types/Product.types'
import { getAllProducts } from '../functions/getAllProducts'

export function useGetAllProductsHook() {
  const [storage, setStorage] = useState([] as SingleProductTypes[])
  useEffect(() => {
    ;(async () => {
      const products = (await getAllProducts()) as SingleProductTypes[]
      setStorage(products)
    })()
    return () => {
      setStorage([])
    }
  }, [])
  return storage
}
