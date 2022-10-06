import React, { useContext } from 'react'
import { Paragraph } from '../../../Components/Paragraphs/Paragraph'
import { Img } from '../../../Components/Img/Img'
import { SingleProductTypes } from '../../../types/Product.types'
import { LinkButton } from '../../../Components/LinkButton/LinkButton'
import { SingleItemContext } from '../../../context/SingleItem/SingleItem.context'
import { ProductPlaceDescriptionWrapper } from '../../../Components/Product-Place-Description/ProductPlaceDescriptionWrapper'
import { UnavailableMessage } from '../../../Components/UnavailableMessage/UnavailableMessage'
import { fileApi } from '../../../utils/api'

export const ProductDescription = (props: SingleProductTypes) => {
  const { setItemDetails } = useContext(SingleItemContext)
  const setContextForSingleProduct = () => {
    setItemDetails(props)
  }
  const { productStatus, price, amount, dateOfBuy, name, id, img } = props
  return (
    <ProductPlaceDescriptionWrapper isActive={productStatus!} key={id}>
      <UnavailableMessage>
        {productStatus! === 0 ? 'Unavailable!' : null}
      </UnavailableMessage>
      <Img width={'150px'} height={'120px'} src={`${fileApi}${img}`} />
      <Paragraph positionStart={2} positionEnd={2}>{`${name}`}</Paragraph>
      <Paragraph
        positionStart={3}
        positionEnd={3}
      >{`Price: ${price}`}</Paragraph>
      <Paragraph
        positionStart={4}
        positionEnd={4}
      >{`Amount:${amount}`}</Paragraph>
      <Paragraph
        positionStart={5}
        positionEnd={5}
      >{`Date of buy: ${dateOfBuy}`}</Paragraph>
      <LinkButton
        small={'true'}
        onClick={setContextForSingleProduct}
        to={`/storage/${id}`}
      >
        {productStatus === 1 ? 'Edit' : 'Restore'}
      </LinkButton>
    </ProductPlaceDescriptionWrapper>
  )
}
