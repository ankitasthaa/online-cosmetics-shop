import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.product_type === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Extract unique categories for filter
  const categories: string[] = ['All', ...Array.from(new Set(products.map(p => p.product_type)))];

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-10">
      <Container maxWidth="xl">
        <Box className="mb-10 text-center space-y-4">
            <Typography variant="h3" component="h1" className="font-serif font-bold text-secondary">
                Our Collection
            </Typography>
            <Typography variant="body1" className="text-gray-500 max-w-2xl mx-auto">
                Explore our wide range of beauty products.
            </Typography>
        </Box>

        {/* Filters and Search */}
        <Box className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                {categories.slice(0, 6).map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCategoryFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors font-medium ${
                            categoryFilter === cat 
                            ? 'bg-secondary text-white shadow-md' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {(cat as string).replace('_', ' ')}
                    </button>
                ))}
            </div>
            
            <TextField
                variant="outlined"
                size="small"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="action" />
                        </InputAdornment>
                    ),
                }}
                sx={{ width: { xs: '100%', md: '300px' }, '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
            />
        </Box>

        {loading ? (
          <Box className="flex justify-center items-center h-64">
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <>
            {filteredProducts.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                    <Typography variant="h6">No products found matching your criteria.</Typography>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default Shop;