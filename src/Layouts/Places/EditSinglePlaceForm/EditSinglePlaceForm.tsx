import React, { FormEvent, useContext, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../../Components/Input/Input'
import { InputOnChange } from '../../../types/common.types'
import { Button } from '../../../Components/Button /Button'
import { SinglePlaceContext } from '../../../context/SinglePlace/singlePlace.context'
import { Img } from '../../../Components/Img/Img'
import { Checkbox } from '../../../Components/Input/Checkbox'
import { useNavigate } from 'react-router-dom'
import { StyledLabel } from '../../../Components/StyledLabel/StyledLabel'
import { FileInput } from '../../../Components/Input/FileInput'
import { updateSinglePlace } from '../../../Pages/Places/functions/updateSinglePlace'
import { deletePlace } from '../../../Pages/Places/functions/deletePlace'
import { restorePlace } from '../../../Pages/Places/functions/restorePlace'
import { makePlaceUnAvailable } from '../../../Pages/Places/functions/makePlaceUnAvilable'
import { Box, Modal, Typography } from '@mui/material'
import { materialModalStyle } from '../../../MaterialUIComponents/theme/materialModalStyle'

const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const EditSinglePlaceForm = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState({ src: '' })
  const { placeDetails, setPlaceDetails } = useContext(SinglePlaceContext)
  const [imageStatus, setImageStatus] = useState(false)
  const [restore, setRestore] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
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
  const [toDelete, setToDelete] = useState(false)
  const { placeStatus, street, img, city, name, file, id, buildNumber } =
    placeDetails

  const handleToDelete = () => {
    setImageStatus(false)
    setRestore(false)
    setUnavailable(false)
    setToDelete(!toDelete)
  }

  const setImgStatus = () => {
    setToDelete(false)
    setUnavailable(false)
    setRestore(false)
    setImageStatus(!imageStatus)
  }
  const setRestoreStatus = () => {
    setImageStatus(false)
    setToDelete(false)
    setUnavailable(false)
    setRestore(!restore)
  }
  const setUnavailableStatus = () => {
    setImageStatus(false)
    setToDelete(false)
    setRestore(false)
    setUnavailable(!unavailable)
  }
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceDetails({ ...placeDetails, file: e.target.files![0] })
    setPreview({ src: URL.createObjectURL(e.target.files![0]) })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!toDelete && !unavailable && !restore) {
        const resMessage = await updateSinglePlace(placeDetails)
        setResponseMessage(resMessage)
      }
      if (restore && id) {
        const resMessage = await restorePlace(id)
        setResponseMessage(resMessage)
      } else if (unavailable && id) {
        const resMessage = await makePlaceUnAvailable(id)
        setResponseMessage(resMessage)
      } else if (toDelete) {
        const resMessage = await deletePlace(id!)
        setResponseMessage(resMessage)
      }
    } finally {
      handleOpen()
      setLoading(false)

      setPlaceDetails({
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
        src={preview.src ? preview.src : img}
      />
      <StyledLabel>
        Name:
        <Input
          disabled={unavailable || toDelete || restore || placeStatus === 0}
          type={'text'}
          name={'name'}
          value={name}
          onChange={(event: InputOnChange) =>
            setPlaceDetails({
              ...placeDetails,
              name: event.target.value,
            })
          }
        />
      </StyledLabel>

      <StyledLabel>
        City:
        <Input
          disabled={unavailable || toDelete || restore || placeStatus === 0}
          type={'text'}
          name={'city'}
          value={city}
          onChange={(event: InputOnChange) =>
            setPlaceDetails({
              ...placeDetails,
              city: event.target.value,
            })
          }
        />
      </StyledLabel>

      <StyledLabel>
        Street:
        <Input
          disabled={unavailable || toDelete || restore || placeStatus === 0}
          type={'text'}
          name={'street'}
          value={street}
          onChange={(event: InputOnChange) =>
            setPlaceDetails({
              ...placeDetails,
              street: event.target.value,
            })
          }
        />
      </StyledLabel>

      <StyledLabel>
        Number of the building:
        <Input
          disabled={unavailable || toDelete || restore || placeStatus === 0}
          type={'text'}
          name={'buildNumber'}
          value={buildNumber}
          onChange={(event: InputOnChange) =>
            setPlaceDetails({
              ...placeDetails,
              buildNumber: event.target.value,
            })
          }
        />
      </StyledLabel>
      {placeStatus === 1 ? (
        <StyledLabel row>
          Change image
          <Checkbox checked={imageStatus} onChange={setImgStatus} />
        </StyledLabel>
      ) : null}

      {imageStatus ? (
        <StyledLabel>
          File
          <FileInput onChange={handleFile} name='file' />
        </StyledLabel>
      ) : null}

      <StyledLabel row>
        Delete from database
        <Checkbox checked={toDelete} onChange={handleToDelete} />
      </StyledLabel>
      {placeStatus === 0 ? (
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
