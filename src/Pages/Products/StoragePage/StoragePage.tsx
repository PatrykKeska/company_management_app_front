import React, { useState, useEffect } from 'react'
import { Wrapper } from '../../../Components/Wrapper /Wrapper'
import { Nav } from '../../../Layouts/GeneralUse/Nav/Nav'
import styled from 'styled-components'
import { ProductDescription } from '../../../Layouts/Products/ProductDescription/ProductDescription'
import { SingleProductTypes } from '../../../types/Product.types'
import { fileApi } from '../../../utils/api'
import { getAllProducts } from '../functions/getAllProducts'

const GridWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const StoragePage = () => {
  const [storage, setStorage] = useState([] as SingleProductTypes[])
  useEffect(() => {
    ;(async () => {
      const products = await getAllProducts()
      setStorage(products)
    })()
  }, [])

  return (
    <>
      <Nav />
      <GridWrapper>
        {storage.map((item) => (
          <ProductDescription
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            dateOfBuy={item.dateOfBuy}
            img={`${fileApi}${item.img}`}
          />
        ))}
      </GridWrapper>
    </>
  )
}
