import "./Nav.css";
import { Typography } from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div> 
      <div className='navbar'>
      <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog App
          </Typography>
          <Button color="error" variant='contained'><Link className='linkstyle' to={"/"}>Home</Link></Button> &nbsp;&nbsp;
          <Button color="success" variant='contained'><Link className='linkstyle' to={"/addblog"}>Add Blog</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    </div>
  )
}

export default Navbar