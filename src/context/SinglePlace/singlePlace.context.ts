import { createContext } from 'react'
import { SinglePlaceTypes } from '../../types/Places.types'

export const SinglePlaceContext = createContext({
  placeDetails: {} as SinglePlaceTypes,
  setPlaceDetails: (obj: SinglePlaceTypes) => {},
})
