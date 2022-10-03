import { Box, Button, Modal, Typography } from '@mui/material'
import { materialModalStyle } from './theme/materialModalStyle'
import { deleteProductFromPlace } from '../Pages/FInalized/functions /DeleteProductFromPlace'
import * as React from 'react'
import { CallBackFunction } from '../types/CallBackFunction'
interface Props {
  confirmDelete: boolean
  setConfirmDelete: CallBackFunction
  deleteDetails: { placeId: string; productId: string }
  setStatus: CallBackFunction
  setMessage: CallBackFunction
  status: boolean
  handleOpen: CallBackFunction
}
export const ConfirmModal = (props: Props) => {
  const {
    setConfirmDelete,
    confirmDelete,
    deleteDetails,
    setMessage,
    status,
    setStatus,
    handleOpen,
  } = props
  return (
    <Modal
      open={confirmDelete}
      onClose={() => setConfirmDelete(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        justifyContent='center'
        sx={materialModalStyle}
      >
        <Typography
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          id='modal-modal-title'
          variant='h6'
          component='h2'
        >
          Are you sure ?
        </Typography>
        <Button
          sx={{ mt: 5 }}
          onClick={async () => {
            await deleteProductFromPlace(
              deleteDetails.placeId,
              deleteDetails.productId,
              setMessage,
            )
            setStatus(!status)
            handleOpen()
          }}
          size='medium'
          variant='contained'
        >
          Confirm Delete
        </Button>
      </Box>
    </Modal>
  )
}
