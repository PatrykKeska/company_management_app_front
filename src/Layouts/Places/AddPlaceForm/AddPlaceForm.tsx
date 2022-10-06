import React, { useState } from 'react'
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
import { useAuthCheck } from '../../../utils/useAuthCheck'
import { ResponseModal } from '../../../MaterialUIComponents/ResponseModal'
import { addPlaceHandleFile } from '../../../Pages/Places/functions/AddPlaceHandleFile'
import { AddPlaceHandleSubmit } from '../../../Pages/Places/functions/AddPlaceHandleSubmit'
import { getDefaultImages } from '../../../utils/getDefaultImages'

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
  const [changeImg, toSetChangeImg] = useState(false)
  const [preview, setPreview] = useState({ src: '' })
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    navigate('/places')
  }
  const [responseMessage, setResponseMessage] = useState({
    title: '',
    message: '',
  })
  const [formValues, setFormValues] = useState({
    name: '',
    city: '',
    street: '',
    buildNumber: '',
    img: '',
    file: File,
  } as unknown as SinglePlaceTypes)
  const defaultPlaceImage = getDefaultImages('place')
  return (
    <StyledForm
      onSubmit={(e) =>
        AddPlaceHandleSubmit(
          e,
          formValues,
          setResponseMessage,
          handleOpen,
          setFormValues,
        )
      }
    >
      <Img
        width={'200px'}
        height={'150px'}
        src={preview.src ? preview.src : defaultPlaceImage}
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
          <FileInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              addPlaceHandleFile(e, setFormValues, formValues, setPreview)
            }
            name='file'
          />
        </StyledLabel>
      ) : null}

      <Button>Add</Button>
      <ResponseModal
        open={open}
        handleClose={handleClose}
        message={responseMessage}
      />
    </StyledForm>
  )
}
