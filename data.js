const PRODUCTS = [
    { id: 'p1', name: 'AH Elmalar (File)', category: 'Manav', price: 3.50, discountedPrice: 2.50, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?q=80&w=200&auto=format&fit=crop', isNearExpiry: false },
    { id: 'p2', name: 'AH Portakal Suyu 1L', category: 'İçecek', price: 4.00, discountedPrice: 3.20, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=200&auto=format&fit=crop', isNearExpiry: false },
    { id: 'p3', name: 'AH Salkım Domates', category: 'Manav', price: 2.80, discountedPrice: 1.80, image: 'https://images.unsplash.com/photo-1590621466441-8602f0677227?q=80&w=200&auto=format&fit=crop', isNearExpiry: true },
    { id: 'p4', name: 'AH Avokado 2\'li', category: 'Manav', price: 3.20, discountedPrice: 2.40, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=200&auto=format&fit=crop', isNearExpiry: false },
    { id: 'p5', name: 'AH Tam Buğday Ekmek', category: 'Fırın', price: 1.80, discountedPrice: 1.20, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=200&auto=format&fit=crop', isNearExpiry: true },
    { id: 'p6', name: 'AH Dana Kıyma 500g', category: 'Kasap', price: 12.00, discountedPrice: 8.50, image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=200&auto=format&fit=crop', isNearExpiry: true },
    { id: 'p7', name: 'AH Organik Süt 1L', category: 'Süt & Kahvaltı', price: 2.10, discountedPrice: 1.75, image: 'https://images.unsplash.com/photo-1550583724-1255818c0533?q=80&w=200&auto=format&fit=crop', isNearExpiry: false },
    { id: 'p8', name: 'AH Yoğurt 500g', category: 'Süt & Kahvaltı', price: 2.50, discountedPrice: 1.90, image: 'https://images.unsplash.com/photo-1571212247484-0ef7d214a630?q=80&w=200&auto=format&fit=crop', isNearExpiry: false },
    { id: 'p9', name: 'AH Muz (İthal)', category: 'Manav', price: 2.90, discountedPrice: 2.20, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=200&auto=format&fit=crop', isNearExpiry: false },
    { id: 'p10', name: 'AH Tavuk Göğsü 400g', category: 'Kasap', price: 7.80, discountedPrice: 5.90, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=200&auto=format&fit=crop', isNearExpiry: true },
];

const BRANCHES = [
    { id: 'b1', name: 'Kadıköy Merkez' },
    { id: 'b2', name: 'Moda Sahil' },
    { id: 'b3', name: 'Ataşehir Batı' },
];

const USER_HISTORY = [
    { sku: 'p1', quantity: 4 },
    { sku: 'p7', quantity: 3 },
    { sku: 'p2', quantity: 2 },
];

const FLASH_DEALS = {
    'b1': [
        { sku: 'p3', discount: 0.4, stock: 3, expiry: 'Bugün 20:00' },
        { sku: 'p6', discount: 0.6, stock: 1, expiry: 'Bugün 21:00' },
        { sku: 'p10', discount: 0.5, stock: 2, expiry: 'Bugün 19:00' }
    ],
    'b2': [
        { sku: 'p4', discount: 0.3, stock: 5, expiry: 'Yarın 09:00' },
        { sku: 'p5', discount: 0.5, stock: 4, expiry: 'Bugün 22:00' }
    ],
    'b3': [
        { sku: 'p10', discount: 0.4, stock: 8, expiry: 'Yarın 12:00' }
    ]
};

export { PRODUCTS, BRANCHES, USER_HISTORY, FLASH_DEALS };
