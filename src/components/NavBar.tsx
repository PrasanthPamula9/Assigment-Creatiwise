// src/components/Navbar.jsx
// import Button from "./Button";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import Logo from '../assets/logo.png'
const pages = ['Home','Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// import { Button } from "@mui/material";

import "../Styles/styles.css"

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [selected,SetSelected]=React.useState<string | null>('home');

    const handleCurrentPage = (index:string) =>{
        console.log(index)
     SetSelected(index)
    //  console.log(selected)
    }
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
//   const handleNavClick = (section:string) : void=> {
//     alert(`Navigating to ${section}`);
//   };

  return (
    <AppBar position="static" style={{
        backgroundColor:'black'
       
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none',alignContent:'center' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          
        

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',alignItems:'center' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <img style={{width:'48',height:'32', marginLeft:"60px"}} src={Logo}></img>
          </Box>
          <Box sx={{
            display :{xs : 'none',md:'block'}
          }}>
          <img style={{width:'48',height:'32', marginLeft:"60px"}} src={Logo}></img>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} ,marginLeft:'20%' }}>
          
            {pages.map((page) =>{
            console.log(selected)
            return (
               
              <Button variant={selected == page ? 'contained' : 'outlined'}
                key={page}
                onClick={()=>handleCurrentPage(page)}
                // onClick={handleCurrentPage(page)}
                sx={{ my: 2, color: selected == page ? 'black' : 'white', display: 'block' ,backgroundColor:selected == page ? 'white' : 'black',marginRight:'5px',borderRadius:30,outlineColor:'black', borderColor:'black',
                '&:hover':{
                 borderColor:'white'
                },
                '&:focus':{
                    outline:'none'
                }

            }}
              >
                {page}
              </Button>
            )
           } 
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button variant='outlined' sx={{
                fontFamily:['Syne','sans-serif'],
                borderColor:'white',
                color:'white',
                
                borderRadius:30,
                '&:hover':{
                    borderColor:'white'
 
                }
            }}>HIRE ME</Button>
            {/* <Tooltip title="Open settings">

            </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // <nav className="navbar">
    //   <div className="navbar-logo">M<span>.</span></div>

    //   <div className="navbar-links">
    //   <Button variant="contained" onClick={() => handleNavClick("Home")}>Home</Button>
    //     {/* <Button text="Home" filled onClick= /> */}
    //     <span onClick={() => handleNavClick("About")}>About</span>
    //     <span onClick={() => handleNavClick("Projects")}>Projects</span>
    //     <span onClick={() => handleNavClick("Contact")}>Contact</span>
    //   </div>

    //   {/* <Button text="HIRE ME" filled={false} onClick={() => alert("Redirect to Hire Me")} /> */}
    // </nav>
  );
}

// const styleSheet={
//     buttonDefault:{
        
//     }
// }
