import React from 'react'
import { Nav } from '../../../Layouts/GeneralUse/Nav/Nav'
import { PlaceDescription } from '../../../Layouts/Places/PlaceDescription/PlaceDescription'
import { PlaceDescriptionWrapper } from '../../../Components/PlaceDescriptionWrapper/PlaceDescriptionWrapper'
import { useGetAllPlacesHook } from '../hooks/useGetAllPlacesHook'
import { useAuthCheck } from '../../../utils/useAuthCheck'

export const PlacesPage = () => {
  useAuthCheck()
  const allPlaces = useGetAllPlacesHook()
  return (
    <>
      <Nav />
      <PlaceDescriptionWrapper>
        {allPlaces.map((place) => (
          <PlaceDescription
            id={place.id}
            img={place.img}
            key={place.id}
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
