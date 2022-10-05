import { fetchFile } from './api'
import { useEffect, useState } from 'react'

export const getProductImg = (productId: string) => {
  const [data, setData] = useState<string>('')
  useEffect(() => {
    fetch(`${fetchFile}`, {
      body: JSON.stringify({ id: productId }),
      method: 'POST',
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
