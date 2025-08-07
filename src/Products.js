// E-commerce Product Data with Real Unsplash Images
export const productsData = {
  laptops: [
    {
      id: 1,
      name: "Apple MacBook Air M4",
      brand: "Apple",
      price: 1299,
      originalPrice: 1399,
      description: "Best Overall Laptop 2025 with Apple's latest M4 chip",
      rating: 4.8,
      reviews: 1247,
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
      stockQuantity: 45,
      rating: 4.8,
      reviews: 2341,
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
    },
}

    ]

    
}


