import React, { FormEvent, useContext, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../../Components/Input/Input'
import { InputOnChange } from '../../../types/common.types'
import { Button } from '../../../Components/Button /Button'
import { Img } from '../../../Components/Img/Img'
import { Checkbox } from '../../../Components/Input/Checkbox'
import { useNavigate } from 'react-router-dom'
import { StyledLabel } from '../../../Components/StyledLabel/StyledLabel'
import { SingleItemContext } from '../../../context/SingleItem/SingleItem.context'
import { FileInput } from '../../../Components/Input/FileInput'
import { updateProduct } from '../../../Pages/Products/functions/updateProduct'
import { deleteProduct } from '../../../Pages/Products/functions/deleteProduct'
import { restoreProduct } from '../../../Pages/Products/functions/restoreProduct'
import { makeProductUnavailable } from '../../../Pages/Products/functions/makeProductUnavailable'
import { Box, Modal, Typography } from '@mui/material'
import { materialModalStyle } from '../../../Pages/Inventory/InventoryPage'

const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const EditSingleItemForm = () => {
  const navigate = useNavigate()
  const { itemDetails, setItemDetails } = useContext(SingleItemContext)
  const [preview, setPreview] = useState({ src: '' })
  const [toUpdateImg, setToUpdateImg] = useState(false)
  const [responseMessage, setResponseMessage] = useState({
    title: '',
    message: '',
  })
  const [toDelete, setToDelete] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const [restore, setRestore] = useState(false)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    navigate('/storage')
  }
  const { id, img, amount, file, name, dateOfBuy, price, productStatus } =
    itemDetails
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemDetails({ ...itemDetails, file: e.target.files![0] })
    setPreview({ src: URL.createObjectURL(e.target.files![0]) })
  }
  const handleToUpdateImg = () => {
    setToUpdateImg(!toUpdateImg)
    setToDelete(false)
    setUnavailable(false)
    setPreview({ src: '' })
  }
  const handleToDelete = () => {
    setRestore(false)
    setToUpdateImg(false)
    setUnavailable(false)
    setToDelete(!toDelete)
  }

  const setRestoreStatus = () => {
    setToDelete(false)
    setToUpdateImg(false)
    setRestore(!restore)
  }

  const setUnavailableStatus = () => {
    setToDelete(false)
    setToUpdateImg(false)
    setUnavailable(!unavailable)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (!toDelete && !restore && !unavailable) {
        const resMessage = await updateProduct(itemDetails)
        setResponseMessage(resMessage)
      }
      if (restore && amount > 0) {
        const resMessage = await restoreProduct(
          itemDetails.id!,
          itemDetails.amount,
        )
        setResponseMessage(resMessage)
      } else if (unavailable && id) {
        const resMessage = await makeProductUnavailable(id)
        setResponseMessage(resMessage)
      }
      if (toDelete) {
        const resMessage = await deleteProduct(itemDetails.id!)
        setResponseMessage(resMessage)
      }
    } finally {
      handleOpen()
      setLoading(false)
      setItemDetails({
        name: '',
        price: 0,
        amount: 0,
        dateOfBuy: '',
        img: '',
      })
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Img
        width={'200px'}
        height={'150px'}
        src={preview.src ? preview.src : itemDetails.img}
      />
      <StyledLabel>
        Name:
        <Input
          disabled={toDelete || unavailable || restore || productStatus === 0}
          type={'text'}
          name={'name'}
          value={itemDetails.name}
          onChange={(event: InputOnChange) =>
            setItemDetails({
              ...itemDetails,
              name: event.target.value,
            })
          }
        />
      </StyledLabel>

      <StyledLabel>
        Price:
        <Input
          disabled={toDelete || unavailable || restore || productStatus === 0}
          type={'number'}
          name={'price'}
          value={itemDetails.price}
          onChange={(event: InputOnChange) =>
            setItemDetails({
              ...itemDetails,
              price: Number(event.target.value),
            })
          }
        />
      </StyledLabel>

      <StyledLabel>
        Amount:
        <Input
          disabled={
            toDelete || unavailable || (productStatus === 0 && !restore)
          }
          type={'number'}
          name={'amount'}
          value={itemDetails.amount}
          onChange={(event: InputOnChange) =>
            setItemDetails({
              ...itemDetails,
              amount: Number(event.target.value),
            })
          }
        />
      </StyledLabel>

      <StyledLabel>
        Date Of Buy:
        <Input
          disabled={toDelete || unavailable || restore || productStatus === 0}
          type={'text'}
          name={'dateOfBuy'}
          value={itemDetails.dateOfBuy}
          onChange={(event: InputOnChange) =>
            setItemDetails({
              ...itemDetails,
              dateOfBuy: event.target.value,
            })
          }
        />
      </StyledLabel>
      {productStatus === 1 ? (
        <StyledLabel row>
          Change image
          <Checkbox checked={toUpdateImg} onChange={handleToUpdateImg} />
        </StyledLabel>
      ) : null}

      {toUpdateImg ? (
        <>
          <FileInput onChange={handleFile} name='file' />{' '}
        </>
      ) : null}

      <StyledLabel row>
        Delete from database
        <Checkbox checked={toDelete} onChange={handleToDelete} />
      </StyledLabel>

      {productStatus === 0 ? (
        <StyledLabel row>
          Restore
          <Checkbox checked={restore} onChange={setRestoreStatus} />
        </StyledLabel>
      ) : (
        <StyledLabel row>
          Make it Unavailable
          <Checkbox checked={unavailable} onChange={setUnavailableStatus} />
        </StyledLabel>
      )}

      <Button small={true}>
        {(toDelete && 'Delete') ||
          (restore && 'Restore') ||
          (unavailable && 'Change Status') ||
          'Update'}
      </Button>
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
            {responseMessage.title}
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
            {responseMessage.message}
          </Typography>
        </Box>
      </Modal>
    </StyledForm>
  )
}
