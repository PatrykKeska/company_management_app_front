import { ChangeEvent } from 'react'
import { CallBackFunction } from '../../../types/CallBackFunction'

export const handleInput = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setInputValue: CallBackFunction,
) => {
  setInputValue(Number(e.target.value))
}
