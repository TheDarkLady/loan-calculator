  import React, { useState } from 'react';
  import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Button
  } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import { useNavigate } from 'react-router-dom';

  interface Props {
    window?: () => Window;
  }

  const drawerWidth = 240;
  const navItems = ['Home', 'Exchange Rates (live)', 'About', 'Error Page'];

  const Header: React.FC<Props> = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const handleNavigate = (id:number, item:string) => {
      if(item === "Home"){
        navigate("/")
      }
      else if(item === "Exchange Rates (live)"){
        navigate("/exchange-rates")
      }
      else if(item === "About"){
        navigate("/about")
      }
      else if(item === "Error Page"){
        navigate("/error-page")
      }
    }

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Loan Calculator
        </Typography>
        <Divider />
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavigate(index, item)}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
      <>
        <AppBar component="nav" position="static" sx={{ backgroundColor: '#1976d2' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Loan Calculator
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, index) => (
                <Button key={index} sx={{ color: '#fff' }} onClick={() => handleNavigate(index, item)}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </>
    );
  };

  export default Header;
