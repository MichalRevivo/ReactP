 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
// import { ListItem, ListItemButton, ListItemText } from '@mui/material';

const drawerWidth = 240;
const navItems = ['HomePage', 'About', 'Contact'];

export const Nav=()=>{
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (<>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar style={{backgroundColor:'black',height:"150px"}}>
      

        <Button variant="outlined" style={{ borderColor:'rgb(101, 86, 29)',marginRight:"15px"}}><Link to="/HomePage" style={{color:"rgb(101, 86, 29)"}}>HomePage</Link></Button>
        <Button variant="outlined"style={{ borderColor:'rgb(101, 86, 29)',marginRight:"15px"}}><Link to="About" style={{color:"rgb(101, 86, 29)"}}>About</Link></Button>
        <Button variant="outlined"style={{ borderColor:'rgb(101, 86, 29)',marginRight:"15px"}}><Link to="/"  style={{color:"rgb(101, 86, 29)"}}>contact</Link></Button>


        </Toolbar>
<div style={{marginTop:"0px" ,height:"4px",backgroundColor:"rgb(101, 86, 29)"}}></div>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
</>
  );




}