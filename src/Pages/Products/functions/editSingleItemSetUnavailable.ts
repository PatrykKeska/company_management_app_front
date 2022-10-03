import { CallBackFunction } from '../../../types/CallBackFunction'

export const editSingleItemSetUnavailable = (
  setToDelete: CallBackFunction,
  setToUpdateImg: CallBackFunction,
  setUnavailable: CallBackFunction,
  unavailable: boolean,
) => {
  setToDelete(false)
  setToUpdateImg(false)
  setUnavailable(!unavailable)
}
