import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { itemCount } = useCart();
  const location = useLocation();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
  ];

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {navLinks.map((link) => (
        <MenuItem key={link.name} component={Link} to={link.path} onClick={handleMobileMenuClose}>
          <Typography textAlign="center">{link.name}</Typography>
        </MenuItem>
      ))}
      <MenuItem component={Link} to="/cart" onClick={handleMobileMenuClose}>
         <Typography textAlign="center">Cart ({itemCount})</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} className="sticky top-0 z-50">
      <AppBar position="static" color="transparent" elevation={0} className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: { xs: 1, md: 0 },
              fontFamily: 'serif',
              fontWeight: 700,
              color: 'secondary.main',
              textDecoration: 'none',
              letterSpacing: '0.05em'
            }}
          >
            Lumière
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4 }}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                component={Link}
                to={link.path}
                sx={{ 
                    my: 2, 
                    color: location.pathname === link.path ? 'primary.main' : 'text.secondary',
                    display: 'block',
                    fontWeight: location.pathname === link.path ? 700 : 500,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'primary.main'
                    }
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          {/* Desktop Icons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
              size="large" 
              aria-label="show cart items" 
              component={Link} 
              to="/cart"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <Badge badgeContent={itemCount} color="primary">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{ color: 'text.secondary' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};

export default Navbar;