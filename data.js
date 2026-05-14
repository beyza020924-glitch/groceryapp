const PRODUCTS = [
    { id: 'p1', name: 'Organik Süt 1L', category: 'Süt & Kahvaltı', price: 34.90, image: 'https://images.unsplash.com/photo-1550583724-1255818c0533?q=80&w=200&auto=format&fit=crop' },
    { id: 'p2', name: 'Yumurta 10\'lu', category: 'Süt & Kahvaltı', price: 42.50, image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=200&auto=format&fit=crop' },
    { id: 'p3', name: 'Salkım Domates', category: 'Meyve & Sebze', price: 28.00, image: 'https://images.unsplash.com/photo-1590621466441-8602f0677227?q=80&w=200&auto=format&fit=crop' },
    { id: 'p4', name: 'Avokado Adet', category: 'Meyve & Sebze', price: 19.90, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=200&auto=format&fit=crop' },
    { id: 'p5', name: 'Filtre Kahve 250g', category: 'İçecek', price: 120.00, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=200&auto=format&fit=crop' },
    { id: 'p6', name: 'Tam Buğday Ekmeği', category: 'Fırın', price: 15.00, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=200&auto=format&fit=crop' },
];

const BRANCHES = [
    { id: 'b1', name: 'Kadıköy Merkez', lat: 40.991, lng: 29.027 },
    { id: 'b2', name: 'Moda Sahil', lat: 40.985, lng: 29.032 },
    { id: 'b3', name: 'Ataşehir Batı', lat: 40.995, lng: 29.112 },
];

// Simulated data from previous weeks
const USER_HISTORY = [
    { sku: 'p1', quantity: 2, week: 1 },
    { sku: 'p1', quantity: 3, week: 2 },
    { sku: 'p2', quantity: 1, week: 1 },
    { sku: 'p2', quantity: 1, week: 2 },
    { sku: 'p3', quantity: 4, week: 2 },
];

// Branch-specific flash deals (expiry approaching)
const FLASH_DEALS = {
    'b1': [
        { sku: 'p3', discount: 0.5, stock: 12, expiry: 'Bugün 20:00' },
        { sku: 'p6', discount: 0.7, stock: 5, expiry: 'Bugün 21:00' }
    ],
    'b2': [
        { sku: 'p4', discount: 0.4, stock: 8, expiry: 'Yarın 09:00' }
    ]
};

export { PRODUCTS, BRANCHES, USER_HISTORY, FLASH_DEALS };
