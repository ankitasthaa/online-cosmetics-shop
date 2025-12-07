import { Product } from '../types';
import { API_BASE_URL, FALLBACK_PRODUCTS } from '../constants';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}?brand=maybelline`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data: Product[] = await response.json();
    
    if (!data || data.length === 0) {
      console.warn("API returned empty data, using fallback.");
      return FALLBACK_PRODUCTS;
    }
    
    return data.filter(p => p.price && p.image_link && parseFloat(p.price) > 0);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return FALLBACK_PRODUCTS;
  }
};
