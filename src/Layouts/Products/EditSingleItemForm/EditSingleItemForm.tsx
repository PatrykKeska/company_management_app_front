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
  const [toDelete, setToDelete] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const [restore, setRestore] = useState(false)
  const [loading, setLoading] = useState(false)
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
      if (!toDelete) {
        await updateProduct(itemDetails)
      }
      if (restore && amount > 0) {
        await restoreProduct(itemDetails.id!, itemDetails.amount)
      } else if (unavailable && id) {
        await makeProductUnavailable(id)
      } else {
        await deleteProduct(itemDetails.id!)
      }
    } finally {
      setLoading(false)
      navigate('/storage')
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
    </StyledForm>
  )
}
