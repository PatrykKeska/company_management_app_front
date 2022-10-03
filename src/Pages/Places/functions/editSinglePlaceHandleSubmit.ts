import { FormEvent } from 'react'
import { updateSinglePlace } from './updateSinglePlace'
import { restorePlace } from './restorePlace'
import { makePlaceUnAvailable } from './makePlaceUnAvilable'
import { deletePlace } from './deletePlace'
import { SinglePlaceTypes } from '../../../types/Places.types'
import { CallBackFunction } from '../../../types/CallBackFunction'

export const editSinglePlaceHandleSubmit = async (
  e: FormEvent,
  toDelete: boolean,
  unavailable: boolean,
  restore: boolean,
  placeDetails: SinglePlaceTypes,
  setResponseMessage: CallBackFunction,
  id: string,
  handleOpen: CallBackFunction,
  setPlaceDetails: CallBackFunction,
) => {
  e.preventDefault()

  try {
    if (!toDelete && !unavailable && !restore) {
      const resMessage = await updateSinglePlace(placeDetails)
      setResponseMessage(resMessage)
    }
    if (restore && id) {
      const resMessage = await restorePlace(id)
      setResponseMessage(resMessage)
    } else if (unavailable && id) {
      const resMessage = await makePlaceUnAvailable(id)
      setResponseMessage(resMessage)
    } else if (toDelete) {
      const resMessage = await deletePlace(id!)
      setResponseMessage(resMessage)
    }
  } finally {
    handleOpen()

    setPlaceDetails({
      name: '',
      city: '',
      street: '',
      buildNumber: '',
      file: undefined,
    })
  }
}
