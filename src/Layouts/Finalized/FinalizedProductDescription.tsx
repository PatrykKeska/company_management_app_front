import React from 'react'
import { ProductPlaceDescriptionWrapper } from '../../Components/Product-Place-Description/ProductPlaceDescriptionWrapper'
import { Img } from '../../Components/Img/Img'
import { Paragraph } from '../../Components/Paragraphs/Paragraph'
import { SinglePlacesProductsTypes } from '../../types/places_products.types'
import { Button } from '../../Components/Button /Button'

interface Props extends SinglePlacesProductsTypes {
  deleteProduct: any
}

export const FinalizedProductDescription = (props: Props) => {
  return (
    <ProductPlaceDescriptionWrapper>
      <Img width={'150px'} height={'120px'} src={props.img} />
      <Paragraph positionStart={2} positionEnd={2}>{`${props.name}`}</Paragraph>
      <Paragraph
        positionStart={3}
        positionEnd={3}
      >{`Price: ${props.price}`}</Paragraph>
      <Paragraph
        positionStart={4}
        positionEnd={4}
      >{`Amount:${props.amount}`}</Paragraph>
      <Paragraph
        positionStart={5}
        positionEnd={5}
      >{`Date of buy: ${props.dateOfBuy}`}</Paragraph>
      <Button
        onClick={() => props.deleteProduct(props.place_id, props.item_id)}
      >
        Delete me
      </Button>
    </ProductPlaceDescriptionWrapper>
  )
}
