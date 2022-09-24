import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../../Components/Input/Input'
import { Button } from '../../../Components/Button /Button'
import { SinglePlaceTypes } from '../../../types/Places.types'
import { InputOnChange } from '../../../types/common.types'
import { Checkbox } from '../../../Components/Input/Checkbox'
import { useNavigate } from 'react-router-dom'
import { StyledLabel } from '../../../Components/StyledLabel/StyledLabel'
import { apiURL, fileApi } from '../../../utils/api'
import { Img } from '../../../Components/Img/Img'
import { FileInput } from '../../../Components/Input/FileInput'

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
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
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
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { name, city, street, file, buildNumber } = formValues
    const formData = new FormData()
    formData.append('name', name)
    formData.append('city', city)
    formData.append('street', street)
    formData.append('buildNumber', buildNumber)
    formData.append('file', file!)
    try {
      ;(async () => {
        await fetch(`${apiURL}/places/add-new`, {
          method: 'POST',
          credentials: 'include',
          body: formData,
        })
      })()
    } finally {
      setLoading(false)
      setFormValues({
        name: '',
        city: '',
        street: '',
        buildNumber: '',
        file: undefined,
      })
    }
    navigate('/places')
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
    </StyledForm>
  )
}
