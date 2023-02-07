import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
  return (
    <AppBar position='static'>
    <Toolbar>
    <Grid container>
    <Grid item>
    <InputBase/>
    </Grid>
    <Grid item sm>
    </Grid>

    <Grid item >
    <IconButton>
    <Badge badgeContent={4} color='secondary'>
    <NotificationsIcon/>
    </Badge>
    </IconButton>
    <IconButton>
    <Badge badgeContent={3} color='primary'>
    <ChatBubbleOutlineIcon/>
    </Badge>
    </IconButton>
    <IconButton>
    <LogoutIcon/>
    </IconButton>
    
    </Grid>
    
    
    </Grid>
    
    </Toolbar>
    </AppBar> 
  )
}
