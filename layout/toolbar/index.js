import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'

export default function DefaultToolbar(props) {
  return (
    <Box sx={{ flexGrow: 1,}} >
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Image src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png" height="25" width="140" alt="futurelabs" />
          </Box>
          {/* <Stack sx={{ flexGrow: 0.1, height: "23px", width:"2px", color: "rgb(139, 139, 138)" }}></Stack> */}
          {/* <Divider variant="middle" sx={{ height: "23px", width:"10px", color: "white" }} orientation="vertical" /> */}
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            onClick={props.toggleDrawer} sx={{ mr: 2 , display: { xs: 'block', md: 'block' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}