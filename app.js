import { PRODUCTS, BRANCHES, FLASH_DEALS } from './data.js';
import { getPersonalizedDeals } from './loyaltyEngine.js';

let currentBranch = BRANCHES[0];
let cart = [];
let sustainabilityScore = 4.2;

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initApp();
});

function initApp() {
    renderHome();
    setupNavigation();
    setupModals();
    setupBranchPicker();
    setupCartLogic();
}

function renderHome() {
    renderPersonalizedDeals();
    renderFlashDeals();
}

function renderPersonalizedDeals() {
    const container = document.getElementById('personalized-container');
    const deals = getPersonalizedDeals();

    container.innerHTML = deals.map(product => `
        <div class="product-card fade-in">
            <span class="bonus-tag" style="background: var(--ah-blue); position: absolute; top: 10px; left: 10px; z-index: 10;">SENİN İÇİN</span>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div style="font-size: 0.85rem; font-weight: 700; height: 36px; overflow: hidden; margin-bottom: 8px;">${product.name}</div>
            <div style="margin-top: auto;">
                <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                    <div>
                        <div class="price-sub">₺${product.price.toFixed(2)}</div>
                        <div class="price-main">₺${(product.discountedPrice || (product.price * 0.75)).toFixed(2)}</div>
                    </div>
                    <button class="add-btn-circle" data-id="${product.id}"><i data-lucide="plus"></i></button>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderFlashDeals() {
    const container = document.getElementById('flash-container');
    const deals = FLASH_DEALS[currentBranch.id] || [];

    container.innerHTML = deals.map(deal => {
        const product = PRODUCTS.find(p => p.id === deal.sku);
        const isUrgent = deal.stock <= 3;
        const finalPrice = product.price * (1 - deal.discount);
        return `
            <div class="product-card fade-in">
                <span class="bonus-tag" style="background: var(--danger); position: absolute; top: 10px; left: 10px; z-index: 10;">SON ŞANS</span>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div style="font-size: 0.85rem; font-weight: 700; height: 36px; overflow: hidden; margin-bottom: 8px;">${product.name}</div>
                <div style="margin-top: auto;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                        <div>
                            <div class="price-sub">₺${product.price.toFixed(2)}</div>
                            <div class="price-main" style="color: var(--danger);">₺${finalPrice.toFixed(2)}</div>
                        </div>
                        <button class="add-btn-circle" data-id="${product.id}" style="background: var(--danger);"><i data-lucide="plus"></i></button>
                    </div>
                    <div class="stock-warning">
                        <i data-lucide="zap" style="width: 10px; fill: var(--ah-orange); color: var(--ah-orange);"></i>
                        ${isUrgent ? 'AZALIYOR: ' : ''}${deal.stock} Adet
                    </div>
                </div>
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            if (!target) return;

            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            sections.forEach(s => s.classList.remove('active'));
            const activeSection = document.getElementById(target);
            activeSection.classList.add('active');

            if (target === 'mylist-section') renderCart();
            if (target === 'bonus-section') renderBonusSection();
        });
    });
}

function renderBonusSection() {
    const container = document.getElementById('all-bonus-items');
    container.innerHTML = PRODUCTS.map(product => `
        <div class="product-card">
            <span class="bonus-tag">BONUS</span>
            <img src="${product.image}" class="product-image">
            <div style="font-size: 0.8rem; font-weight: 700; height: 32px; overflow: hidden;">${product.name}</div>
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: auto;">
                <div>
                    <div class="price-sub">₺${product.price.toFixed(2)}</div>
                    <div class="price-main">₺${product.discountedPrice.toFixed(2)}</div>
                </div>
                <button class="add-btn-circle" data-id="${product.id}"><i data-lucide="plus"></i></button>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function setupModals() {
    const modal = document.getElementById('bonuskaart-modal');
    const openHeader = document.getElementById('open-scan-header');
    const openFooter = document.getElementById('open-scan-footer');
    const closeBtn = document.getElementById('close-modal');
    const simulateBtn = document.getElementById('simulate-scan');

    const openModal = () => modal.style.display = 'flex';
    const closeModal = () => modal.style.display = 'none';

    if (openHeader) openHeader.onclick = openModal;
    if (openFooter) openFooter.onclick = openModal;
    if (closeBtn) closeBtn.onclick = closeModal;

    if (simulateBtn) {
        simulateBtn.onclick = () => {
            alert('Geçen haftaki alışverişiniz analiz edildi, size özel indirimler tanımlandı!');
            closeModal();
            sustainabilityScore += 0.5;
            document.getElementById('sustainability-value').innerText = `${sustainabilityScore.toFixed(1)} kg`;
        };
    }
}

function setupBranchPicker() {
    const trigger = document.getElementById('branch-trigger');
    if (trigger) {
        trigger.onclick = () => {
            const nextIdx = (BRANCHES.findIndex(b => b.id === currentBranch.id) + 1) % BRANCHES.length;
            currentBranch = BRANCHES[nextIdx];
            document.getElementById('current-branch-name').innerText = currentBranch.name;
            renderFlashDeals();
        };
    }
}

function setupCartLogic() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-btn-circle');
        if (btn) {
            const id = btn.getAttribute('data-id');
            const product = PRODUCTS.find(p => p.id === id);
            cart.push({ ...product, cartId: Date.now() });
            updateCartBadge();
            
            // Visual feedback
            btn.innerHTML = '<i data-lucide="check"></i>';
            btn.style.background = '#4CAF50';
            setTimeout(() => {
                btn.innerHTML = '<i data-lucide="plus"></i>';
                btn.style.background = btn.closest('.product-card').querySelector('.bonus-tag').style.background === 'var(--danger)' ? 'var(--danger)' : 'var(--ah-blue)';
                lucide.createIcons();
            }, 1000);
            lucide.createIcons();
        }
    });
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.innerText = cart.length;
        badge.style.display = cart.length > 0 ? 'block' : 'none';
    }
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty-state');
    const summaryBox = document.getElementById('cart-summary-box');

    if (cart.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        summaryBox.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    summaryBox.style.display = 'block';

    let total = 0;
    let originalTotal = 0;

    container.innerHTML = cart.map((item, index) => {
        const currentPrice = item.discountedPrice || item.price;
        total += currentPrice;
        originalTotal += item.price;
        return `
            <div class="summary-row" style="background: white; padding: 16px; border-radius: 12px; margin-bottom: 12px; border: 1px solid #eee; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; gap: 12px; align-items: center;">
                    <img src="${item.image}" style="width: 60px; height: 60px; border-radius: 12px; object-fit: cover;">
                    <div>
                        <div style="font-weight: 800; font-size: 0.95rem;">${item.name}</div>
                        <div style="display: flex; gap: 8px; align-items: baseline;">
                            <span style="font-weight: 900; color: var(--ah-orange);">₺${currentPrice.toFixed(2)}</span>
                            <span style="font-size: 0.75rem; color: #999; text-decoration: line-through;">₺${item.price.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <button class="remove-item" data-index="${index}" style="border: none; background: #fff5f5; color: var(--danger); padding: 10px; border-radius: 10px; cursor: pointer;">
                    <i data-lucide="trash-2" style="width: 20px;"></i>
                </button>
            </div>
        `;
    }).join('');

    document.getElementById('subtotal').innerText = `₺${originalTotal.toFixed(2)}`;
    const savings = originalTotal - total;
    document.getElementById('savings').innerText = `-₺${savings.toFixed(2)}`;
    document.getElementById('total-price').innerText = `₺${total.toFixed(2)}`;
    
    lucide.createIcons();

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.onclick = () => {
            const idx = btn.getAttribute('data-index');
            cart.splice(idx, 1);
            renderCart();
            updateCartBadge();
        };
    });
}
