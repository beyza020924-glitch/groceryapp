// No imports needed when loaded via script tags

let cart = {}; // { productId: quantity }
let activeSection = 'home-section';

document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    renderCategories();
    renderDeals();
    renderAllProducts();
    setupEventListeners();
    updateUI();
    lucide.createIcons();
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            switchPage(target);
        });
    });

    // See All Deals link
    document.getElementById('see-all-deals').onclick = () => switchPage('bonus-section');

    // Logo & Header Profile
    document.getElementById('nav-home-logo').onclick = () => switchPage('home-section');
    document.getElementById('nav-profile-top').onclick = () => switchPage('profile-section');

    // QR Modal
    document.getElementById('open-qr-modal').onclick = () => toggleModal('qr-modal', true);
    document.getElementById('close-qr-modal').onclick = () => toggleModal('qr-modal', false);
    window.onclick = (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    };

    // Search
    document.getElementById('search-input').oninput = (e) => {
        const query = e.target.value.toLowerCase();
        if (activeSection !== 'products-section') switchPage('products-section');
        const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(query));
        renderProductGrid('all-products-list', filtered);
        document.getElementById('category-title').innerText = query ? `"${query}" Sonuçları` : 'Tüm Ürünler';
    };

    // Checkout
    document.getElementById('checkout-btn').onclick = handleCheckout;
    document.getElementById('close-success-btn').onclick = () => {
        toggleModal('success-modal', false);
        cart = {};
        updateUI();
        switchPage('home-section');
    };
}

function renderCategories() {
    const container = document.getElementById('category-list');
    container.innerHTML = CATEGORIES.map(cat => `
        <div class="cat-card" style="background-color: ${cat.color};" onclick="filterByCategory('${cat.name}')">
            <img src="${cat.image}" class="cat-img">
            <span class="cat-name">${cat.name}</span>
            <i data-lucide="chevron-right"></i>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderDeals() {
    const deals = PRODUCTS.filter(p => p.isDeal);
    renderProductGrid('deals-container', deals);
}

function renderAllProducts() {
    renderProductGrid('all-products-list', PRODUCTS);
    renderProductGrid('bonus-list', PRODUCTS.filter(p => p.isDeal));
}

function renderProductGrid(containerId, products) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = products.map(p => {
        const qty = cart[p.id] || 0;
        const expandedClass = qty > 0 ? 'expanded' : '';
        const priceToDisplay = p.isDeal ? p.discountedPrice : p.price;
        const oldPriceHtml = p.isDeal ? `<span class="price-old">${p.price.toFixed(2)} TL</span>` : '';
        const isVertical = containerId === 'all-products-list';
        
        return `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}" class="product-image">
                <div class="product-info">
                    ${isVertical && p.isDeal ? `<div class="discount-tag">online Bonus</div>` : ''}
                    <div class="product-name">${p.name}</div>
                    <div class="price-row">
                        <span class="price-main">${priceToDisplay.toFixed(2)} TL</span>
                        ${oldPriceHtml}
                        ${isVertical ? `<span class="price-unit">/ adet</span>` : ''}
                    </div>
                </div>
                <div class="ah-btn-container ${expandedClass}" id="btn-container-${p.id}">
                    <button class="ah-btn trash-btn" onclick="updateQty('${p.id}', -1)">
                        <i data-lucide="${qty === 1 ? 'trash-2' : 'minus'}"></i>
                    </button>
                    <div class="ah-qty-box">${qty}</div>
                    <button class="ah-btn plus-btn" onclick="updateQty('${p.id}', 1)">
                        <i data-lucide="plus"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

// Global scope for onclick handlers
window.updateQty = (id, delta) => {
    const currentQty = cart[id] || 0;
    const newQty = currentQty + delta;
    
    if (newQty <= 0) {
        delete cart[id];
    } else {
        cart[id] = newQty;
    }
    
    updateUI();
};

window.filterByCategory = (categoryName) => {
    switchPage('products-section');
    const filtered = PRODUCTS.filter(p => p.category === categoryName);
    renderProductGrid('all-products-list', filtered);
    document.getElementById('category-title').innerText = categoryName;
};

function updateUI() {
    // Update all grids to reflect quantities
    renderDeals();
    renderAllProducts();
    
    // Update Cart Badge
    const totalQty = Object.values(cart).reduce((a, b) => a + b, 0);
    const badge = document.getElementById('cart-badge');
    badge.innerText = totalQty;
    badge.style.display = totalQty > 0 ? 'flex' : 'none';
    
    // Update Cart Page
    renderCartPage();
}

function renderCartPage() {
    const list = document.getElementById('cart-items-list');
    const empty = document.getElementById('cart-empty');
    const footer = document.getElementById('cart-footer');
    const entries = Object.entries(cart);

    if (entries.length === 0) {
        list.innerHTML = '';
        empty.style.display = 'block';
        footer.style.display = 'none';
        return;
    }

    empty.style.display = 'none';
    footer.style.display = 'block';

    let subtotal = 0;
    let total = 0;

    list.innerHTML = entries.map(([id, qty]) => {
        const p = PRODUCTS.find(prod => prod.id === id);
        const unitPrice = p.isDeal ? p.discountedPrice : p.price;
        subtotal += p.price * qty; // Based on original price for savings calculation
        total += unitPrice * qty;
        
        return `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; background: #fff; border-radius: 20px; margin-bottom: 12px; border: 1px solid #f0f0f0;">
                <div style="display:flex; align-items:center; gap:12px">
                    <img src="${p.image}" style="width:50px;height:50px;object-fit:contain">
                    <div>
                        <div style="font-weight: 800; font-size: 0.9rem;">${p.name} ${p.isDeal ? '(Bonus)' : ''}</div>
                        <div style="color: #999; font-size: 0.75rem;">${qty} x ${unitPrice.toFixed(2)} TL</div>
                    </div>
                </div>
                <div style="text-align: right;">
                    <div style="font-weight: 900;">${(unitPrice * qty).toFixed(2)} TL</div>
                    <div class="ah-btn-container expanded" style="position:relative; bottom:0; right:0; margin-top:5px; height:30px; width:80px">
                        <button class="ah-btn" onclick="updateQty('${p.id}', -1)" style="width:25px; height:25px; color:var(--ah-blue)">
                            <i data-lucide="${qty === 1 ? 'trash-2' : 'minus'}" style="width:14px"></i>
                        </button>
                        <div class="ah-qty-box" style="font-size:0.8rem">${qty}</div>
                        <button class="ah-btn" onclick="updateQty('${p.id}', 1)" style="width:25px; height:25px; background:var(--ah-blue)">
                            <i data-lucide="plus" style="width:14px; color:white"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const savings = subtotal - total;
    document.getElementById('subtotal-price').innerText = subtotal.toFixed(2) + ' TL';
    document.getElementById('savings-price').innerText = '-' + savings.toFixed(2) + ' TL';
    document.getElementById('total-price').innerText = total.toFixed(2) + ' TL';
    
    lucide.createIcons();
}

function switchPage(targetId) {
    activeSection = targetId;
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');

    document.querySelectorAll('.nav-item').forEach(i => {
        i.classList.toggle('active', i.getAttribute('data-target') === targetId);
    });

    // Header Color adjustment
    const header = document.getElementById('app-header');
    if (targetId === 'home-section') header.style.backgroundColor = 'var(--pastel-blue)';
    else if (targetId === 'bonus-section') header.style.backgroundColor = 'var(--pastel-yellow)';
    else header.style.backgroundColor = 'white';

    document.querySelector('.content-area').scrollTop = 0;
    
    if (targetId === 'cart-section') renderCartPage();
    if (targetId === 'products-section' && document.getElementById('category-title').innerText === 'Tüm Ürünler') {
        renderProductGrid('all-products-list', PRODUCTS);
    }
}

function toggleModal(modalId, show) {
    document.getElementById(modalId).style.display = show ? 'flex' : 'none';
}

function handleCheckout() {
    const msg = "Alışverişiniz tamamlandı! Beyza Şahin olarak bu hafta indirimli ürünleri tercih ederek bütçenize katkı sağladınız.";
    document.getElementById('success-message').innerText = msg;
    toggleModal('success-modal', true);
}
