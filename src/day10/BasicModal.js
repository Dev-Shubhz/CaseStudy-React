import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React, { useState } from 'react'


function BasicModal(props) {
    const {children,openPopup, setOpenPopup} = props
  return (
    <Dialog open={openPopup} maxWidth='md'>
    <DialogTitle>
    <div style={{display:"flex"}}>
    <Typography variant='h5' fontWeight={"bolder"}>
    Registration Form
    </Typography>
    <Button onClick={()=>setOpenPopup(false)} variant="contained" color="error" style={{marginLeft:"auto"}}>X</Button>
    </div>
    </DialogTitle>
    <DialogContent dividers>{children}
    </DialogContent>
    </Dialog>
  )
}

export default BasicModal
