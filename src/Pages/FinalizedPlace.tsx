import { Wrapper } from '../Components/Wrapper /Wrapper'
import { Nav } from '../Layouts/GeneralUse/Nav/Nav'
import { useParams } from 'react-router-dom'
import { useGetAllProductForThisPlace } from './FInalized/functions /useGetAllProductForThisPlace'
import { Avatar, Button, Typography } from '@mui/material'
import { FlexboxContainer } from '../Components/flexboxContainer/flexboxContainer'
import { ProductContainer } from '../MaterialUIComponents/productContainer'
import { theme } from '../MaterialUIComponents/theme/materialTheme'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { fileApi } from '../utils/api'
import * as React from 'react'
import { SummaryCalc } from '../utils/SummaryCalc'
import { deleteProductFromPlace } from './FInalized/functions /DeleteProductFromPlace'
import { ChangeEvent, useState } from 'react'
import { ValueInput } from '../MaterialUIComponents/valueInput'
import { removeAmountOfProduct } from './FInalized/functions /removeAmountOfProduct'
import { useAuthCheck } from '../utils/useAuthCheck'

export function FinalizedPlace() {
  useAuthCheck()
  const [status, setStatus] = useState(false)
  const [update, setUpdate] = useState(false)
  const [inputValue, setInputValue] = useState(1)
  const params = useParams()
  const products = useGetAllProductForThisPlace(params.id!, status)
  const totalItemsPrice = SummaryCalc(products.products)

  const handleUpdate = (id: string) => {
    setInputValue(1)
    setUpdate(!update)
    products.products.filter((item) => {
      if (item.id !== id) {
        item.isPicked = false
      }
      if (item.id === id) {
        item.isPicked = !item.isPicked
      }
    })
  }

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInputValue(Number(e.target.value))
  }

  return (
    <Wrapper>
      <Nav />
      <Typography fontSize={25}>Summary</Typography>
      <Typography fontSize={25}>Total Price : {totalItemsPrice} $</Typography>
      <StylesProvider injectFirst>
        <SCThemeProvider theme={theme}>
          <FlexboxContainer>
            {products.products.map((item) => {
              const { id, name, img, amount, price, dateOfBuy, isPicked } = item
              return (
                <ProductContainer
                  style={{
                    gap: 10,
                    backgroundColor: '#ff884d',
                    minWidth: '300px',
                  }}
                  key={id}
                >
                  <Avatar
                    sx={{ width: 100, height: 100 }}
                    srcSet={`${fileApi}${img}`}
                  />
                  <Typography fontSize={15}>Name: {name}</Typography>
                  <Typography fontSize={15}>Each Piece: {price} $</Typography>
                  <Typography fontSize={15}>Amount: {amount} pcs</Typography>
                  <Typography fontSize={15}>
                    Date of buy: {dateOfBuy}
                  </Typography>
                  <Typography fontSize={15}>
                    Total value: {amount * price} $
                  </Typography>
                  <Button
                    onClick={() => handleUpdate(id!)}
                    size='small'
                    variant='contained'
                  >
                    Remove Amount Of
                  </Button>
                  {isPicked && (
                    <ValueInput
                      onChange={(e) => handleInput(e)}
                      fullWidth={false}
                      value={inputValue}
                      size='small'
                      type='number'
                      inputProps={{
                        min: '1',
                        max: `${amount}`,
                      }}
                    />
                  )}
                  {isPicked ? (
                    <Button
                      onClick={async () => {
                        await removeAmountOfProduct(id!, params.id!, inputValue)
                        setStatus(!status)
                      }}
                      size='small'
                      variant='contained'
                    >
                      Confirm
                    </Button>
                  ) : (
                    <Button
                      onClick={async () => {
                        await deleteProductFromPlace(params.id!, id!)
                        setStatus(!status)
                      }}
                      size='small'
                      variant='outlined'
                    >
                      Remove Product
                    </Button>
                  )}
                </ProductContainer>
              )
            })}
          </FlexboxContainer>
        </SCThemeProvider>
      </StylesProvider>
    </Wrapper>
  )
}
