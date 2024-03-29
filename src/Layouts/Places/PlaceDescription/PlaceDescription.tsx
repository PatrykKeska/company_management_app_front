import React, { useContext } from 'react'
import { Paragraph } from '../../../Components/Paragraphs/Paragraph'
import { Img } from '../../../Components/Img/Img'
import { SinglePlaceTypes } from '../../../types/Places.types'
import { LinkButton } from '../../../Components/LinkButton/LinkButton'
import { SinglePlaceContext } from '../../../context/SinglePlace/singlePlace.context'
import { ProductPlaceDescriptionWrapper } from '../../../Components/Product-Place-Description/ProductPlaceDescriptionWrapper'
import { UnavailableMessage } from '../../../Components/UnavailableMessage/UnavailableMessage'
import { ApiList } from '../../../utils/api'
const {placeImage} = ApiList
export const PlaceDescription = (props: SinglePlaceTypes) => {
  const { setPlaceDetails } = useContext(SinglePlaceContext)

  const setContextForSingleElement = () => {
    setPlaceDetails(props)
  }

  return (
    <ProductPlaceDescriptionWrapper
      isActive={props.placeStatus!}
      key={props.id}
    >
      <UnavailableMessage>
        {props.placeStatus! === 0 ? 'Unavailable!' : null}
      </UnavailableMessage>
      <Img width={'150px'} height={'120px'} src={`${placeImage}${props.id}`} />
      <Paragraph positionStart={2} positionEnd={2}>{`${props.name}`}</Paragraph>
      <Paragraph
        positionStart={3}
        positionEnd={3}
      >{`City: ${props.city}`}</Paragraph>
      <Paragraph
        positionStart={4}
        positionEnd={4}
      >{`Street:${props.street}`}</Paragraph>
      <Paragraph
        positionStart={5}
        positionEnd={5}
      >{`Number of the building: ${props.buildNumber}`}</Paragraph>
      <LinkButton
        small={'true'}
        onClick={setContextForSingleElement}
        to={`/places/${props.id}`}
      >
        Edit
      </LinkButton>
    </ProductPlaceDescriptionWrapper>
  )
}
