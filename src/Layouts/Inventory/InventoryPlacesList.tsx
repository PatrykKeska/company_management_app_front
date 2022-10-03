import { SingleProduct } from '../../MaterialUIComponents/productContainer'
import { Avatar } from '@mui/material'
import { fileApi } from '../../utils/api'
import { MyButton } from '../../MaterialUIComponents/myButton'
import { handlePlacePick } from '../../Pages/Inventory/functions/handlePlacePick'
import * as React from 'react'
import { CallBackFunction } from '../../types/CallBackFunction'
import { ProductInPlace } from '../../types/product-in-place'
import { PlaceToPick } from '../../types/PlaceToPick'

interface Props {
  places: PlaceToPick[]
  setAssigned: CallBackFunction
  assigned: ProductInPlace
}

export const InventoryPlacesList = (props: Props) => {
  const { places, setAssigned, assigned } = props

  return (
    <React.Fragment>
      {places.map((place) => (
        <>
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
                handlePlacePick(place.id!, setAssigned, places, assigned)
              }
            >
              Pick
            </MyButton>
          </SingleProduct>
        </>
      ))}
    </React.Fragment>
  )
}
