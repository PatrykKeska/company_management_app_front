import { Box, Modal, Typography } from '@mui/material'
import { materialModalStyle } from './theme/materialModalStyle'
import * as React from 'react'
import { CallBackFunction } from '../types/CallBackFunction'
import { useNavigate } from 'react-router-dom'
import { BackendResponseType } from '../Pages/FInalized/functions /backendResponseType'

interface Props {
  handleClose: CallBackFunction
  setConfirmDelete: CallBackFunction
  message: BackendResponseType
  open: boolean
}
export const ResultModal = (props: Props) => {
  const { handleClose, setConfirmDelete, message, open } = props
  const navigate = useNavigate()
  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose()
        setConfirmDelete(false)
        if (message.redirect) {
          navigate('/finalized')
        }
      }}
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
