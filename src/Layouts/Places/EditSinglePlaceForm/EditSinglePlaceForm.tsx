import React, { useContext, useState } from 'react'
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
import { EditSinglePlaceHandleToDelete } from '../../../Pages/Places/functions/EditSinglePlaceHandleToDelete'
import { editSinglePlaceSetImgStatus } from '../../../Pages/Places/functions/editSinglePlaceSetImgStatus'
import { editSinglePlaceSetRestoreStatus } from '../../../Pages/Places/functions/editSinglePlaceSetRestoreStatus'
import { editSinglePlaceSetUnavailableStatus } from '../../../Pages/Places/functions/editSinglePlaceSetUnavailableStatus'
import { editSinglePlaceHandleFile } from '../../../Pages/Places/functions/editSinglePlaceHandleFile'
import { editSinglePlaceHandleSubmit } from '../../../Pages/Places/functions/editSinglePlaceHandleSubmit'
import { ResponseModal } from '../../../MaterialUIComponents/ResponseModal'
import { getDefaultImages } from '../../../utils/getDefaultImages'
import { fileApi } from '../../../utils/api'

const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const EditSinglePlaceForm = () => {
  const navigate = useNavigate()
  const [preview, setPreview] = useState({ src: '' })
  const { placeDetails, setPlaceDetails } = useContext(SinglePlaceContext)
  const [imageStatus, setImageStatus] = useState(false)
  const [restore, setRestore] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const [toDelete, setToDelete] = useState(false)
  const [open, setOpen] = React.useState(false)
  const [responseMessage, setResponseMessage] = useState({
    title: '',
    message: '',
  })
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    navigate('/places')
  }
  const { placeStatus, street, city, name, id, buildNumber, img } = placeDetails
  return (
    <StyledForm
      onSubmit={(e) =>
        editSinglePlaceHandleSubmit(
          e,
          toDelete,
          unavailable,
          restore,
          placeDetails,
          setResponseMessage,
          id!,
          handleOpen,
          setPlaceDetails,
        )
      }
    >
      <Img
        width={'200px'}
        height={'150px'}
        src={preview.src ? preview.src : `${fileApi}${placeDetails.img}`}
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
          <Checkbox
            checked={imageStatus}
            onChange={() =>
              editSinglePlaceSetImgStatus(
                setToDelete,
                setUnavailable,
                setRestore,
                setImageStatus,
                imageStatus,
              )
            }
          />
        </StyledLabel>
      ) : null}

      {imageStatus ? (
        <StyledLabel>
          File
          <FileInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              editSinglePlaceHandleFile(
                e,
                setPlaceDetails,
                placeDetails,
                setPreview,
              )
            }
            name='file'
          />
        </StyledLabel>
      ) : null}

      <StyledLabel row>
        Delete from database
        <Checkbox
          checked={toDelete}
          onChange={() =>
            EditSinglePlaceHandleToDelete(
              setImageStatus,
              setRestore,
              setUnavailable,
              setToDelete,
              toDelete,
            )
          }
        />
      </StyledLabel>
      {placeStatus === 0 ? (
        <StyledLabel row>
          Restore
          <Checkbox
            checked={restore}
            onChange={() =>
              editSinglePlaceSetRestoreStatus(
                setToDelete,
                setUnavailable,
                setRestore,
                setImageStatus,
                restore,
              )
            }
          />
        </StyledLabel>
      ) : (
        <StyledLabel row>
          Make it Unavailable
          <Checkbox
            checked={unavailable}
            onChange={() =>
              editSinglePlaceSetUnavailableStatus(
                setImageStatus,
                setToDelete,
                setRestore,
                setUnavailable,
                unavailable,
              )
            }
          />
        </StyledLabel>
      )}
      <Button small={true}>
        {(toDelete && 'Delete') ||
          (restore && 'Restore') ||
          (unavailable && 'Change Status') ||
          'Update'}
      </Button>
      <ResponseModal
        open={open}
        handleClose={handleClose}
        message={responseMessage}
      />
    </StyledForm>
  )
}
