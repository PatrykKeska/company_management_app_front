import React, { useEffect, useState } from 'react'
import { Nav } from '../../../Layouts/GeneralUse/Nav/Nav'
import { PlaceDescription } from '../../../Layouts/Places/PlaceDescription/PlaceDescription'
import { SinglePlaceTypes } from '../../../types/Places.types'
import { PlaceDescriptionWrapper } from '../../../Components/PlaceDescriptionWrapper/PlaceDescriptionWrapper'
import { getAllProducts } from '../functions/getAllProducts'
import { fileApi } from '../../../utils/api'

export const PlacesPage = () => {
  const [places, setPlaces] = useState([] as SinglePlaceTypes[])
  useEffect(() => {
    ;(async () => {
      const products = await getAllProducts()
      setPlaces(products)
    })()
  }, [places])

  return (
    <>
      <Nav />
      <PlaceDescriptionWrapper>
        {places.map((place) => (
          <PlaceDescription
            id={place.id}
            key={place.id}
            img={`${fileApi}${place.img}`}
            name={place.name}
            city={place.city}
            street={place.street}
            buildNumber={place.buildNumber}
          />
        ))}
      </PlaceDescriptionWrapper>
    </>
  )
}
