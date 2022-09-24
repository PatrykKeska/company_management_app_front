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
import { apiURL, fileApi } from '../../../utils/api'
import { FileInput } from '../../../Components/Input/FileInput'

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
  const [loading, setLoading] = useState(false)
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
    console.log(formValues.file)
    setLoading(true)
    const formData = new FormData()
    formData.append('file', formValues.file!)
    formData.append('name', formValues.name)
    formData.append('price', String(formValues.price))
    formData.append('amount', String(formValues.amount))
    formData.append('dateOfBuy', formValues.dateOfBuy)
    try {
      await fetch(`${apiURL}/products/add-new`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      })
    } finally {
      setLoading(false)
      setFormValues({
        name: '',
        price: 0,
        amount: 0,
        dateOfBuy: '',
        file: undefined,
      })
      navigate('/storage')
    }
  }

  return loading ? (
    <SendingPopUp />
  ) : (
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
    </StyledForm>
  )
}
