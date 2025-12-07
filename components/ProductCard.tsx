import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [open, setOpen] = React.useState(false);

  // Handle broken images by falling back to a placeholder
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://picsum.photos/300/300?blur=2';
  };

  const handleAddToCart = () => {
    addToCart(product);
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
    <Card className="h-full flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl border border-gray-100" sx={{ borderRadius: 3 }}>
      <div className="relative pt-[100%] bg-white overflow-hidden group">
        <CardMedia
          component="img"
          image={product.image_link}
          alt={product.name}
          onError={handleImageError}
          className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="flex-grow">
        <Typography gutterBottom variant="caption" component="div" className="uppercase tracking-wider text-gray-500 font-medium">
          {product.brand}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" className="text-secondary line-clamp-2 text-base font-medium min-h-[3rem]">
          {product.name}
        </Typography>
        <Typography variant="h6" color="primary" className="font-bold">
          ${parseFloat(product.price).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions className="p-4 pt-0">
        <Button 
            variant="contained" 
            fullWidth 
            onClick={handleAddToCart}
            startIcon={<AddShoppingCartIcon />}
            sx={{ 
              borderRadius: 6, 
              textTransform: 'none', 
              boxShadow: 'none',
              fontWeight: 700,
              py: 1
            }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>

    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', color: 'white', bgcolor: 'secondary.main' }}>
            Added to cart!
        </Alert>
    </Snackbar>
    </>
  );
};

export default ProductCard;