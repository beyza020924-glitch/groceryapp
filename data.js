const PRODUCTS = [
    { id: 'p1', name: 'AH Elmalar (File) 1kg', category: 'Manav', price: 45.00, discountedPrice: 35.00, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?q=80&w=300', isDeal: true },
    { id: 'p2', name: 'AH Taze Süt 1L', category: 'Süt & Kahvaltı', price: 32.00, discountedPrice: 28.50, image: 'https://images.unsplash.com/photo-1550583724-1255818c0533?q=80&w=300', isDeal: false },
    { id: 'p3', name: 'Salkım Domates 500g', category: 'Manav', price: 28.00, discountedPrice: 18.00, image: 'https://images.unsplash.com/photo-1590621466441-8602f0677227?q=80&w=300', isDeal: true },
    { id: 'p4', name: 'Dana Kıyma 500g', category: 'Kasap', price: 280.00, discountedPrice: 245.00, image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=300', isDeal: true },
    { id: 'p5', name: 'Tam Buğday Ekmek 400g', category: 'Fırın', price: 18.00, discountedPrice: 12.00, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300', isDeal: true },
    { id: 'p6', name: 'AH Portakal Suyu 1L', category: 'İçecek', price: 42.00, discountedPrice: 34.00, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=300', isDeal: false },
    { id: 'p7', name: 'Organik Yumurta 10\'lu', category: 'Süt & Kahvaltı', price: 65.00, discountedPrice: 52.00, image: 'https://images.unsplash.com/photo-1582722872445-44c59ebc41dd?q=80&w=300', isDeal: false },
    { id: 'p8', name: 'AH Muz (İthal) kg', category: 'Manav', price: 75.00, discountedPrice: 68.00, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=300', isDeal: false },
    { id: 'p9', name: 'Atıştırmalık Kuruyemiş', category: 'Atıştırmalık', price: 48.00, discountedPrice: 38.00, image: 'https://images.unsplash.com/photo-1549007994-cb92ca972694?q=80&w=300', isDeal: true },
    { id: 'p10', name: 'Bulaşık Deterjanı 1L', category: 'Temizlik', price: 55.00, discountedPrice: 45.00, image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=300', isDeal: false },
    { id: 'p11', name: 'Çilekli Yoğurt 500g', category: 'Süt & Kahvaltı', price: 38.00, discountedPrice: 30.00, image: 'https://images.unsplash.com/photo-1571212247484-0ef7d214a630?q=80&w=300', isDeal: false },
    { id: 'p12', name: 'Tavuk Göğsü 400g', category: 'Kasap', price: 120.00, discountedPrice: 95.00, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=300', isDeal: true }
];

const CATEGORIES = [
    { id: 'cat1', name: 'Manav', icon: 'apple', color: '#7bc9b6', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=150' },
    { id: 'cat2', name: 'Kasap', icon: 'beef', color: '#fde2e4', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc822?q=80&w=150' },
    { id: 'cat3', name: 'Süt & Kahvaltı', icon: 'coffee', color: '#9cd7e2', image: 'https://images.unsplash.com/photo-1550583724-1255818c0533?q=80&w=150' },
    { id: 'cat4', name: 'Fırın', icon: 'croissant', color: '#ffeadb', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150' },
    { id: 'cat5', name: 'İçecek', icon: 'cup-soda', color: '#e2daff', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=150' },
    { id: 'cat6', name: 'Atıştırmalık', icon: 'cookie', color: '#f9e48c', image: 'https://images.unsplash.com/photo-1549007994-cb92ca972694?q=80&w=150' },
    { id: 'cat7', name: 'Temizlik', icon: 'sparkles', color: '#f1f1f1', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=150' }
];
