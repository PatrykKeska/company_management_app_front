import { fetchDefaultProductImage, fetchDefaultPlaceImage } from './api'
import { useEffect, useState } from 'react'

export const getDefaultImages = (name: string) => {
  const [data, setData] = useState<string>('')
  let api = ''
  if (name === 'product') {
    api = fetchDefaultProductImage
  } else if (name === 'place') {
    api = fetchDefaultPlaceImage
  }
  useEffect(() => {
    fetch(`${api}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.blob())
      .then((response) => {
        setData(URL.createObjectURL(response))
      })
      .catch((err) => {
        console.log(err)
      })
    return () => {
      setData('')
    }
  }, [])
  return data
}
