import { Wrapper } from '../../Components/Wrapper /Wrapper'
import { Nav } from '../../Layouts/GeneralUse/Nav/Nav'
import { useParams } from 'react-router-dom'
import { useGetAllProductForThisPlace } from './hooks/useGetAllProductForThisPlace'
import { Avatar, Button, Typography } from '@mui/material'
import { FlexboxContainer } from '../../Components/flexboxContainer/flexboxContainer'
import { ProductContainer } from '../../MaterialUIComponents/productContainer'
import { theme } from '../../MaterialUIComponents/theme/materialTheme'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { fileApi } from '../../utils/api'
import * as React from 'react'
import { SummaryCalc } from '../../utils/SummaryCalc'
import { useState } from 'react'
import { ValueInput } from '../../MaterialUIComponents/valueInput'
import { removeAmountOfProduct } from './functions /removeAmountOfProduct'
import { useAuthCheck } from '../../utils/useAuthCheck'
import { handleUpdate } from './functions /handleUpdate'
import { handleInput } from './functions /handleInput'
import { SummaryFinalizedPlace } from '../../Layouts/Finalized/SummaryFinalizedPlace'
import { ResultModal } from '../../MaterialUIComponents/ResultModal'
import { ConfirmModal } from '../../MaterialUIComponents/ConfirmModal'

export function FinalizedPlace() {
  useAuthCheck()
  const [status, setStatus] = useState(false)
  const [update, setUpdate] = useState(false)
  const [inputValue, setInputValue] = useState(1)
  const [open, setOpen] = React.useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const params = useParams()
  const products = useGetAllProductForThisPlace(params.id!, status)
  const totalItemsPrice = SummaryCalc(products.products)
  const [message, setMessage] = useState({
    title: '',
    message: '',
    redirect: false,
  })
  const [deleteDetails, setDeleteDetails] = useState({
    placeId: '',
    productId: '',
  })

  return (
    <Wrapper>
      <Nav />
      <SummaryFinalizedPlace
        placeDetails={products.place}
        totalItemsPrice={totalItemsPrice}
      />

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
                    onClick={() =>
                      handleUpdate(
                        id!,
                        setInputValue,
                        setUpdate,
                        products,
                        update,
                      )
                    }
                    size='small'
                    variant='contained'
                  >
                    Remove Amount Of
                  </Button>
                  {isPicked && (
                    <ValueInput
                      onChange={(e) => handleInput(e, setInputValue)}
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
                        await removeAmountOfProduct(
                          id!,
                          params.id!,
                          inputValue,
                          setMessage,
                        )
                        setStatus(!status)
                        handleOpen()
                      }}
                      size='small'
                      variant='contained'
                    >
                      Confirm
                    </Button>
                  ) : (
                    <Button
                      onClick={async () => {
                        setConfirmDelete(!confirmDelete)
                        setDeleteDetails({
                          placeId: params.id!,
                          productId: id!,
                        })
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
      <ResultModal
        setConfirmDelete={setConfirmDelete}
        message={message}
        handleClose={handleClose}
        open={open}
      />
      <ConfirmModal
        setConfirmDelete={setConfirmDelete}
        confirmDelete={confirmDelete}
        deleteDetails={deleteDetails}
        handleOpen={handleOpen}
        setMessage={setMessage}
        setStatus={setStatus}
        status={status}
      />
    </Wrapper>
  )
}
