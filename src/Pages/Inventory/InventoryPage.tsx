import { useState } from 'react'
import * as React from 'react'
import { Typography } from '@mui/material'
import { StylesProvider } from '@material-ui/core/styles'
import { Nav } from '../../Layouts/GeneralUse/Nav/Nav'
import { Wrapper } from '../../Components/Wrapper /Wrapper'
import { ProductInPlace } from '../../types/product-in-place'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { theme } from '../../MaterialUIComponents/theme/materialTheme'
import { GridContainer } from '../../MaterialUIComponents/gridContainer'
import { FlexContainer } from '../../MaterialUIComponents/flexContainer'
import { Container } from '../../MaterialUIComponents/container'
import { useAuthCheck } from '../../utils/useAuthCheck'
import { UseGetAllProductPlaces } from './hooks/useGetAllProductPlaces'
import { ResponseModal } from '../../MaterialUIComponents/ResponseModal'
import { InventoryPlacesList } from '../../Layouts/Inventory/InventoryPlacesList'
import { InventoryProductsList } from '../../Layouts/Inventory/InventoryProductsList'

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
                <>
                  <InventoryPlacesList
                    places={places}
                    setAssigned={setAssigned}
                    assigned={assigned}
                  />
                </>
              </Container>
            </FlexContainer>
            <FlexContainer>
              <Container>
                <Typography>Products</Typography>
                <InventoryProductsList
                  products={products}
                  setAssigned={setAssigned}
                  assigned={assigned}
                  setMessage={setMessage}
                  handleOpen={handleOpen}
                />
              </Container>
            </FlexContainer>
          </GridContainer>
        </SCThemeProvider>
      </StylesProvider>
      <ResponseModal message={message} open={open} handleClose={handleClose} />
    </Wrapper>
  )
}
