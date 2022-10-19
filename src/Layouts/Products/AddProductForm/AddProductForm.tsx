import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../../Components/Input/Input'
import { Button } from '../../../Components/Button /Button'
import { Img } from '../../../Components/Img/Img'
import { SingleProductTypes } from '../../../types/Product.types'
import { InputOnChange } from '../../../types/common.types'
import { StyledLabel } from '../../../Components/StyledLabel/StyledLabel'
import { useNavigate } from 'react-router-dom'
import { Checkbox } from '../../../Components/Input/Checkbox'
import { FileInput } from '../../../Components/Input/FileInput'
import { addProductFormHandleFile } from '../../../Pages/Products/functions/AddProductFormHandleFile'
import { addProductFormAddNewProduct } from '../../../Pages/Products/functions/AddProductFormAddNewProduct'
import { ResponseModal } from '../../../MaterialUIComponents/ResponseModal'
import { ApiList } from '../../../utils/api'
const {defaultProductImage} = ApiList
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
  const [open, setOpen] = React.useState(false)
  const [responseMessage, setResponseMessage] = useState({
    title: '',
    message: '',
  })
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

  return (
    <StyledForm
      onSubmit={(e) =>
        addProductFormAddNewProduct(
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
        src={preview.src ? preview.src : `${defaultProductImage}`}
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
          <FileInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              addProductFormHandleFile(e, setFormValues, formValues, setPreview)
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
