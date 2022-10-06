import React, { Fragment } from 'react'
import { Wrapper } from '../../../Components/Wrapper /Wrapper'
import { Nav } from '../../../Layouts/GeneralUse/Nav/Nav'
import styled from 'styled-components'
import { ProductDescription } from '../../../Layouts/Products/ProductDescription/ProductDescription'
import { useGetAllProductsHook } from '../hooks/useGetAllProductsHook'
import { useAuthCheck } from '../../../utils/useAuthCheck'

export const GridWrapper = styled(Wrapper)`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 100px;
  }
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
`
export const StoragePage = () => {
  useAuthCheck()
  const allProducts = useGetAllProductsHook()

  return (
    <>
      <Nav />
      <GridWrapper>
        {allProducts.map((item) => {
          return (
            <ProductDescription
              id={item.id}
              img={item.img}
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              dateOfBuy={item.dateOfBuy}
              productStatus={item.productStatus}
            />
          )
        })}
      </GridWrapper>
    </>
  )
}
