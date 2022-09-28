import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../../Components/Input/Input'
import { Button } from '../../../Components/Button /Button'
import { Img } from '../../../Components/Img/Img'
import { SendingPopUp } from '../../../Components/SendingPopUP/SendingPopUp'
import { SingleProductTypes } from '../../../types/Product.types'
import { InputOnChange } from '../../../types/common.types'
import { StyledLabel } from '../../../Components/StyledLabel/StyledLabel'
import { useNavigate } from 'react-router-dom'
import { Checkbox } from '../../../Components/Input/Checkbox'
import { fileApi } from '../../../utils/api'
import { FileInput } from '../../../Components/Input/FileInput'
import { createNewProduct } from '../../../Pages/Places/functions/createNewProduct'
import { Box, Modal, Typography } from '@mui/material'
import { materialModalStyle } from '../../../Pages/Inventory/InventoryPage'

const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const AddProductForm = () => {
  const navigate = useNavigate()
  const [changeImg, toSetChangeImg] = useState(false)
  const [preview, setPreview] = useState({ src: '' })
  const [responseMessage, setResponseMessage] = useState({
    title: '',
    message: '',
  })
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    navigate('/storage')
  }
  const [formValues, setFormValues] = useState({
    name: '',
    price: 0,
    amount: 0,
    dateOfBuy: '',
    file: null,
  } as unknown as SingleProductTypes)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, file: e.target.files![0] })
    setPreview({ src: URL.createObjectURL(e.target.files![0]) })
  }

  const addNewProduct = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const resMessage = await createNewProduct(formValues)
      setResponseMessage(resMessage)
    } finally {
      handleOpen()
      setFormValues({
        name: '',
        price: 0,
        amount: 0,
        dateOfBuy: '',
        file: undefined,
      })
    }
  }

  return (
    <StyledForm onSubmit={addNewProduct}>
      <Img
        width={'200px'}
        height={'150px'}
        src={preview.src ? preview.src : `${fileApi}default-product-image.jpeg`}
      />

      <StyledLabel htmlFor='name'>
        Name:
        <Input
          onChange={(e: InputOnChange) =>
            setFormValues({
              ...formValues,
              name: e.target.value,
            })
          }
          value={formValues.name}
          name={'name'}
          type={'text'}
        />
      </StyledLabel>

      <StyledLabel>
        Price:
        <Input
          onChange={(e: InputOnChange) =>
            setFormValues({
              ...formValues,
              price: Number(e.target.value),
            })
          }
          value={formValues.price}
          name={'price'}
          type={'number'}
        />
      </StyledLabel>

      <StyledLabel>
        Amount:
        <Input
          onChange={(e: InputOnChange) =>
            setFormValues({
              ...formValues,
              amount: Number(e.target.value),
            })
          }
          value={formValues.amount}
          name={'pieces'}
          type={'number'}
        />
      </StyledLabel>

      <StyledLabel>
        Date of buy:
        <Input
          onChange={(e: InputOnChange) =>
            setFormValues({
              ...formValues,
              dateOfBuy: e.target.value,
            })
          }
          value={formValues.dateOfBuy}
          name={'date'}
          type={'date'}
        />
      </StyledLabel>
      <StyledLabel row>
        Change default image
        <Checkbox
          checked={changeImg}
          onChange={() => toSetChangeImg(!changeImg)}
        />
      </StyledLabel>

      {changeImg ? (
        <StyledLabel>
          File
          <FileInput onChange={handleFile} name='file' />
        </StyledLabel>
      ) : null}
      <Button>Add</Button>
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
