import React, { EventHandler } from 'react'
import { ProductPlaceDescriptionWrapper } from '../../Components/Product-Place-Description/ProductPlaceDescriptionWrapper'
import { SinglePlaceTypes } from '../../types/Places.types'
import { Img } from '../../Components/Img/Img'
import { Paragraph } from '../../Components/Paragraphs/Paragraph'
import { Button } from '../../Components/Button /Button'

interface Props extends SinglePlaceTypes {
  onClick: EventHandler<any>
}

export const FinalizedPlaceDescription = (props: Props) => {
  return (
    <ProductPlaceDescriptionWrapper key={props.id}>
      <Img width={'150px'} height={'120px'} src={props.img} />
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
      <Button small onClick={() => props.onClick(props.id)}>
        Check Products
      </Button>
    </ProductPlaceDescriptionWrapper>
  )
}
