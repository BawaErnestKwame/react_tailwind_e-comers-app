// E-commerce Product Data with Real Unsplash Images
export const productsData = {
  laptops: [
    {
      id: 1,
      name: "Apple MacBook Air M4",
      price: 1299,
      description: "Best Overall Laptop 2025 with Apple's latest M4 chip",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Apple M4 chip",
        ram: "16GB",
        storage: "512GB SSD",
        display: "13.6-inch Liquid Retina",
        weight: "2.7 lbs",
        battery: "Up to 18 hours"
      },
      colors: ["Space Gray", "Silver", "Starlight", "Midnight"],
      tags: ["premium", "ultraportable", "apple", "m4"]
    },
    {
      id: 2,
      name: "Apple MacBook Pro 14\" M4",
      brand: "Apple",
      price: 1999,
      originalPrice: 2199,
      description: "Best Performance Laptop with professional-grade features",
      category: "laptops",
      subcategory: "professional",
      inStock: true,
      stockQuantity: 15,
      rating: 4.9,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Apple M4 Pro chip",
        ram: "32GB",
        storage: "1TB SSD",
        display: "14.2-inch Liquid Retina XDR",
        weight: "3.5 lbs",
        battery: "Up to 22 hours"
      },
      colors: ["Space Black", "Silver"],
      tags: ["professional", "high-performance", "apple", "m4-pro"]
    },
    {
      id: 3,
      name: "ASUS Zenbook 14 OLED",
      brand: "ASUS",
      price: 899,
      originalPrice: 1099,
      description: "Best Student Laptop with stunning OLED display",
      category: "laptops",
      subcategory: "student",
      inStock: true,
      stockQuantity: 42,
      rating: 4.6,
      reviews: 634,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Intel Core i7-1355U",
        ram: "16GB",
        storage: "512GB SSD",
        display: "14-inch 2.8K OLED",
        weight: "3.1 lbs",
        battery: "Up to 12 hours"
      },
      colors: ["Pine Grey", "Ponder Blue"],
      tags: ["oled", "student", "affordable", "asus"]
    },
    {
      id: 4,
      name: "MSI Raider 18 HX AI",
      brand: "MSI",
      price: 3299,
      originalPrice: 3599,
      description: "Best Gaming Laptop with AI-enhanced performance",
      category: "laptops",
      subcategory: "gaming",
      inStock: true,
      stockQuantity: 8,
      rating: 4.7,
      reviews: 321,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Intel Core i9-14900HX",
        ram: "32GB DDR5",
        storage: "2TB NVMe SSD",
        display: "18-inch QHD+ 240Hz",
        gpu: "NVIDIA RTX 4080",
        weight: "6.8 lbs"
      },
      colors: ["Cosmos Gray"],
      tags: ["gaming", "high-end", "ai", "rtx"]
    },
    {
      id: 5,
      name: "Dell XPS 13",
      brand: "Dell",
      price: 1199,
      originalPrice: 1299,
      description: "Best Ultraportable with premium build quality",
      category: "laptops",
      subcategory: "ultrabook",
      inStock: true,
      stockQuantity: 33,
      rating: 4.5,
      reviews: 987,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Intel Core i7-1365U",
        ram: "16GB",
        storage: "512GB SSD",
        display: "13.4-inch FHD+",
        weight: "2.6 lbs",
        battery: "Up to 14 hours"
      },
      colors: ["Platinum Silver", "Graphite"],
      tags: ["ultraportable", "premium", "dell", "business"]
    },
    {
      id: 6,
      name: "Razer Blade 16 (2025)",
      brand: "Razer",
      price: 2799,
      originalPrice: 2999,
      description: "Premium Gaming laptop with sleek design",
      category: "laptops",
      subcategory: "gaming",
      inStock: false,
      stockQuantity: 0,
      rating: 4.6,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Intel Core i9-14900HX",
        ram: "32GB",
        storage: "1TB SSD",
        display: "16-inch QHD+ 240Hz",
        gpu: "NVIDIA RTX 4070",
        weight: "5.4 lbs"
      },
      colors: ["Black"],
      tags: ["gaming", "premium", "razer", "rgb"]
    },
    {
      id: 7,
      name: "ASUS ROG Strix Scar 16",
      brand: "ASUS",
      price: 2199,
      originalPrice: 2399,
      description: "High Performance Gaming with ROG features",
      category: "laptops",
      subcategory: "gaming",
      inStock: true,
      stockQuantity: 12,
      rating: 4.7,
      reviews: 589,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "AMD Ryzen 9 7945HX",
        ram: "32GB DDR5",
        storage: "1TB SSD",
        display: "16-inch WQXGA 240Hz",
        gpu: "NVIDIA RTX 4060",
        weight: "5.5 lbs"
      },
      colors: ["Eclipse Gray"],
      tags: ["gaming", "rog", "amd", "high-performance"]
    },
    {
      id: 8,
      name: "Acer Swift Go 14",
      brand: "Acer",
      price: 649,
      originalPrice: 749,
      description: "Best Budget Laptop without compromising quality",
      category: "laptops",
      subcategory: "budget",
      inStock: true,
      stockQuantity: 67,
      rating: 4.3,
      reviews: 1123,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Intel Core i5-1335U",
        ram: "8GB",
        storage: "256GB SSD",
        display: "14-inch FHD IPS",
        weight: "3.2 lbs",
        battery: "Up to 11 hours"
      },
      colors: ["Steel Gray", "Pure Silver"],
      tags: ["budget", "affordable", "acer", "everyday"]
    },
    {
      id: 9,
      name: "Microsoft Surface Pro 2025",
      brand: "Microsoft",
      price: 1399,
      originalPrice: 1499,
      description: "Best 2-in-1 tablet-laptop hybrid",
      category: "laptops",
      subcategory: "2-in-1",
      inStock: true,
      stockQuantity: 28,
      rating: 4.4,
      reviews: 756,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Intel Core i7-1355U",
        ram: "16GB",
        storage: "512GB SSD",
        display: "13-inch PixelSense",
        weight: "1.96 lbs",
        battery: "Up to 15.5 hours"
      },
      colors: ["Platinum", "Graphite", "Sapphire"],
      tags: ["2-in-1", "tablet", "microsoft", "surface"]
    },
    {
      id: 10,
      name: "HP Spectre x360",
      brand: "HP",
      price: 1149,
      originalPrice: 1249,
      description: "Best Convertible with 360-degree hinge",
      category: "laptops",
      subcategory: "convertible",
      inStock: true,
      stockQuantity: 19,
      rating: 4.5,
      reviews: 823,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Intel Core i7-1355U",
        ram: "16GB",
        storage: "512GB SSD",
        display: "13.5-inch 3K2K OLED",
        weight: "3.01 lbs",
        battery: "Up to 10.25 hours"
      },
      colors: ["Nightfall Black", "Natural Silver"],
      tags: ["convertible", "oled", "hp", "premium"]
    }
  ],

  headsets: [
    {
      id: 1,
      name: "Audeze Maxwell Wireless",
      brand: "Audeze",
      price: 329,
      originalPrice: 399,
      description: "Best Overall Gaming Headset with planar magnetic drivers",
      category: "headsets",
      subcategory: "premium",
      inStock: true,
      stockQuantity: 34,
      rating: 4.9,
      reviews: 421,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop"
      ],
      specifications: {
        driverType: "90mm Planar Magnetic",
        frequency: "10Hz - 50kHz",
        impedance: "32 ohms",
        battery: "80+ hours",
        connectivity: "2.4GHz, Bluetooth, USB-C",
        weight: "490g"
      },
      colors: ["Black"],
      tags: ["premium", "wireless", "planar-magnetic", "long-battery"]
    },
    {
      id: 2,
      name: "SteelSeries Arctis Nova Pro Wireless",
      brand: "SteelSeries",
      price: 279,
      originalPrice: 349,
      description: "Best Premium headset with active noise cancellation",
      category: "headsets",
      subcategory: "premium",
      inStock: true,
      stockQuantity: 28,
      rating: 4.7,
      reviews: 634,
      image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop"
      ],
      specifications: {
        driverType: "40mm Neodymium",
        frequency: "10Hz - 22kHz",
        anc: "Active Noise Cancellation",
        battery: "44 hours",
        connectivity: "2.4GHz, Bluetooth",
        weight: "338g"
      },
      colors: ["Black", "White"],
      tags: ["premium", "anc", "wireless", "steelseries"]
    },
    {
      id: 3,
      name: "HyperX Cloud Alpha Wireless",
      brand: "HyperX",
      price: 179,
      originalPrice: 199,
      description: "Best Battery Life - up to 300 hours",
      category: "headsets",
      subcategory: "wireless",
      inStock: true,
      stockQuantity: 45,
      rating: 4.6,
      reviews: 889,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
      ],
      specifications: {
        driverType: "50mm Dynamic",
        frequency: "15Hz - 21kHz",
        battery: "300 hours",
        connectivity: "2.4GHz",
        weight: "335g",
        microphone: "Detachable"
      },
      colors: ["Black/Red"],
      tags: ["wireless", "long-battery", "gaming", "hyperx"]
    },
    {
      id: 4,
      name: "Turtle Beach Stealth Pro",
      brand: "Turtle Beach",
      price: 229,
      originalPrice: 329,
      description: "Premium Multi-Platform with swappable batteries",
      category: "headsets",
      subcategory: "multi-platform",
      inStock: true,
      stockQuantity: 22,
      rating: 4.5,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop"
      ],
      specifications: {
        driverType: "50mm Nanoclear",
        anc: "Active Noise Cancellation",
        battery: "12+ hours (swappable)",
        connectivity: "2.4GHz, Bluetooth",
        platforms: "PC, PlayStation, Xbox, Mobile",
        weight: "380g"
      },
      colors: ["Black"],
      tags: ["multi-platform", "anc", "swappable-battery", "turtle-beach"]
    },
    {
      id: 5,
      name: "Astro A50 X",
      brand: "Astro Gaming",
      price: 379,
      originalPrice: 399,
      description: "Best Console Gaming with base station",
      category: "headsets",
      subcategory: "console",
      inStock: true,
      stockQuantity: 16,
      rating: 4.6,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
      ],
      specifications: {
        driverType: "40mm Pro-G",
        battery: "24 hours",
        baseStation: "Included",
        platforms: "Xbox, PlayStation, PC",
        connectivity: "2.4GHz",
        weight: "370g"
      },
      colors: ["Black/Blue", "White/Silver"],
      tags: ["console", "base-station", "premium", "astro"]
    },
    {
      id: 6,
      name: "Corsair HS55 Wireless",
      brand: "Corsair",
      price: 89,
      originalPrice: 119,
      description: "Best Budget wireless gaming headset",
      category: "headsets",
      subcategory: "budget",
      inStock: true,
      stockQuantity: 78,
      rating: 4.3,
      reviews: 1234,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop"
      ],
      specifications: {
        driverType: "50mm Neodymium",
        battery: "24 hours",
        connectivity: "2.4GHz",
        microphone: "Omnidirectional",
        weight: "294g",
        compatibility: "PC, PlayStation, Mobile"
      },
      colors: ["Black", "White"],
      tags: ["budget", "wireless", "corsair", "affordable"]
    },
    {
      id: 7,
      name: "Alienware Pro Wireless Gaming Headset",
      brand: "Alienware",
      price: 229,
      originalPrice: 279,
      description: "Premium Gaming Audio with RGB lighting",
      category: "headsets",
      subcategory: "premium",
      inStock: true,
      stockQuantity: 19,
      rating: 4.4,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop"
      ],
      specifications: {
        driverType: "50mm Hi-Res",
        battery: "30 hours",
        lighting: "RGB with 16.8M colors",
        connectivity: "2.4GHz, USB-C",
        anc: "Active Noise Cancellation",
        weight: "285g"
      },
      colors: ["Dark Side of the Moon", "Lunar Light"],
      tags: ["premium", "rgb", "anc", "alienware"]
    },
    {
      id: 8,
      name: "Razer BlackShark V2 Pro",
      brand: "Razer",
      price: 149,
      originalPrice: 179,
      description: "Esports Focused with THX Spatial Audio",
      category: "headsets",
      subcategory: "esports",
      inStock: true,
      stockQuantity: 41,
      rating: 4.5,
      reviews: 756,
      image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
      ],
      specifications: {
        driverType: "50mm TriForce Titanium",
        battery: "24 hours",
        audio: "THX Spatial Audio",
        connectivity: "2.4GHz",
        microphone: "HyperClear Supercardioid",
        weight: "320g"
      },
      colors: ["Black"],
      tags: ["esports", "thx-audio", "wireless", "razer"]
    },
    {
      id: 9,
      name: "Logitech G Pro X Wireless",
      brand: "Logitech",
      price: 179,
      originalPrice: 229,
      description: "Professional Gaming used by esports pros",
      category: "headsets",
      subcategory: "professional",
      inStock: true,
      stockQuantity: 32,
      rating: 4.6,
      reviews: 923,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&h=400&fit=crop"
      ],
      specifications: {
        driverType: "50mm Pro-G",
        battery: "20+ hours",
        audio: "DTS Headphone:X 2.0",
        connectivity: "2.4GHz",
        microphone: "Blue VO!CE",
        weight: "370g"
      },
      colors: ["Black", "White"],
      tags: ["professional", "esports", "dts-audio", "logitech"]
    },
    {
      id: 10,
      name: "SteelSeries Arctis 7P+",
      brand: "SteelSeries",
      price: 129,
      originalPrice: 169,
      description: "PlayStation Optimized with 3D Audio",
      category: "headsets",
      subcategory: "console",
      inStock: true,
      stockQuantity: 38,
      rating: 4.4,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop"
      ],
      specifications: {
        driverType: "40mm Neodymium",
        battery: "30 hours",
        audio: "PlayStation 5 3D Audio",
        connectivity: "2.4GHz, USB-C",
        microphone: "ClearCast Gen 2",
        weight: "308g"
      },
      colors: ["Black", "White"],
      tags: ["playstation", "3d-audio", "console", "steelseries"]
    }
  ],

  sneakers: [
    {
      id: 1,
      name: "Air Jordan 1 Retro High OG",
      brand: "Nike",
      price: 170,
      originalPrice: 170,
      description: "Classic Basketball Icon - Timeless design",
      category: "sneakers",
      subcategory: "basketball",
      inStock: true,
      stockQuantity: 78,
      rating: 4.4,
      reviews: 1234,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Leather upper",
        sole: "Rubber outsole",
        closure: "Lace-up",
        height: "High-top",
        technology: "Air-Sole unit"
      },
      sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
      colors: ["Chicago", "Bred", "Royal Blue", "Shadow"],
      tags: ["basketball", "retro", "jordan", "classic"]
    },
    {
      id: 2,
      name: "Ultraboost 22",
      brand: "Adidas",
      price: 180,
      originalPrice: 190,
      description: "Premium Running Shoe with Boost technology",
      category: "sneakers",
      subcategory: "running",
      inStock: true,
      stockQuantity: 67,
      rating: 4.6,
      reviews: 1876,
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Primeknit upper",
        sole: "Boost midsole",
        closure: "Lace-up",
        technology: "Continental rubber outsole",
        weight: "10.9 oz"
      },
      sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
      colors: ["Core Black", "Cloud White", "Solar Red", "Triple White"],
      tags: ["running", "boost", "adidas", "performance"]
    },
    {
      id: 3,
      name: "Nike Air Max 90",
      brand: "Nike",
      price: 130,
      originalPrice: 140,
      description: "Iconic Lifestyle Sneaker with visible Air unit",
      category: "sneakers",
      subcategory: "lifestyle",
      inStock: true,
      stockQuantity: 89,
      rating: 4.7,
      reviews: 3214,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Leather and mesh",
        sole: "Rubber with Air-Sole unit",
        closure: "Lace-up",
        height: "Low-top",
        technology: "Max Air cushioning"
      },
      sizes: ["6", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
      colors: ["White/Red", "Triple Black", "Infrared", "Hyper Grape"],
      tags: ["lifestyle", "air-max", "nike", "retro"]
    },
    {
      id: 4,
      name: "New Balance 990v6",
      brand: "New Balance",
      price: 185,
      originalPrice: 185,
      description: "Made in USA Premium Comfort",
      category: "sneakers",
      subcategory: "lifestyle",
      inStock: true,
      stockQuantity: 34,
      rating: 4.8,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Pigskin and mesh upper",
        sole: "ENCAP midsole",
        closure: "Lace-up",
        madeIn: "USA",
        technology: "ABZORB cushioning"
      },
      sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
      colors: ["Grey", "Navy", "Black", "Marblehead"],
      tags: ["lifestyle", "made-in-usa", "comfort", "new-balance"]
    },
    {
      id: 5,
      name: "Yeezy Boost 350 V2",
      brand: "Adidas",
      price: 230,
      originalPrice: 230,
      description: "Iconic Kanye Design with Primeknit",
      category: "sneakers",
      subcategory: "lifestyle",
      inStock: false,
      stockQuantity: 0,
      rating: 4.5,
      reviews: 4567,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Primeknit upper",
        sole: "Boost midsole",
        closure: "Lace-up",
        technology: "Boost cushioning",
        style: "Slip-on design with laces"
      },
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["Bone", "Zebra", "Bred", "Static"],
      tags: ["yeezy", "boost", "lifestyle", "limited"]
    },
    {
      id: 6,
      name: "Converse Chuck Taylor All Star",
      brand: "Converse",
      price: 60,
      originalPrice: 65,
      description: "Timeless Classic Canvas Sneaker",
      category: "sneakers",
      subcategory: "casual",
      inStock: true,
      stockQuantity: 156,
      rating: 4.5,
      reviews: 8923,
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Canvas upper",
        sole: "Rubber",
        closure: "Lace-up",
        height: "High-top",
        style: "Classic basketball silhouette"
      },
      sizes: ["6", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12", "13"],
      colors: ["Black", "White", "Red", "Navy", "Optical White"],
      tags: ["casual", "canvas", "classic", "converse"]
    },
    {
      id: 7,
      name: "Vans Old Skool",
      brand: "Vans",
      price: 70,
      originalPrice: 75,
      description: "Skate Classic with Side Stripe",
      category: "sneakers",
      subcategory: "skate",
      inStock: true,
      stockQuantity: 112,
      rating: 4.6,
      reviews: 5634,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Canvas and suede",
        sole: "Waffle rubber outsole",
        closure: "Lace-up",
        height: "Low-top",
        style: "Padded collar"
      },
      sizes: ["6", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
      colors: ["Black/White", "Navy", "Checkerboard", "All Black"],
      tags: ["skate", "classic", "vans", "streetwear"]
    },
    {
      id: 8,
      name: "Puma Suede Classic",
      brand: "Puma",
      price: 75,
      originalPrice: 80,
      description: "Retro Style with Premium Suede",
      category: "sneakers",
      subcategory: "lifestyle",
      inStock: true,
      stockQuantity: 78,
      rating: 4.4,
      reviews: 2156,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Suede upper",
        sole: "Rubber",
        closure: "Lace-up",
        height: "Low-top",
        style: "Classic silhouette"
      },
      sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
      colors: ["Team Regal Red", "Peacoat Blue", "Black", "Forest Night"],
      tags: ["lifestyle", "suede", "retro", "puma"]
    },
    {
      id: 9,
      name: "Nike Blazer Mid '77",
      brand: "Nike",
      price: 105,
      originalPrice: 110,
      description: "Vintage Basketball Style",
      category: "sneakers",
      subcategory: "lifestyle",
      inStock: true,
      stockQuantity: 62,
      rating: 4.5,
      reviews: 1789,
      image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Leather upper",
        sole: "Rubber cupsole",
        closure: "Lace-up",
        height: "Mid-top",
        style: "Vintage finish"
      },
      sizes: ["6", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
      colors: ["White/Black", "Vintage White", "Habanero Red", "Photon Dust"],
      tags: ["lifestyle", "vintage", "blazer", "nike"]
    },
    {
      id: 10,
      name: "Reebok Club C 85",
      brand: "Reebok",
      price: 80,
      originalPrice: 90,
      description: "Tennis-Inspired Clean Design",
      category: "sneakers",
      subcategory: "lifestyle",
      inStock: true,
      stockQuantity: 94,
      rating: 4.4,
      reviews: 2876,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Leather upper",
        sole: "Rubber outsole",
        closure: "Lace-up",
        height: "Low-top",
        style: "Tennis court classic"
      },
      sizes: ["6", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
      colors: ["White/Green", "White/Navy", "All White", "Black"],
      tags: ["lifestyle", "tennis", "clean", "reebok"]
    },
    {
      id: 11,
      name: "Hoka Clifton 9",
      brand: "Hoka",
      price: 145,
      originalPrice: 145,
      description: "Maximum Cushion Running Shoe",
      category: "sneakers",
      subcategory: "running",
      inStock: true,
      stockQuantity: 48,
      rating: 4.7,
      reviews: 1543,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Engineered mesh",
        sole: "EVA midsole",
        closure: "Lace-up",
        technology: "Meta-Rocker geometry",
        weight: "7.9 oz"
      },
      sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
      colors: ["White/White", "Black/White", "Harbor Mist", "Electric Aqua"],
      tags: ["running", "cushion", "performance", "hoka"]
    },
    {
      id: 12,
      name: "On Cloudmonster",
      brand: "On",
      price: 170,
      originalPrice: 170,
      description: "Ultra-Cushioned with CloudTec",
      category: "sneakers",
      subcategory: "running",
      inStock: true,
      stockQuantity: 31,
      rating: 4.6,
      reviews: 967,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop"
      ],
      specifications: {
        material: "Engineered mesh upper",
        sole: "Helion superfoam",
        closure: "Lace-up",
        technology: "CloudTec in Helion",
        weight: "8.82 oz"
      },
      sizes: ["7", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
      colors: ["Undyed/White", "All Black", "Glacier/Volt", "Cobble/Pebble"],
      tags: ["running", "cloudtec", "cushion", "on-running"]
    }
  ],

  phones: [
    {
      id: 1,
      name: "iPhone 16 Pro Max",
      brand: "Apple",
      price: 1199,
      originalPrice: 1199,
      description: "Best Overall Smartphone with A18 Pro chip",
      category: "phones",
      subcategory: "flagship",
      inStock: true,
      stockQuantity: 87,
      rating: 4.9,
      reviews: 3421,
      image: "https://images.unsplash.com/photo-1592286927505-2fd2ba0cda3c?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1592286927505-2fd2ba0cda3c?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "A18 Pro",
        ram: "8GB",
        storage: "256GB",
        display: "6.9-inch Super Retina XDR",
        camera: "48MP Main + 48MP Ultra Wide + 12MP Telephoto",
        battery: "4685 mAh",
        os: "iOS 18"
      },
      colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
      tags: ["flagship", "premium", "ios", "5g"]
    },
    {
      id: 2,
      name: "Samsung Galaxy S25 Ultra",
      brand: "Samsung",
      price: 1299,
      originalPrice: 1299,
      description: "Best Android Phone with S Pen",
      category: "phones",
      subcategory: "flagship",
      inStock: true,
      stockQuantity: 64,
      rating: 4.8,
      reviews: 2876,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Snapdragon 8 Gen 3",
        ram: "12GB",
        storage: "256GB",
        display: "6.8-inch Dynamic AMOLED 2X",
        camera: "200MP Main + 50MP Periscope + 12MP Ultra Wide",
        battery: "5000 mAh",
        os: "Android 15"
      },
      colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
      tags: ["flagship", "android", "s-pen", "camera"]
    },
    {
      id: 3,
      name: "Google Pixel 9 Pro",
      brand: "Google",
      price: 999,
      originalPrice: 999,
      description: "Best Camera Phone with AI features",
      category: "phones",
      subcategory: "flagship",
      inStock: true,
      stockQuantity: 52,
      rating: 4.7,
      reviews: 1987,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Google Tensor G4",
        ram: "12GB",
        storage: "128GB",
        display: "6.3-inch LTPO OLED",
        camera: "50MP Main + 48MP Telephoto + 48MP Ultra Wide",
        battery: "4700 mAh",
        os: "Android 15"
      },
      colors: ["Obsidian", "Porcelain", "Hazel", "Rose"],
      tags: ["flagship", "camera", "ai", "pure-android"]
    },
    {
      id: 4,
      name: "OnePlus 12",
      brand: "OnePlus",
      price: 799,
      originalPrice: 899,
      description: "Best Value Flagship with fast charging",
      category: "phones",
      subcategory: "flagship",
      inStock: true,
      stockQuantity: 43,
      rating: 4.6,
      reviews: 1432,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Snapdragon 8 Gen 3",
        ram: "12GB",
        storage: "256GB",
        display: "6.82-inch AMOLED 120Hz",
        camera: "50MP Main + 64MP Periscope + 48MP Ultra Wide",
        battery: "5400 mAh",
        charging: "100W SuperVOOC",
        os: "OxygenOS 14"
      },
      colors: ["Flowy Emerald", "Silky Black"],
      tags: ["flagship", "fast-charging", "value", "android"]
    },
    {
      id: 5,
      name: "iPhone 16",
      brand: "Apple",
      price: 799,
      originalPrice: 799,
      description: "Best Mid-Range iPhone with great performance",
      category: "phones",
      subcategory: "mid-range",
      inStock: true,
      stockQuantity: 124,
      rating: 4.7,
      reviews: 4562,
      image: "https://images.unsplash.com/photo-1592286927505-2fd2ba0cda3c?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1592286927505-2fd2ba0cda3c?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "A18",
        ram: "6GB",
        storage: "128GB",
        display: "6.1-inch Super Retina XDR",
        camera: "48MP Main + 12MP Ultra Wide",
        battery: "3561 mAh",
        os: "iOS 18"
      },
      colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
      tags: ["mid-range", "ios", "reliable", "apple"]
    },
    {
      id: 6,
      name: "Samsung Galaxy A55",
      brand: "Samsung",
      price: 449,
      originalPrice: 499,
      description: "Best Mid-Range Android with great display",
      category: "phones",
      subcategory: "mid-range",
      inStock: true,
      stockQuantity: 156,
      rating: 4.5,
      reviews: 2341,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Exynos 1480",
        ram: "8GB",
        storage: "128GB",
        display: "6.6-inch Super AMOLED",
        camera: "50MP Main + 12MP Ultra Wide + 5MP Macro",
        battery: "5000 mAh",
        os: "Android 14"
      },
      colors: ["Awesome Navy", "Awesome Lilac", "Awesome Iceblue"],
      tags: ["mid-range", "android", "amoled", "value"]
    },
    {
      id: 7,
      name: "Google Pixel 8a",
      brand: "Google",
      price: 499,
      originalPrice: 499,
      description: "Best Budget Phone with flagship camera",
      category: "phones",
      subcategory: "budget",
      inStock: true,
      stockQuantity: 98,
      rating: 4.6,
      reviews: 1876,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Google Tensor G3",
        ram: "8GB",
        storage: "128GB",
        display: "6.1-inch OLED",
        camera: "64MP Main + 13MP Ultra Wide",
        battery: "4492 mAh",
        os: "Android 14"
      },
      colors: ["Obsidian", "Porcelain", "Bay", "Aloe"],
      tags: ["budget", "camera", "ai", "google"]
    },
    {
      id: 8,
      name: "Xiaomi 14T Pro",
      brand: "Xiaomi",
      price: 699,
      originalPrice: 799,
      description: "Best Camera-Focused with Leica optics",
      category: "phones",
      subcategory: "mid-range",
      inStock: true,
      stockQuantity: 37,
      rating: 4.5,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "MediaTek Dimensity 9300+",
        ram: "12GB",
        storage: "256GB",
        display: "6.67-inch AMOLED 144Hz",
        camera: "50MP Leica Main + 50MP Telephoto + 12MP Ultra Wide",
        battery: "5000 mAh",
        charging: "120W HyperCharge",
        os: "HyperOS"
      },
      colors: ["Titan Black", "Titan Blue", "Titan Gray"],
      tags: ["camera", "leica", "fast-charging", "xiaomi"]
    },
    {
      id: 9,
      name: "Nothing Phone (2a)",
      brand: "Nothing",
      price: 349,
      originalPrice: 399,
      description: "Best Design-Focused Budget Phone",
      category: "phones",
      subcategory: "budget",
      inStock: true,
      stockQuantity: 45,
      rating: 4.4,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "MediaTek Dimensity 7200 Pro",
        ram: "8GB",
        storage: "128GB",
        display: "6.7-inch AMOLED 120Hz",
        camera: "50MP Main + 50MP Ultra Wide",
        battery: "5000 mAh",
        os: "Nothing OS 2.5",
        glyph: "Glyph Interface"
      },
      colors: ["White", "Black"],
      tags: ["budget", "design", "unique", "nothing"]
    },
    {
      id: 10,
      name: "Motorola Edge 50 Pro",
      brand: "Motorola",
      price: 599,
      originalPrice: 699,
      description: "Best Clean Android Experience",
      category: "phones",
      subcategory: "mid-range",
      inStock: true,
      stockQuantity: 41,
      rating: 4.4,
      reviews: 756,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
      ],
      specifications: {
        processor: "Snapdragon 7 Gen 3",
        ram: "12GB",
        storage: "256GB",
        display: "6.7-inch pOLED 144Hz",
        camera: "50MP Main + 13MP Ultra Wide + 10MP Telephoto",
        battery: "4500 mAh",
        charging: "125W TurboPower",
        os: "Android 14"
      },
      colors: ["Luxe Lavender", "Black Beauty", "Moonlight Pearl"],
      tags: ["mid-range", "clean-android", "fast-charging", "motorola"]
    }
  ]
};