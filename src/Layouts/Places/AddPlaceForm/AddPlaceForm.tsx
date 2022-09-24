import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../../Components/Input/Input'
import { Button } from '../../../Components/Button /Button'
import { Img } from '../../../Components/Img/Img'
import office from '../../../assets /img/office.jpeg'
import { SinglePlaceTypes } from '../../../types/Places.types'
import { InputOnChange } from '../../../types/common.types'
import { Checkbox } from '../../../Components/Input/Checkbox'
import { useNavigate } from 'react-router-dom'
import { StyledLabel } from '../../../Components/StyledLabel/StyledLabel'
import { apiURL } from '../../../utils/api'

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
  const [changeImg, toSetChangeImg] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    city: '',
    street: '',
    buildNumber: '',
    img: '',
  } as SinglePlaceTypes)

  // @TODO create a loading component !
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      ;(async () => {
        if (formValues.img === '') {
          formValues.img = office
        }
        await fetch(`${apiURL}/add-new-place`, {
          method: 'POST',
          body: JSON.stringify({
            ...formValues,
          }),
          headers: { 'Content-Type': 'application/json' },
        })
      })()
    } finally {
      setLoading(false)
      setFormValues({
        name: '',
        city: '',
        street: '',
        buildNumber: '',
        img: '',
      })
      navigate('/places')
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {formValues.img === '' ? (
        <Img width={'200px'} height={'120px'} src={office} />
      ) : (
        <Img width={'200px'} height={'120px'} src={formValues.img} />
      )}

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
          Link to your image
          <Input
            onChange={(e: InputOnChange) =>
              setFormValues({
                ...formValues,
                img: e.target.value,
              })
            }
            value={formValues.img}
            name={'img'}
            type={'string'}
          />
        </StyledLabel>
      ) : null}

      <Button>Add</Button>
    </StyledForm>
  )
}
