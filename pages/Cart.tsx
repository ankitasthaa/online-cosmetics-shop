import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  const handleConfirmOrder = () => {
    // Simulate API call
    setTimeout(() => {
        setCheckoutOpen(false);
        setOrderConfirmed(true);
        clearCart();
    }, 1500);
  };

  if (orderConfirmed) {
      return (
        <Container maxWidth="sm" className="py-20 text-center">
            <Box className="bg-green-50 p-10 rounded-2xl border border-green-100">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 text-4xl">✓</div>
                <Typography variant="h4" gutterBottom className="font-serif font-bold text-green-800">Order Confirmed!</Typography>
                <Typography variant="body1" className="text-gray-600 mb-8">Thank you for your purchase. Your beauty essentials are on their way.</Typography>
                <Button component={Link} to="/shop" variant="contained" color="primary" size="large" onClick={() => setOrderConfirmed(false)}>
                    Continue Shopping
                </Button>
            </Box>
        </Container>
      )
  }

  return (
    <Container maxWidth="lg" className="py-10">
      <Typography variant="h4" className="mb-8 font-serif font-bold text-secondary">
        Your Shopping Bag
      </Typography>

      {cart.length === 0 ? (
        <Box className="text-center py-20 bg-gray-50 rounded-xl">
          <Typography variant="h6" className="text-gray-500 mb-4">Your bag is empty.</Typography>
          <Button component={Link} to="/shop" variant="outlined" color="primary">
            Browse Products
          </Button>
        </Box>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-grow space-y-4">
            {cart.map((item) => (
              <Box key={item.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <img 
                    src={item.image_link} 
                    alt={item.name} 
                    className="w-24 h-24 object-contain bg-gray-50 rounded-lg"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/100/100?blur=2' }}
                />
                
                <div className="flex-grow text-center sm:text-left">
                  <Typography variant="subtitle2" className="text-gray-400 uppercase text-xs">{item.brand}</Typography>
                  <Typography variant="h6" className="text-sm sm:text-base font-medium">{item.name}</Typography>
                  <Typography variant="body2" color="primary" className="font-bold mt-1">${parseFloat(item.price).toFixed(2)}</Typography>
                </div>

                <div className="flex items-center bg-gray-50 rounded-lg">
                    <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography className="px-3 font-medium">{item.quantity}</Typography>
                    <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </div>
                
                <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96">
            <Box className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <Typography variant="h6" className="mb-4 font-bold">Order Summary</Typography>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              
              <Divider className="my-4" />
              
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <Button 
                variant="contained" 
                fullWidth 
                size="large" 
                onClick={handleCheckout}
                sx={{ py: 1.5, borderRadius: 2 }}
              >
                Checkout
              </Button>
            </Box>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      <Dialog open={checkoutOpen} onClose={() => setCheckoutOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle className="font-bold">Secure Checkout</DialogTitle>
        <DialogContent>
          <DialogContentText className="mb-4">
            Please review your details to complete your order.
          </DialogContentText>
          <div className="space-y-4 mt-2">
            <TextField label="Full Name" fullWidth variant="outlined" defaultValue="Jane Doe" />
            <TextField label="Shipping Address" fullWidth variant="outlined" defaultValue="123 Beauty Lane, Glow City" />
            
            <div className="grid grid-cols-2 gap-4">
                <TextField label="Card Number" fullWidth variant="outlined" defaultValue="**** **** **** 4242" />
                <TextField label="Expiry" fullWidth variant="outlined" defaultValue="12/25" />
            </div>
            
            <Box className="bg-gray-50 p-4 rounded-lg mt-4">
                <div className="flex justify-between font-bold">
                    <span>Total to Pay:</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                </div>
            </Box>
          </div>
        </DialogContent>
        <DialogActions className="p-4">
          <Button onClick={() => setCheckoutOpen(false)} color="inherit">Cancel</Button>
          <Button onClick={handleConfirmOrder} variant="contained" color="primary" disableElevation>
            Pay & Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Cart;
