import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import * as React from 'react'
import { Avatar, Modal, Box, Typography } from '@mui/material'
import { StylesProvider } from '@material-ui/core/styles'
import { Nav } from '../../Layouts/GeneralUse/Nav/Nav'
import { Wrapper } from '../../Components/Wrapper /Wrapper'
import { SingleProductTypes } from '../../types/Product.types'
import { SinglePlaceTypes } from '../../types/Places.types'
import { getAllProducts } from '../Products/functions/getAllProducts'
import { getAllPlaces } from '../Places/functions/getAllPlaces'
import { apiURL, fileApi } from '../../utils/api'
import { ProductInPlace } from '../../types/product-in-place'
import { ProductToPick } from '../../types/productToPick'
import { PlaceToPick } from '../../types/PlaceToPick'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { theme } from '../../MaterialUIComponents/theme/materialTheme'
import { SingleProduct } from '../../MaterialUIComponents/productContainer'
import { MyButton } from '../../MaterialUIComponents/myButton'
import { materialModalStyle } from '../../MaterialUIComponents/theme/materialModalStyle'
import { GridContainer } from '../../MaterialUIComponents/gridContainer'
import { FlexContainer } from '../../MaterialUIComponents/flexContainer'
import { Container } from '../../MaterialUIComponents/container'
import { ValueInput } from '../../MaterialUIComponents/valueInput'
import { useAuthCheck } from '../../utils/useAuthCheck'
import { handlePlacePick } from './functions/handlePlacePick'
import { handleProductPick } from './functions/handleProductPick'
import { handleSubmit } from './functions/handleSubmit'
import { handleInput } from './functions/handleInput'
import { UseGetAllProductPlaces } from './hooks/useGetAllProductPlaces'

export const InventoryPage = () => {
  useAuthCheck()
  const [message, setMessage] = useState({ title: '', message: '' })
  const [assigned, setAssigned] = useState({} as ProductInPlace)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { places, products } = UseGetAllProductPlaces(open)

  return (
    <Wrapper>
      <Nav />
      <StylesProvider injectFirst>
        <SCThemeProvider theme={theme}>
          <GridContainer>
            <FlexContainer>
              <Container>
                <Typography>Places</Typography>
                {places.map((place) => (
                  <SingleProduct isActive={place.isPicked} key={place.id}>
                    <Avatar
                      sx={{ width: 70, height: 70 }}
                      srcSet={`${fileApi}${place.img}`}
                    />
                    <p>{place.name}</p>
                    <p>City: {place.city}</p>
                    <p>Street: {place.street}</p>
                    <p>BN: {place.buildNumber}</p>
                    <MyButton
                      variant='contained'
                      onClick={() =>
                        handlePlacePick(
                          place.id!,
                          setAssigned,
                          places,
                          assigned,
                        )
                      }
                    >
                      Pick
                    </MyButton>
                  </SingleProduct>
                ))}
              </Container>
            </FlexContainer>
            <FlexContainer>
              <Container>
                <Typography>Products</Typography>
                {products.map((product) => (
                  <SingleProduct isActive={product.isPicked} key={product.id}>
                    <Avatar
                      sx={{ width: 70, height: 70 }}
                      srcSet={`${fileApi}${product.img}`}
                    />
                    <p>{product.name}</p>
                    <p>Price: {product.price}</p>
                    <p>Amount: {product.amount}</p>
                    <p>Date: {product.dateOfBuy}</p>
                    <MyButton
                      variant='contained'
                      onClick={() =>
                        handleProductPick(
                          product.id!,
                          assigned,
                          setAssigned,
                          products,
                        )
                      }
                    >
                      Pick
                    </MyButton>
                    {product.isPicked && (
                      <>
                        <ValueInput
                          onChange={(e) =>
                            handleInput(e, setAssigned, assigned)
                          }
                          fullWidth={false}
                          size='small'
                          type='number'
                          inputProps={{
                            min: '1',
                          }}
                        />
                        <MyButton
                          variant='contained'
                          onClick={(e) =>
                            handleSubmit(e, assigned, setMessage, handleOpen)
                          }
                          size={'small'}
                        >
                          Add
                        </MyButton>
                      </>
                    )}
                  </SingleProduct>
                ))}
              </Container>
            </FlexContainer>
          </GridContainer>
        </SCThemeProvider>
      </StylesProvider>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={materialModalStyle}>
          <Typography
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            {message.title}
          </Typography>
          <Typography
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            id='modal-modal-description'
            sx={{ mt: 2 }}
          >
            {message.message}
          </Typography>
        </Box>
      </Modal>
    </Wrapper>
  )
}
