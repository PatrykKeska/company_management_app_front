import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../../Components/Input/Input'
import { Button } from '../../../Components/Button /Button'
import { SinglePlaceTypes } from '../../../types/Places.types'
import { InputOnChange } from '../../../types/common.types'
import { Checkbox } from '../../../Components/Input/Checkbox'
import { useNavigate } from 'react-router-dom'
import { StyledLabel } from '../../../Components/StyledLabel/StyledLabel'
import { fileApi } from '../../../utils/api'
import { Img } from '../../../Components/Img/Img'
import { FileInput } from '../../../Components/Input/FileInput'
import { Box, Modal, Typography } from '@mui/material'
import { createNewPlace } from '../../../Pages/Products/functions/createNewPlace'
import { materialModalStyle } from '../../../MaterialUIComponents/theme/materialModalStyle'
import { useAuthCheck } from '../../../utils/useAuthCheck'

interface Props {
  row?: boolean
}

const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const AddPlaceForm = () => {
  useAuthCheck()
  const navigate = useNavigate()
  const [responseMessage, setResponseMessage] = useState({
    title: '',
    message: '',
  })
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    navigate('/places')
  }
  const [changeImg, toSetChangeImg] = useState(false)
  const [preview, setPreview] = useState({ src: '' })
  const [formValues, setFormValues] = useState({
    name: '',
    city: '',
    street: '',
    buildNumber: '',
    img: '',
    file: File,
  } as unknown as SinglePlaceTypes)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, file: e.target.files![0] })
    setPreview({ src: URL.createObjectURL(e.target.files![0]) })
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const resMessage = await createNewPlace(formValues)
      setResponseMessage(resMessage)
    } finally {
      handleOpen()
      setFormValues({
        name: '',
        city: '',
        street: '',
        buildNumber: '',
        file: undefined,
      })
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Img
        width={'200px'}
        height={'150px'}
        src={preview.src ? preview.src : `${fileApi}default-office-image.jpeg`}
      />

      <StyledLabel>
        Name:
        <Input
          type={'text'}
          name={'name'}
          value={formValues.name}
          onChange={(event: InputOnChange) =>
            setFormValues({
              ...formValues,
              name: event.target.value,
            })
          }
        />
      </StyledLabel>

      <StyledLabel>
        City:
        <Input
          type={'text'}
          name={'city'}
          value={formValues.city}
          onChange={(event: InputOnChange) =>
            setFormValues({
              ...formValues,
              city: event.target.value,
            })
          }
        />
      </StyledLabel>

      <StyledLabel>
        Street:
        <Input
          type={'text'}
          name={'street'}
          value={formValues.street}
          onChange={(event: InputOnChange) =>
            setFormValues({
              ...formValues,
              street: event.target.value,
            })
          }
        />
      </StyledLabel>

      <StyledLabel>
        Number of the building:
        <Input
          type={'text'}
          name={'buildNumber'}
          value={formValues.buildNumber}
          onChange={(event: InputOnChange) =>
            setFormValues({
              ...formValues,
              buildNumber: event.target.value,
            })
          }
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
