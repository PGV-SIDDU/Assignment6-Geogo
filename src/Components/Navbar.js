import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Search from "./Search";
import { useState } from 'react';
import Sidebar from './sidebar';
import SecondNav from './SecondNav';
import "./Navbar.css";

export default function ButtonAppBar() {
    const[buttonclick,setbuttonclick]=useState(false);
    const IconButtonHandler=()=>{
        setbuttonclick(!buttonclick);
    }
  return (
    <Box sx={{height:'121px'}}>
      <AppBar position="fixed" sx={{backgroundColor:'rgba(138,137,142,.5);',color:'black',zIndex:'1101'}}>
        <Toolbar className="nav">
        {!buttonclick && <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={IconButtonHandler}
          >
            <MenuIcon />
          </IconButton>}
          {buttonclick && <Sidebar/>}
          <Typography variant="h6" component="div" sx={{width:'50px',color:'red'}}>
            Gaana
          </Typography>
          <Search/>
          <div className='Buttons'>
              <button className="RedButton">Go Ad free <span>NEW</span></button>
              <button className="RedButton">Get Gaana Plus</button>
          </div>
          <div className='Iconbuttons'>
              <a href="/" className='icons'>Icon1</a>
              <a href='/' className='icons'>Icon2</a>
          </div>
          <Button color='inherit'>Login / Sign Up</Button>
        </Toolbar>
      </AppBar>
      <AppBar postion ="fixed" sx={{backgroundColor:"white"}}>
          <SecondNav></SecondNav>
      </AppBar>
    </Box>
  );
}
