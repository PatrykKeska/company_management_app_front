import { CallBackFunction } from '../../../types/CallBackFunction'

export const EditSinglePlaceHandleToDelete = (
  setImageStatus: CallBackFunction,
  setRestore: CallBackFunction,
  setUnavailable: CallBackFunction,
  setToDelete: CallBackFunction,
  toDelete: boolean,
) => {
  setImageStatus(false)
  setRestore(false)
  setUnavailable(false)
  setToDelete(!toDelete)
}
