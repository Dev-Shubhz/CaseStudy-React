import { makeStyles,withStyles } from '@mui/styles'
import React from 'react'
const style={
SideMenu:{
    display:"flex",
    flexDirection:"column",
    position:"absolute",
    left:'0px',
    width:"320px",
    height:'100%',
    backgroundColor:'#1a237e',
}
}


const Sidemenu=(props)=> {
   const {classes}=props;
  return (
    <div className={classes.SideMenu}>
    
    
      
    </div>
  )
}
export default withStyles(style)(Sidemenu);
