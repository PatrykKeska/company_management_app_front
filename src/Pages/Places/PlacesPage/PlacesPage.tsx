import React from 'react'
import { Nav } from '../../../Layouts/GeneralUse/Nav/Nav'
import { PlaceDescription } from '../../../Layouts/Places/PlaceDescription/PlaceDescription'
import { PlaceDescriptionWrapper } from '../../../Components/PlaceDescriptionWrapper/PlaceDescriptionWrapper'
import { fileApi } from '../../../utils/api'
import { useGetAllPlacesHook } from '../functions/useGetAllPlacesHook'

export const PlacesPage = () => {
  const allPlaces = useGetAllPlacesHook()
  return (
    <>
      <Nav />
      <PlaceDescriptionWrapper>
        {allPlaces.map((place) => (
          <PlaceDescription
            id={place.id}
            key={place.id}
            img={`${fileApi}${place.img}`}
            name={place.name}
            city={place.city}
            street={place.street}
            buildNumber={place.buildNumber}
            placeStatus={place.placeStatus}
          />
        ))}
      </PlaceDescriptionWrapper>
    </>
  )
}
