const PRODUCTS = [
    // --- MANAV ---
    { id: 'p1', name: 'Amasya Elması 1kg', category: 'Manav', price: 45.00, discountedPrice: 35.00, image: './images/apple.png', isDeal: true },
    { id: 'p3', name: 'Salkım Domates 1kg', category: 'Manav', price: 38.00, discountedPrice: 28.00, image: './images/tomato.png', isDeal: false },
    { id: 'p8', name: 'İthal Muz 1kg', category: 'Manav', price: 85.00, discountedPrice: 75.00, image: './images/banana.png', isDeal: false },
    { id: 'p12', name: 'Tarla Patates 2kg', category: 'Manav', price: 45.00, discountedPrice: 36.00, image: './images/potato.png', isDeal: false },
    { id: 'p13', name: 'Kuru Soğan 2kg', category: 'Manav', price: 35.00, discountedPrice: 26.00, image: './images/onion.png', isDeal: false },
    { id: 'p14', name: 'Taze Çilek 500g', category: 'Manav', price: 75.00, discountedPrice: 59.00, image: './images/strawberry.png', isDeal: false },
    { id: 'p15', name: 'Çengelköy Salatalık 1kg', category: 'Manav', price: 40.00, discountedPrice: 32.00, image: './images/cucumber.png', isDeal: false },
    { id: 'p16', name: 'File Limon 500g', category: 'Manav', price: 28.00, discountedPrice: 22.00, image: './images/lemon.png', isDeal: false },
    { id: 'sp_tp2', name: 'Taze Hazır Salata: Sezar & Akdeniz Yeşillikleri 250g', category: 'Manav', price: 75.00, discountedPrice: 62.00, image: './images/fresh_salad.png', isDeal: false, tags: ['Taze Paketler'] },

    // --- KASAP ---
    { id: 'p4', name: 'Dana Kıyma %20 Yağlı 500g', category: 'Kasap', price: 260.00, discountedPrice: 225.00, image: './images/minced_meat.png', isDeal: true },
    { id: 'p17', name: 'Dana Kuşbaşı 500g (Migros/Uzman Kasap)', category: 'Kasap', price: 290.00, discountedPrice: 255.00, image: './images/beef_cubes.png', isDeal: false },
    { id: 'p18', name: 'Tavuk Bonfile / Göğüs 1kg (Banvit)', category: 'Kasap', price: 210.00, discountedPrice: 179.00, image: './images/chicken_breast.png', isDeal: false },
    { id: 'p19', name: 'Bütün Poşetli Tavuk kg (Şenpiliç)', category: 'Kasap', price: 98.00, discountedPrice: 82.00, image: './images/whole_chicken.png', isDeal: false },
    { id: 'p20', name: 'Tekirdağ Kasap Köfte 400g (Kırtepe)', category: 'Kasap', price: 185.00, discountedPrice: 159.00, image: './images/meatballs.png', isDeal: false, tags: ['Piknik'] },

    // --- SÜT & KAHVALTI ---
    { id: 'p2', name: 'Tam Yağlı Süt 1L (Sütaş / Dost)', category: 'Süt & Kahvaltı', price: 36.00, discountedPrice: 29.50, image: './images/milk.png', isDeal: true },
    { id: 'p7_egg', name: 'Gezen Tavuk Yumurtası 15\'li (A101/BİM)', category: 'Süt & Kahvaltı', price: 78.00, discountedPrice: 62.00, image: './images/eggs.png', isDeal: false },
    { id: 'p21', name: 'Taze Kaşar Peyniri 500g (Sütaş/İçim)', category: 'Süt & Kahvaltı', price: 165.00, discountedPrice: 139.00, image: './images/kasar_cheese.png', isDeal: false },
    { id: 'p22', name: 'Süzme Peynir 500g (Pınar/Sütaş)', category: 'Süt & Kahvaltı', price: 95.00, discountedPrice: 79.00, image: './images/white_cheese.png', isDeal: false },
    { id: 'p23', name: 'Kaymaklı Doğal Yoğurt 1500g (Eker)', category: 'Süt & Kahvaltı', price: 88.00, discountedPrice: 72.00, image: './images/yogurt.png', isDeal: false },
    { id: 'p24', name: 'Geleneksel Tereyağı 250g (Torku)', category: 'Süt & Kahvaltı', price: 125.00, discountedPrice: 105.00, image: './images/butter.png', isDeal: false },
    { id: 'p25', name: 'Siyah Zeytin XS (Marmarabirlik) 500g', category: 'Süt & Kahvaltı', price: 110.00, discountedPrice: 89.00, image: './images/olives.png', isDeal: false },
    { id: 'p26', name: 'Torku Banada Fındık Kreması 400g', category: 'Süt & Kahvaltı', price: 95.00, discountedPrice: 78.00, image: './images/hazelnut_spread.png', isDeal: false },
    { id: 'sp_sb1', name: 'Fropie %100 Fıstık Ezmesi 350g', category: 'Süt & Kahvaltı', price: 115.00, discountedPrice: 92.00, image: './images/peanut_butter.png', isDeal: false, tags: ['Sporcu Besinleri'] },
    { id: 'sp_sb3', name: 'İçim Fit Yüksek Proteinli Kakaolu Süt 500ml', category: 'Süt & Kahvaltı', price: 45.00, discountedPrice: 36.00, image: './images/protein_milk.png', isDeal: false, tags: ['Sporcu Besinleri'] },

    // --- FIRIN ---
    { id: 'p5', name: 'Tam Buğday Ekmeği 400g (Untaş)', category: 'Fırın', price: 22.00, discountedPrice: 16.00, image: './images/bread.png', isDeal: false },
    { id: 'p10', name: 'Taze Çikolatalı Yaş Pasta (6 kişilik)', category: 'Fırın', price: 280.00, discountedPrice: 235.00, image: './images/cake.png', isDeal: false, tags: ['İyi ki Doğdun'] },
    { id: 'sp_bd1', name: 'Meyveli Doğum Günü Pastası (8 kişilik)', category: 'Fırın', price: 320.00, discountedPrice: 270.00, image: './images/fruit_cake.png', isDeal: false, tags: ['İyi ki Doğdun'] },
    { id: 'sp_bd2', name: 'Rengarenk Doğum Günü Mumları 12\'li', category: 'Fırın', price: 45.00, discountedPrice: 35.00, image: './images/candles.png', isDeal: false, tags: ['İyi ki Doğdun'] },
    { id: 'p27', name: 'Susamlı Çıtır Simit 2\'li', category: 'Fırın', price: 25.00, discountedPrice: 20.00, image: './images/simit.png', isDeal: false },
    { id: 'p28', name: 'Tost Ekmeği 500g (Eti Ekmek/Untaş)', category: 'Fırın', price: 38.00, discountedPrice: 29.00, image: './images/toast_bread.png', isDeal: false },
    { id: 'p29', name: 'Fransız Tereyağlı Kruvasan 2\'li', category: 'Fırın', price: 48.00, discountedPrice: 38.00, image: './images/croissant.png', isDeal: false, tags: ['Taze Paketler'] },
    { id: 'sp_tp3', name: 'Taze Hindi Füme & Kaşarlı Sandviç 200g', category: 'Fırın', price: 65.00, discountedPrice: 52.00, image: './images/fresh_sandwich.png', isDeal: false, tags: ['Taze Paketler'] },

    // --- TEMEL GİDA ---
    { id: 'p30', name: 'Komili / Yudum Ayçiçek Yağı 5L', category: 'Temel Gıda', price: 465.00, discountedPrice: 395.00, image: './images/sunflower_oil.png', isDeal: false },
    { id: 'p31', name: 'Çaykur Rize Turist Çayı 1kg', category: 'Temel Gıda', price: 349.00, discountedPrice: 309.00, image: './images/tea_pack.png', isDeal: true },
    { id: 'p32', name: 'Balküpü / Doğuş Toz Şeker 5kg', category: 'Temel Gıda', price: 235.00, discountedPrice: 219.00, image: './images/sugar_bag.png', isDeal: false },
    { id: 'p33', name: 'Pilavlık Baldo Pirinç 1kg (Reis/Duru)', category: 'Temel Gıda', price: 98.00, discountedPrice: 82.00, image: './images/rice.png', isDeal: false },
    { id: 'p34', name: 'Kırmızı Mercimek 1kg (Duru/Efsane)', category: 'Temel Gıda', price: 55.00, discountedPrice: 44.00, image: './images/lentils.png', isDeal: false },
    { id: 'p35', name: 'Barilla Spagetti Makarna 500g', category: 'Temel Gıda', price: 38.00, discountedPrice: 28.00, image: './images/spaghetti.png', isDeal: false },
    { id: 'p36', name: 'Filiz İnce Uzun Makarna 500g', category: 'Temel Gıda', price: 24.00, discountedPrice: 18.50, image: './images/macaroni.png', isDeal: false },
    { id: 'p37', name: 'Söke / Bizim Baklavalık Un 5kg', category: 'Temel Gıda', price: 125.00, discountedPrice: 99.00, image: './images/flour.png', isDeal: false },
    { id: 'p38', name: 'Tat Domates Salçası 830g', category: 'Temel Gıda', price: 58.00, discountedPrice: 46.00, image: './images/salca.png', isDeal: false },
    { id: 'sp_tp1', name: 'Pratik Taze Yemek: Etli Kuru Fasulye & Pilav 400g', category: 'Temel Gıda', price: 120.00, discountedPrice: 98.00, image: './images/ready_meal.png', isDeal: false, tags: ['Taze Paketler'] },
    { id: 'sp_sb2', name: 'Eti Lifalif Yulaf Ezmesi 500g', category: 'Temel Gıda', price: 48.00, discountedPrice: 38.00, image: './images/oatmeal.png', isDeal: false, tags: ['Sporcu Besinleri'] },

    // --- İÇECEK ---
    { id: 'p6', name: 'Cappy %100 Portakal Suyu 1L', category: 'İçecek', price: 48.00, discountedPrice: 39.00, image: './images/juice.png', isDeal: false },
    { id: 'p7_bev', name: 'Mehmet Efendi Türk Kahvesi 100g', category: 'İçecek', price: 55.00, discountedPrice: 46.00, image: './images/turkish_coffee.png', isDeal: true, tags: ['Türk Kahvesi'] },
    { id: 'sp_tk1', name: 'Porselen Türk Kahvesi Fincan Takımı 6\'lı', category: 'İçecek', price: 280.00, discountedPrice: 240.00, image: './images/coffee_cups.png', isDeal: false, tags: ['Türk Kahvesi'] },
    { id: 'sp_tk2', name: 'Geleneksel Bakır Türk Kahvesi Cezvesi', category: 'İçecek', price: 145.00, discountedPrice: 120.00, image: './images/cezve.png', isDeal: false, tags: ['Türk Kahvesi'] },
    { id: 'p39', name: 'Coca-Cola Original Tat 1.5L', category: 'İçecek', price: 52.00, discountedPrice: 42.00, image: './images/coca_cola.png', isDeal: false, tags: ['Piknik', 'Film Eşlikçileri'] },
    { id: 'p40', name: 'Beypazarı Doğal Maden Suyu 6x200ml', category: 'İçecek', price: 36.00, discountedPrice: 28.50, image: './images/soda.png', isDeal: false, tags: ['Piknik'] },
    { id: 'p41', name: 'Fuse Tea Şeftali Soğuk Çay 1L', category: 'İçecek', price: 38.00, discountedPrice: 29.50, image: './images/icetea.png', isDeal: false },
    { id: 'p42', name: 'Doğanay Acılı Şalgam Suyu 1L', category: 'İçecek', price: 32.00, discountedPrice: 24.00, image: './images/salgam.png', isDeal: false },

    // --- ATIŞTIRMALIK ---
    { id: 'p9', name: 'Zuber Protein Bar 40g', category: 'Atıştırmalık', price: 42.00, discountedPrice: 32.00, image: './images/protein_bar.png', isDeal: false, tags: ['Sporcu Besinleri'] },
    { id: 'p11', name: 'Film Eşlikçisi Mısır 200g', category: 'Atıştırmalık', price: 28.00, discountedPrice: 20.00, image: './images/popcorn.png', isDeal: false, tags: ['Film Eşlikçileri'] },
    { id: 'sp_tk3', name: 'Hacı Bekir Fıstıklı Türk Lokumu 250g', category: 'Atıştırmalık', price: 95.00, discountedPrice: 79.00, image: './images/lokum.png', isDeal: false, tags: ['Türk Kahvesi'] },
    { id: 'p43', name: 'Eti Tutku Çikolatalı Bisküvi 210g', category: 'Atıştırmalık', price: 32.00, discountedPrice: 24.00, image: './images/tutku.png', isDeal: false, tags: ['Film Eşlikçileri'] },
    { id: 'p44', name: 'Ülker Çikolatalı Gofret 5\'li Paket', category: 'Atıştırmalık', price: 45.00, discountedPrice: 35.00, image: './images/ulker_gofret.png', isDeal: true, tags: ['Film Eşlikçileri'] },
    { id: 'p45', name: 'Lay\'s Klasik Parti Boy Cips 150g', category: 'Atıştırmalık', price: 55.00, discountedPrice: 44.00, image: './images/lays.png', isDeal: false, tags: ['Film Eşlikçileri', 'Piknik'] },
    { id: 'p46', name: 'Doritos Nacho Peynirli Cips 150g', category: 'Atıştırmalık', price: 55.00, discountedPrice: 44.00, image: './images/doritos.png', isDeal: false, tags: ['Film Eşlikçileri', 'Piknik'] },
    { id: 'p47', name: 'Peyman Çifte Kavrulmuş Fındık 150g', category: 'Atıştırmalık', price: 85.00, discountedPrice: 69.00, image: './images/hazelnuts.png', isDeal: false },
    { id: 'p48', name: 'Haribo Altın Ayıcık Jelibon 100g', category: 'Atıştırmalık', price: 30.00, discountedPrice: 22.00, image: './images/haribo.png', isDeal: false, tags: ['İyi ki Doğdun'] },

    // --- TEMİZLİK ---
    { id: 'p8_cln', name: 'Piknik Seti (Tabak/Bardak 20\'li)', category: 'Temizlik', price: 110.00, discountedPrice: 85.00, image: './images/picnic_set.png', isDeal: false, tags: ['Piknik'] },
    { id: 'sp_pk1', name: 'Meşe Mangal Kömürü 2kg & Çıra Paket', category: 'Temizlik', price: 135.00, discountedPrice: 110.00, image: './images/charcoal.png', isDeal: false, tags: ['Piknik'] },
    { id: 'p49', name: 'Fairy Hepsi Bir Arada Deterjan 1L', category: 'Temizlik', price: 115.00, discountedPrice: 89.00, image: './images/fairy.png', isDeal: false },
    { id: 'p50', name: 'Ariel Dağ Esintisi Deterjan 5kg', category: 'Temizlik', price: 340.00, discountedPrice: 279.00, image: './images/ariel.png', isDeal: false },
    { id: 'p51', name: 'Domestos Çam Ferahlığı 810g', category: 'Temizlik', price: 62.00, discountedPrice: 48.00, image: './images/domestos.png', isDeal: false },
    { id: 'p52', name: 'Papia Tuvalet Kağıdı 16\'lı 3 Katlı', category: 'Temizlik', price: 195.00, discountedPrice: 149.00, image: './images/toilet_paper.png', isDeal: false },
    { id: 'p53', name: 'Familia Plus Kağıt Havlu 6\'lı', category: 'Temizlik', price: 110.00, discountedPrice: 85.00, image: './images/paper_towel.png', isDeal: false },

    // --- KİŞİSEL BAKIM ---
    { id: 'p54', name: 'Elidor İpeksi Şampuan 400ml', category: 'Kişisel Bakım', price: 110.00, discountedPrice: 82.00, image: './images/shampoo.png', isDeal: false },
    { id: 'p55', name: 'Ipana Beyazlık Diş Macunu 75ml', category: 'Kişisel Bakım', price: 85.00, discountedPrice: 59.00, image: './images/toothpaste.png', isDeal: false },
    { id: 'p56', name: 'Duru Geleneksel Saf Sabun 4x150g', category: 'Kişisel Bakım', price: 75.00, discountedPrice: 55.00, image: './images/soap.png', isDeal: false },
    { id: 'p57', name: 'Nivea Duş Jeli 500ml', category: 'Kişisel Bakım', price: 130.00, discountedPrice: 95.00, image: './images/shower_gel.png', isDeal: false },

    // --- SON ŞANS (LAST CHANCE / EXPIRY DISCOUNTS) ---
    { id: 'lc1', name: 'Organik Süt 1L (Dost)', category: 'Süt & Kahvaltı', price: 40.00, discountedPrice: 20.00, image: './images/milk.png', isDeal: false, isLastChance: true, expiry: 'SKT: Bugün', stock: 3, stockMax: 10, discountText: '%50 İndirim', branch: 'Marketim Caddebostan Sahil', distance: '350m' },
    { id: 'lc2', name: 'Dilimli Kaşar Peyniri 500g', category: 'Süt & Kahvaltı', price: 120.00, discountedPrice: 48.00, image: './images/kasar_cheese.png', isDeal: false, isLastChance: true, expiry: 'SKT: Yarın', stock: 5, stockMax: 15, discountText: '%60 İndirim', branch: 'Marketim Bağdat Caddesi', distance: '850m' },
    { id: 'lc3', name: 'Sütlü Çikolata Paketi (Eti)', category: 'Atıştırmalık', price: 80.00, discountedPrice: 24.00, image: './images/chocolate_bar.png', isDeal: false, isLastChance: true, expiry: 'SKT: Bugün', stock: 2, stockMax: 8, discountText: '%70 İndirim', branch: 'Marketim Caddebostan Sahil', distance: '350m' },
    { id: 'lc4', name: 'Tam Buğday Unlu Ekmek', category: 'Fırın', price: 25.00, discountedPrice: 10.00, image: './images/bread.png', isDeal: false, isLastChance: true, expiry: 'SKT: 2 Gün Sonra', stock: 8, stockMax: 20, discountText: '%60 İndirim', branch: 'Marketim Bağdat Caddesi', distance: '850m' },
    { id: 'lc5', name: 'Danone Çilekli Yoğurt 4\'lü', category: 'Süt & Kahvaltı', price: 65.00, discountedPrice: 26.00, image: './images/yogurt.png', isDeal: false, isLastChance: true, expiry: 'SKT: Bugün', stock: 4, stockMax: 10, discountText: '%60 İndirim', branch: 'Marketim Caddebostan Sahil', distance: '350m' },
    { id: 'lc6', name: 'Banvit Piliç Salam 500g', category: 'Kasap', price: 90.00, discountedPrice: 36.00, image: './images/salam.png', isDeal: false, isLastChance: true, expiry: 'SKT: Yarın', stock: 6, stockMax: 12, discountText: '%60 İndirim', branch: 'Marketim Bağdat Caddesi', distance: '850m' }
];

const CATEGORIES = [
    { id: 'cat1', name: 'Manav', icon: 'apple', color: '#e8f5e9', image: './images/apple.png' },
    { id: 'cat2', name: 'Kasap', icon: 'beef', color: '#fde2e4', image: './images/minced_meat.png' },
    { id: 'cat3', name: 'Süt & Kahvaltı', icon: 'coffee', color: '#e0f7fa', image: './images/milk.png' },
    { id: 'cat4', name: 'Fırın', icon: 'croissant', color: '#fff3e0', image: './images/bread.png' },
    { id: 'cat5', name: 'Temel Gıda', icon: 'shopping-bag', color: '#fffde7', image: './images/sunflower_oil.png' },
    { id: 'cat6', name: 'İçecek', icon: 'cup-soda', color: '#f3e5f5', image: './images/juice.png' },
    { id: 'cat7', name: 'Atıştırmalık', icon: 'cookie', color: '#fff8e1', image: './images/ulker_gofret.png' },
    { id: 'cat8', name: 'Temizlik', icon: 'sparkles', color: '#eceff1', image: './images/cleaning_supplies.png' },
    { id: 'cat9', name: 'Kişisel Bakım', icon: 'heart', color: '#fce4ec', image: './images/shower_gel.png' }
];
