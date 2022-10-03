import { Box, Modal, Typography } from '@mui/material'
import { materialModalStyle } from './theme/materialModalStyle'
import * as React from 'react'
import { CallBackFunction } from '../types/CallBackFunction'
interface Props {
  open: boolean
  handleClose: CallBackFunction
  message: { title: string; message: string }
}
export const ResponseModal = (props: Props) => {
  const { open, handleClose, message } = props

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={materialModalStyle}>
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
          {message.title}
        </Typography>
        <Typography
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          id='modal-modal-description'
          sx={{ mt: 2 }}
        >
          {message.message}
        </Typography>
      </Box>
    </Modal>
  )
}
