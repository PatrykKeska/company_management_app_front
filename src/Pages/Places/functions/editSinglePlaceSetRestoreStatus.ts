import { CallBackFunction } from '../../../types/CallBackFunction'

export const editSinglePlaceSetRestoreStatus = (
  setToDelete: CallBackFunction,
  setUnavailable: CallBackFunction,
  setRestore: CallBackFunction,
  setImageStatus: CallBackFunction,
  restore: boolean,
) => {
  setImageStatus(false)
  setToDelete(false)
  setUnavailable(false)
  setRestore(!restore)
}
