import React, { ChangeEventHandler, FormEventHandler } from 'react'
import { StyledLabel } from '../../Components/StyledLabel/StyledLabel'
import { StyledInput } from '../../Components/Input/Input'
import { InventoryButtonSubbmit } from '../../Components/InventoryButton/InventoryButtonSubbmit'
import { InventoryForm } from '../../Components/InventoryForm/InventoryForm'

interface Props {
  onSubmit: FormEventHandler
  onChange: ChangeEventHandler
  amount: number
}

export const InventoryFormLayout = (props: Props) => {
  const { onChange, onSubmit, amount } = props

  return (
    <>
      <InventoryForm onSubmit={onSubmit}>
        <StyledLabel>
          Amount:
          <StyledInput
            min={1}
            max={amount}
            onChange={onChange}
            value={amount}
            type={'number'}
          />
          <InventoryButtonSubbmit type={'submit'} big>
            save
          </InventoryButtonSubbmit>
        </StyledLabel>
      </InventoryForm>
    </>
  )
}
