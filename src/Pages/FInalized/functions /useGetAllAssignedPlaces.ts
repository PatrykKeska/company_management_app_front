import { useState, useEffect } from 'react'
import { SinglePlaceTypes } from '../../../types/Places.types'
import { getAllFinalizedPlaces } from './getAllFinalizedPlaces'

export function useGetAllAssignedPlaces() {
  const [places, setPlaces] = useState([] as SinglePlaceTypes[])

  useEffect(() => {
    ;(async () => {
      const places = await getAllFinalizedPlaces()
      setPlaces(places)
    })()
    return () => {
      setPlaces([])
    }
  }, [])
  return places
}
