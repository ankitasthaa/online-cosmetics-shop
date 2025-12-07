import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

// Footer Component
const Footer = () => (
  <Box component="footer" className="bg-[#4a4a4a] text-white py-12 mt-auto">
    <Container maxWidth="lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Typography variant="h6" className="font-serif font-bold mb-4">
            Lumière Cosmetics
          </Typography>
          <Typography variant="body2" className="text-gray-400">
            Redefining beauty with conscious, ethical, and premium products.
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1" className="font-bold mb-4">
            Quick Links
          </Typography>
          <Box className="flex flex-col space-y-2">
            <Link
              href="#/"
              color="inherit"
              className="no-underline hover:text-primary transition-colors text-sm text-gray-400"
            >
              Home
            </Link>
            <Link
              href="#/shop"
              color="inherit"
              className="no-underline hover:text-primary transition-colors text-sm text-gray-400"
            >
              Shop Collection
            </Link>
            <Link
              href="#/cart"
              color="inherit"
              className="no-underline hover:text-primary transition-colors text-sm text-gray-400"
            >
              My Cart
            </Link>
          </Box>
        </div>
        <div>
          <Typography variant="subtitle1" className="font-bold mb-4">
            Contact
          </Typography>
          <Typography variant="body2" className="text-gray-400">
            hello@lumiere.com
          </Typography>
          <Typography variant="body2" className="text-gray-400">
            +1 (555) 123-4567
          </Typography>
        </div>
      </div>
      <Box className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Lumière Cosmetics. All rights reserved.
      </Box>
    </Container>
  </Box>
);

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
