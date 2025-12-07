import { Product } from './types';

export const API_BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json';

// Fallback data in case API is slow or down
export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 1048,
    brand: "colourpop",
    name: "Lippie Pencil",
    price: "5.0",
    price_sign: "$",
    currency: "USD",
    image_link: "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
    product_link: "https://colourpop.com/products/lippie-pencil",
    website_link: "https://colourpop.com",
    description: "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!",
    rating: null,
    category: "pencil",
    product_type: "lip_liner",
    tag_list: ["cruelty free", "Vegan"]
  },
  {
    id: 1047,
    brand: "colourpop",
    name: "Blotted Lip",
    price: "5.5",
    price_sign: "$",
    currency: "USD",
    image_link: "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
    product_link: "https://colourpop.com/products/déjà-vu",
    website_link: "https://colourpop.com",
    description: "Blotted Lip Sheer matte lipstick that creates the perfect naturally flushed look.",
    rating: null,
    category: "lipstick",
    product_type: "lipstick",
    tag_list: ["cruelty free", "Vegan"]
  },
  {
    id: 1035,
    brand: "rejuva minerals",
    name: "Baked Bronzer",
    price: "32.0",
    price_sign: "$",
    currency: "USD",
    image_link: "https://www.rejuvaminerals.com/store/images/P/sttropez_lg-01.jpg",
    product_link: "https://www.rejuvaminerals.com/store/products/Baked_Bronzer-132-0.html",
    website_link: "https://www.rejuvaminerals.com",
    description: "Baked in Italy, our bronzer provides a natural looking tan without the sun damage.",
    rating: 4.5,
    category: "bronzer",
    product_type: "bronzer",
    tag_list: ["gluten free", "vegan"]
  },
  {
    id: 452,
    brand: "maybelline",
    name: "Maybelline Face Studio Master Hi-Light Light Booster Bronzer",
    price: "14.99",
    price_sign: "$",
    currency: "USD",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png",
    product_link: "https://well.ca/products/maybelline-face-studio-master_88837.html",
    website_link: "https://well.ca",
    description: "Maybelline Face Studio Master Hi-Light Light Booster Bronzer helps you achieve a luminous glow.",
    rating: 5,
    category: null,
    product_type: "bronzer",
    tag_list: []
  },
   {
    id: 439,
    brand: "maybelline",
    name: "Maybelline Fit Me Blush",
    price: "10.29",
    price_sign: "$",
    currency: "USD",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/53d3227d9bcd818fc83a23af664e7e19_ra,w158,h184_pa,w158,h184.png",
    product_link: "https://well.ca/products/maybelline-fit-me-blush_31269.html",
    website_link: "https://well.ca",
    description: "Maybelline Fit Me Blush provides natural color that moves with your skin.",
    rating: 4.8,
    category: "powder",
    product_type: "blush",
    tag_list: []
  },
  {
    id: 414,
    brand: "maybelline",
    name: "Maybelline Color Tattoo 24HR Cream Gel Eye Shadow",
    price: "11.99",
    price_sign: "$",
    currency: "USD",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/cf9136bb1ac7588147d33d5ba403163e_ra,w158,h184_pa,w158,h184.png",
    product_link: "https://well.ca/products/maybelline-color-tattoo-24hr-cream_51680.html",
    website_link: "https://well.ca",
    description: "Dare to wear 24HR shadow! Maybelline's Color Tattoo 24HR Cream Gel Eye Shadow is long lasting.",
    rating: 4.2,
    category: null,
    product_type: "eyeshadow",
    tag_list: []
  }
];
