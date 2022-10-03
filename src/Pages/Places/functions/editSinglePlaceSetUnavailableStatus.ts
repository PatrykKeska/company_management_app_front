import { CallBackFunction } from '../../../types/CallBackFunction'

export const editSinglePlaceSetUnavailableStatus = (
  setImageStatus: CallBackFunction,
  setToDelete: CallBackFunction,
  setRestore: CallBackFunction,
  setUnavailable: CallBackFunction,
  unavailable: boolean,
) => {
  setImageStatus(false)
  setToDelete(false)
  setRestore(false)
  setUnavailable(!unavailable)
}
