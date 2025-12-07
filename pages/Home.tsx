import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-[80vh] flex items-center bg-[#FDFBF7] overflow-hidden py-12 md:py-0">
        <div className="absolute inset-0 z-0">
           {/* Decorative background circle */}
           <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <Container maxWidth="lg" className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left space-y-6 animate-fade-in-up order-1">
                <Typography variant="overline" className="text-primary font-bold tracking-[0.2em] block">
                    New Collection 2024
                </Typography>
                <Typography 
                    variant="h1" 
                    className="text-secondary font-serif leading-tight"
                    sx={{ 
                        fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                        lineHeight: { xs: 1.1, md: 1.1 }
                    }}
                >
                    Reveal Your <br/> <span className="text-primary italic">Inner Glow</span>
                </Typography>
                <Typography 
                    variant="body1" 
                    className="text-gray-600 max-w-md mx-auto md:mx-0 text-base md:text-lg"
                >
                    Discover our premium collection of ethically sourced, dermatologically tested cosmetics designed to enhance your natural beauty.
                </Typography>
                <Box pt={2} className="flex justify-center md:justify-start">
                    <Button 
                        component={Link} 
                        to="/shop" 
                        variant="contained" 
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ 
                            px: 5, 
                            py: 1.5, 
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            boxShadow: '0 10px 20px -5px rgba(216, 164, 143, 0.5)'
                        }}
                    >
                        Shop Now
                    </Button>
                </Box>
            </div>
            <div className="flex justify-center md:justify-end relative order-2 mt-8 md:mt-0">
                 <img 
                    src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Cosmetic Products" 
                    className="rounded-t-[150px] rounded-b-[20px] md:rounded-t-[200px] md:rounded-b-[20px] shadow-2xl w-[280px] h-[350px] md:w-[400px] md:h-[550px] object-cover relative z-10"
                 />
                 <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-10 w-32 h-32 md:w-40 md:h-40 bg-white p-4 rounded-lg shadow-lg z-20 flex flex-col justify-center items-center">
                    <Typography variant="h4" className="font-bold text-primary text-2xl md:text-4xl">100%</Typography>
                    <Typography variant="body2" className="text-center text-gray-500 text-xs md:text-sm">Vegan & Cruelty Free</Typography>
                 </div>
            </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">✨</div>
                    <Typography variant="h6" className="mb-2 font-bold">Premium Quality</Typography>
                    <Typography variant="body2" className="text-gray-500">Only the finest ingredients for your skin.</Typography>
                </div>
                <div className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">🌿</div>
                    <Typography variant="h6" className="mb-2 font-bold">Eco Friendly</Typography>
                    <Typography variant="body2" className="text-gray-500">Sustainable packaging and sourcing.</Typography>
                </div>
                <div className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">🚚</div>
                    <Typography variant="h6" className="mb-2 font-bold">Fast Delivery</Typography>
                    <Typography variant="body2" className="text-gray-500">Free shipping on orders over $50.</Typography>
                </div>
            </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;