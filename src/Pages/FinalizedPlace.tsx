import { Wrapper } from '../Components/Wrapper /Wrapper'
import { Nav } from '../Layouts/GeneralUse/Nav/Nav'
import { useParams } from 'react-router-dom'
import { useGetAllProductForThisPlace } from './FInalized/functions /useGetAllProductForThisPlace'
import { Avatar, Box, Button, Modal, Typography } from '@mui/material'
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
import Grid2 from '@mui/material/Unstable_Grid2'
import { materialModalStyle } from '../MaterialUIComponents/theme/materialModalStyle'

export function FinalizedPlace() {
  useAuthCheck()
  const [status, setStatus] = useState(false)
  const [update, setUpdate] = useState(false)
  const [inputValue, setInputValue] = useState(1)
  const [open, setOpen] = React.useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [message, setMessage] = useState({ title: '', message: '' })
  const [deleteDetails, setDeleteDetails] = useState({
    placeId: '',
    productId: '',
  })
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
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
  const { name, img, street, city, buildNumber } = products.place
  return (
    <Wrapper>
      <Nav />
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
            srcSet={img ? `${fileApi}/${img}` : ''}
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
            Total Costs: {totalItemsPrice} $
          </Typography>
        </Grid2>
      </Grid2>
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
      <Modal
        open={open}
        onClose={() => {
          handleClose()
          setConfirmDelete(false)
        }}
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
      <Modal
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          justifyContent='center'
          sx={materialModalStyle}
        >
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
            Are you sure ?
          </Typography>
          <Button
            sx={{ mt: 5 }}
            onClick={async () => {
              await deleteProductFromPlace(
                deleteDetails.placeId,
                deleteDetails.productId,
                setMessage,
              )
              setStatus(!status)
              handleOpen()
            }}
            size='medium'
            variant='contained'
          >
            Confirm Delete
          </Button>
        </Box>
      </Modal>
    </Wrapper>
  )
}
