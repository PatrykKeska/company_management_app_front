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

export const InventoryPage = () => {
  const [products, setProducts] = useState([] as ProductToPick[])
  const [places, setPlaces] = useState([] as PlaceToPick[])
  const [message, setMessage] = useState({ title: '', message: '' })
  const [assigned, setAssigned] = useState({} as ProductInPlace)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  useAuthCheck()
  const handleProductPick = (id: string) => {
    setAssigned({ ...assigned, amount: 0, productId: id })
    products
      .filter((product) => {
        if (product.isPicked) {
          product.isPicked = false
        }
        if (product.id === id) {
          product.isPicked = true
        }
      })
      .map((product) => (product.isPicked = !product.isPicked))
  }

  const handlePlacePick = (id: string) => {
    setAssigned({ placeId: '', productId: '', amount: 0 })
    places
      .filter((place) => {
        if (place.isPicked) {
          place.isPicked = false
        }
        if (place.id === id) {
          place.isPicked = true
        }
      })
      .map((place) => (place.isPicked = !place.isPicked))
    setAssigned({ ...assigned, placeId: id })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`${apiURL}/product-in-places/assign`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(assigned),
      })
      const data = await response.json()
      if (data.isSuccess) {
        await setMessage({ title: 'Success', message: data.message })
      } else {
        await setMessage({ title: 'Fail', message: data.message })
      }
    } catch (e) {
      console.log(e)
    } finally {
      handleOpen()
    }
  }

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setAssigned({ ...assigned, amount: Number(e.target.value) })
  }
  useEffect(() => {
    ;(async () => {
      const fetchProducts = (await getAllProducts()) as SingleProductTypes[]
      const fetchPlaces = (await getAllPlaces()) as SinglePlaceTypes[]
      const singleProduct = fetchProducts
        .filter((isAvailable) => isAvailable.productStatus === 1)
        .map((product) => {
          return { ...product, isPicked: false }
        })
      const singlePlace = fetchPlaces
        .filter((isAvailable) => isAvailable.placeStatus === 1)
        .map((place) => {
          return { ...place, isPicked: false }
        })
      setProducts(singleProduct)
      setPlaces(singlePlace)
    })()
  }, [open])

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
                      onClick={() => handlePlacePick(place.id!)}
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
                      onClick={() => handleProductPick(product.id!)}
                    >
                      Pick
                    </MyButton>
                    {product.isPicked && (
                      <>
                        <ValueInput
                          onChange={(e) => handleInput(e)}
                          fullWidth={false}
                          size='small'
                          type='number'
                          inputProps={{
                            min: '1',
                          }}
                        />
                        <MyButton
                          variant='contained'
                          onClick={handleSubmit}
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
