import { CallBackFunction } from '../../../types/CallBackFunction'

export const editSingleItemHandleToUpdateImg = (
  setToUpdateImg: CallBackFunction,
  setToDelete: CallBackFunction,
  setUnavailable: CallBackFunction,
  setPreview: CallBackFunction,
  toUpdateImg: boolean,
) => {
  setToUpdateImg(!toUpdateImg)
  setToDelete(false)
  setUnavailable(false)
  setPreview({ src: '' })
}
