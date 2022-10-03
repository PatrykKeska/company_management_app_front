import { CallBackFunction } from '../../../types/CallBackFunction'

export const editSingleItemSetRestore = (
  setToDelete: CallBackFunction,
  setToUpdateImg: CallBackFunction,
  setRestore: CallBackFunction,
  restore: boolean,
) => {
  setToDelete(false)
  setToUpdateImg(false)
  setRestore(!restore)
}
