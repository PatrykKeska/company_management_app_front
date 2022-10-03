import { CallBackFunction } from '../../../types/CallBackFunction'

export const editSingleItemHandleToDelete = (
  setRestore: CallBackFunction,
  setToUpdateImg: CallBackFunction,
  setUnavailable: CallBackFunction,
  setToDelete: CallBackFunction,
  toDelete: boolean,
) => {
  setRestore(false)
  setToUpdateImg(false)
  setUnavailable(false)
  setToDelete(!toDelete)
}
