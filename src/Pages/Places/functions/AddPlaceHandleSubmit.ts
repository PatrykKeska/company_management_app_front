import { FormEvent } from 'react'
import { createNewPlace } from '../../Products/functions/createNewPlace'
import { SinglePlaceTypes } from '../../../types/Places.types'
import { CallBackFunction } from '../../../types/CallBackFunction'

export const AddPlaceHandleSubmit = async (
  e: FormEvent,
  formValues: SinglePlaceTypes,
  setResponseMessage: CallBackFunction,
  handleOpen: CallBackFunction,
  setFormValues: CallBackFunction,
) => {
  e.preventDefault()
  try {
    const resMessage = await createNewPlace(formValues)
    setResponseMessage(resMessage)
  } finally {
    handleOpen()
    setFormValues({
      name: '',
      city: '',
      street: '',
      buildNumber: '',
      file: undefined,
    })
  }
}
