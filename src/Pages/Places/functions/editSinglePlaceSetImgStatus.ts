import { CallBackFunction } from '../../../types/CallBackFunction'

export const editSinglePlaceSetImgStatus = (
  setToDelete: CallBackFunction,
  setUnavailable: CallBackFunction,
  setRestore: CallBackFunction,
  setImageStatus: CallBackFunction,
  imageStatus: boolean,
) => {
  setToDelete(false)
  setUnavailable(false)
  setRestore(false)
  setImageStatus(!imageStatus)
}
