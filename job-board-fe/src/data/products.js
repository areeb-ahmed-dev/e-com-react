const products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    description: "Latest Apple smartphone with A17 Pro chip",
    price: 999,
    image: "https://images.unsplash.com/photo-1695048135180-16d7733a59b5?w=500&auto=format",
    category: "Electronics",
    rating: 4.8,
    stock: 50
  },
  {
    id: 2,
    title: "MacBook Air M2",
    description: "Thin and light laptop with Apple M2 chip",
    price: 1099,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format",
    category: "Electronics",
    rating: 4.7,
    stock: 30
  },
  {
    id: 3,
    title: "AirPods Pro",
    description: "Active noise cancelling wireless earbuds",
    price: 249,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format",
    category: "Electronics",
    rating: 4.5,
    stock: 100
  },
  {
    id: 4,
    title: "Nike Air Force 1",
    description: "Classic white sneakers",
    price: 110,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format",
    category: "Fashion",
    rating: 4.6,
    stock: 75
  },
  {
    id: 5,
    title: "Levi's 501 Jeans",
    description: "Original fit jeans",
    price: 69,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format",
    category: "Fashion",
    rating: 4.3,
    stock: 60
  },
  {
    id: 6,
    title: "Instant Pot Duo",
    description: "7-in-1 electric pressure cooker",
    price: 89,
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500&auto=format",
    category: "Home",
    rating: 4.4,
    stock: 40
  },
  {
    id: 7,
    title: "Kindle Paperwhite",
    description: "Waterproof e-reader",
    price: 139,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format",
    category: "Electronics",
    rating: 4.5,
    stock: 25
  },
  {
    id: 8,
    title: "YETI Tumbler",
    description: "Vacuum insulated stainless steel tumbler",
    price: 39,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format",
    category: "Home",
    rating: 4.7,
    stock: 80
  },

  {
    id: 9,
    title: "Sony WH-1000XM5",
    description: "Premium noise-cancelling headphones",
    price: 399,
    image: "https://images.unsplash.com/photo-1649452035312-4c4875b81b3d?w=500&auto=format",
    category: "Electronics",
    rating: 4.9,
    stock: 35
  },

  {
    id: 10,
    title: "Dyson V15 Detect",
    description: "Cordless vacuum cleaner with laser dust detection",
    price: 699,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=500&auto=format",
    category: "Home",
    rating: 4.8,
    stock: 20
  },

  {
    id: 11,
    title: "Adidas Ultraboost",
    description: "Running shoes with responsive cushioning",
    price: 180,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format",
    category: "Fashion",
    rating: 4.6,
    stock: 50
  },
  
  {
    id: 12,
    title: "Nintendo Switch OLED",
    description: "Handheld gaming console with vibrant 7-inch OLED screen",
    price: 349,
    image: "https://images.unsplash.com/photo-1632582591504-0663e0cbb742?w=500&auto=format",
    category: "Gaming",
    rating: 4.7,
    stock: 30
  },
  {
    id: 13,
    title: "The North Face Jacket",
    description: "Waterproof winter jacket with 550-fill down",
    price: 229,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format",
    category: "Fashion",
    rating: 4.5,
    stock: 40
  },
  {
    id: 14,
    title: "KitchenAid Stand Mixer",
    description: "5-quart tilt-head stand mixer",
    price: 429,
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&auto=format",
    category: "Home",
    rating: 4.8,
    stock: 25
  },
  {
    id: 15,
    title: "GoPro Hero 11",
    description: "Action camera with 5.3K video stabilization",
    price: 399,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format",
    category: "Electronics",
    rating: 4.6,
    stock: 15
  },
  {
    id: 16,
    title: "Ray-Ban Aviator",
    description: "Classic sunglasses with UV protection",
    price: 159,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format",
    category: "Fashion",
    rating: 4.4,
    stock: 60
  },
  {
    id: 17,
    title: "Bose SoundLink Revolve",
    description: "360-degree portable Bluetooth speaker",
    price: 199,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format",
    category: "Electronics",
    rating: 4.5,
    stock: 45
  },
  {
    id: 18,
    title: "Vitamix 5200",
    description: "Professional-grade blender",
    price: 449,
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format",
    category: "Home",
    rating: 4.9,
    stock: 18
  },
  {
    id: 19,
    title: "Patagonia Fleece Jacket",
    description: "Recycled polyester fleece jacket",
    price: 139,
    image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?w=500&auto=format",
    category: "Fashion",
    rating: 4.7,
    stock: 55
  },
  {
    id: 20,
    title: "PlayStation 5",
    description: "Next-gen gaming console with 4K/120fps",
    price: 499,
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format",
    category: "Gaming",
    rating: 4.9,
    stock: 10
  }
];

export default products;