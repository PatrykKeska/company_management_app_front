import React, { useContext, useState } from 'react'
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
import { editSingleItemHandleToUpdateImg } from '../../../Pages/Products/functions/editSingleItemHandleToUpdateImg'
import { editSingleItemHandleToDelete } from '../../../Pages/Products/functions/editSingleItemHandleToDelete'
import { ResponseModal } from '../../../MaterialUIComponents/ResponseModal'
import { editSingleItemFormHandleFile } from '../../../Pages/Products/functions/editSingleItemFormHandleFile'
import { editSingleItemSetRestore } from '../../../Pages/Products/functions/editSingleItemSetRestore'
import { editSingleItemSetUnavailable } from '../../../Pages/Products/functions/editSingleItemSetUnavailable'
import { editSingleItemHandleSubmit } from '../../../Pages/Products/functions/editSingleItemHandleSubmit'
import { getProductImg } from '../../../utils/getProductImg'

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
  const [responseMessage, setResponseMessage] = useState({
    title: '',
    message: '',
  })
  const [toDelete, setToDelete] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const [restore, setRestore] = useState(false)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    navigate('/storage')
  }
  const { id, amount, name, dateOfBuy, price, productStatus } = itemDetails
  const productImage = getProductImg(id!)
  return (
    <StyledForm
      onSubmit={(e) =>
        editSingleItemHandleSubmit(
          e,
          toDelete,
          restore,
          unavailable,
          itemDetails,
          setResponseMessage,
          amount,
          id!,
          handleOpen,
          setItemDetails,
        )
      }
    >
      <Img
        width={'200px'}
        height={'150px'}
        src={preview.src ? preview.src : productImage}
      />
      <StyledLabel>
        Name:
        <Input
          disabled={toDelete || unavailable || restore || productStatus === 0}
          type={'text'}
          name={'name'}
          value={name}
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
          value={price}
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
          value={amount}
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
          value={dateOfBuy}
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
          <Checkbox
            checked={toUpdateImg}
            onChange={() =>
              editSingleItemHandleToUpdateImg(
                setToUpdateImg,
                setToDelete,
                setUnavailable,
                setPreview,
                toUpdateImg,
              )
            }
          />
        </StyledLabel>
      ) : null}

      {toUpdateImg ? (
        <>
          <FileInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              editSingleItemFormHandleFile(
                e,
                setItemDetails,
                setPreview,
                itemDetails,
              )
            }
            name='file'
          />
        </>
      ) : null}

      <StyledLabel row>
        Delete from database
        <Checkbox
          checked={toDelete}
          onChange={() =>
            editSingleItemHandleToDelete(
              setRestore,
              setToUpdateImg,
              setUnavailable,
              setToDelete,
              toDelete,
            )
          }
        />
      </StyledLabel>

      {productStatus === 0 ? (
        <StyledLabel row>
          Restore
          <Checkbox
            checked={restore}
            onChange={() =>
              editSingleItemSetRestore(
                setToDelete,
                setToUpdateImg,
                setRestore,
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
              editSingleItemSetUnavailable(
                setToDelete,
                setToUpdateImg,
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
