import Grid2 from '@mui/material/Unstable_Grid2'
import { Avatar, Typography } from '@mui/material'
import * as React from 'react'
import { SinglePlaceTypes } from '../../types/Places.types'
import { ApiList } from '../../utils/api'
export interface Props {
  placeDetails: SinglePlaceTypes
  totalItemsPrice: number
}
export const SummaryFinalizedPlace = (props: Props) => {
  const { name, city, street, buildNumber, img,id
  } = props.placeDetails
  const {placeImage} = ApiList
  return (
    <Grid2
      direction='column'
      padding={5}
      container
      alignItems='center'
      justifyContent='center'
      columns={{ xs: 2, sm: 4, md: 8 }}
    >
      <Grid2 xs={1} sm={2} md={4}>
        <Avatar
          sx={{ width: 100, height: 100 }}
          srcSet={img ? `${placeImage}${id}` : ''}
        />
      </Grid2>
      <Grid2>
        <Typography color='crimson' fontSize={25}>
          {name}
        </Typography>
      </Grid2>
      <Grid2>
        <Typography fontSize={20}>City: {city} </Typography>
      </Grid2>
      <Grid2>
        <Typography fontSize={20}>Street: {street} </Typography>
      </Grid2>
      <Grid2>
        <Typography fontSize={20}>Number: {buildNumber} </Typography>
      </Grid2>
      <Grid2>
        <Typography color='crimson' fontSize={20}>
          Total Costs: {props.totalItemsPrice} $
        </Typography>
      </Grid2>
    </Grid2>
  )
}
