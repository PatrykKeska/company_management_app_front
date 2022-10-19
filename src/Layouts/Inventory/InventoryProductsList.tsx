import { SingleProduct } from '../../MaterialUIComponents/productContainer'
import { Avatar } from '@mui/material'
import { MyButton } from '../../MaterialUIComponents/myButton'
import { handleProductPick } from '../../Pages/Inventory/functions/handleProductPick'
import { ValueInput } from '../../MaterialUIComponents/valueInput'
import { handleInput } from '../../Pages/Inventory/functions/handleInput'
import { handleSubmit } from '../../Pages/Inventory/functions/handleSubmit'
import * as React from 'react'
import { ProductToPick } from '../../types/productToPick'
import { CallBackFunction } from '../../types/CallBackFunction'
import { ProductInPlace } from '../../types/product-in-place'
import { ApiList } from '../../utils/api'
const {productImage} = ApiList
interface Props {
  products: ProductToPick[]
  setAssigned: CallBackFunction
  assigned: ProductInPlace
  setMessage: CallBackFunction
  handleOpen: CallBackFunction
}

export const InventoryProductsList = (props: Props) => {
  const { products, setAssigned, assigned, setMessage, handleOpen } = props
  return (
    <React.Fragment>
      {products.map((product) => (
        <SingleProduct isActive={product.isPicked} key={product.id}>
          <Avatar
            sx={{ width: 70, height: 70 }}
            srcSet={`${productImage}${product.id}`}
          />
          <p>{product.name}</p>
          <p>Price: {product.price}</p>
          <p>Amount: {product.amount}</p>
          <p>Date: {product.dateOfBuy}</p>
          <MyButton
            variant='contained'
            onClick={() =>
              handleProductPick(product.id!, assigned, setAssigned, products)
            }
          >
            Pick
          </MyButton>
          {product.isPicked && (
            <>
              <ValueInput
                onChange={(e) => handleInput(e, setAssigned, assigned)}
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
    </React.Fragment>
  )
}
