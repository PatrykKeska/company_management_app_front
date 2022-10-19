import { Nav } from '../../Layouts/GeneralUse/Nav/Nav'
import { Wrapper } from '../../Components/Wrapper /Wrapper'
import { useAuthCheck } from '../../utils/useAuthCheck'
import { SingleProduct } from '../../MaterialUIComponents/productContainer'
import { theme } from '../../MaterialUIComponents/theme/materialTheme'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles'
import { Avatar, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import * as React from 'react'
import { FlexboxContainer } from '../../Components/flexboxContainer/flexboxContainer'
import { useGetAllAssignedPlaces } from './hooks/useGetAllAssignedPlaces'
import { ApiList } from '../../utils/api'
const {placeImage} = ApiList
export const FinalizedPage = () => {
  useAuthCheck()
  const places = useGetAllAssignedPlaces()
  return (
    <Wrapper>
      <Nav />
      <StylesProvider injectFirst>
        <SCThemeProvider theme={theme}>
          <FlexboxContainer>
            {places.length < 1 ? (
              <Typography>
                There are no ready places to see yet. Please go to the inventory
                tab and assign items to places.
              </Typography>
            ) : (
              places.map((place) => (
                <SingleProduct key={place.id}>
                  <Avatar
                    sx={{ width: 70, height: 70 }}
                    srcSet={`${placeImage}${place.id}`}
                  />
                  <p>{place.name}</p>
                  <p>City: {place.city}</p>
                  <p>Street: {place.street}</p>
                  <p>BN: {place.buildNumber}</p>
                  <Button
                    component={Link}
                    to={`/finalized/${place.id}`}
                    size='small'
                    variant='contained'
                  >
                    Check Products
                  </Button>
                </SingleProduct>
              ))
            )}
          </FlexboxContainer>
        </SCThemeProvider>
      </StylesProvider>
    </Wrapper>
  )
}
