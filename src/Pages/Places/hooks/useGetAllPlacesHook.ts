import React, { useState, useEffect } from 'react'
import { SinglePlaceTypes } from '../../../types/Places.types'
import { getAllPlaces } from '../functions/getAllPlaces'

export function useGetAllPlacesHook() {
  const [places, setPlaces] = useState([] as SinglePlaceTypes[])

  useEffect(() => {
    ;(async () => {
      const products = await getAllPlaces()
      setPlaces(products)
    })()
    return () => {
      setPlaces([])
    }
  }, [])
  return places
}
