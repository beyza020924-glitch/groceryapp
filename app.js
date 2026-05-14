import { PRODUCTS, BRANCHES, FLASH_DEALS } from './data.js';
import { getPersonalizedDeals } from './loyaltyEngine.js';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initApp();
});

let currentBranch = BRANCHES[0];

function initApp() {
    renderPersonalizedDeals();
    renderFlashDeals();
    setupBranchPicker();
}

function renderPersonalizedDeals() {
    const container = document.getElementById('personalized-container');
    const deals = getPersonalizedDeals();

    container.innerHTML = deals.map(product => `
        <div class="product-card glass fade-in">
            <div class="product-badge badge-discount">-%${product.discount * 100} Özel</div>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div style="font-size: 0.85rem; font-weight: 600; margin-bottom: 4px;">${product.name}</div>
            <div class="price-container">
                <span class="current-price">₺${(product.price * (1 - product.discount)).toFixed(2)}</span>
                <span class="old-price">₺${product.price.toFixed(2)}</span>
            </div>
            <div style="font-size: 0.65rem; color: var(--primary-dark); margin-top: 4px; font-weight: 500;">
                <i data-lucide="sparkles" style="width: 10px; height: 10px;"></i> Gelecek Hafta
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

function renderFlashDeals() {
    const container = document.getElementById('flash-container');
    const deals = FLASH_DEALS[currentBranch.id] || [];

    if (deals.length === 0) {
        container.innerHTML = '<p style="padding: 20px; color: var(--text-muted); font-size: 0.85rem;">Bu şubede şu an flaş indirim bulunmuyor.</p>';
        return;
    }

    container.innerHTML = deals.map(deal => {
        const product = PRODUCTS.find(p => p.id === deal.sku);
        return `
            <div class="product-card glass fade-in" style="border: 1px solid rgba(0, 123, 255, 0.2);">
                <div class="product-badge badge-flash">SON ŞANS %${deal.discount * 100}</div>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div style="font-size: 0.85rem; font-weight: 600; margin-bottom: 4px;">${product.name}</div>
                <div class="price-container">
                    <span class="current-price" style="color: var(--secondary);">₺${(product.price * (1 - deal.discount)).toFixed(2)}</span>
                    <span class="old-price">₺${product.price.toFixed(2)}</span>
                </div>
                <div style="font-size: 0.65rem; color: var(--danger); margin-top: 4px; font-weight: 700;">
                    <i data-lucide="clock" style="width: 10px; height: 10px;"></i> ${deal.expiry}
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

function setupBranchPicker() {
    const trigger = document.getElementById('branch-trigger');
    const nameLabel = document.getElementById('current-branch-name');

    trigger.addEventListener('click', () => {
        // Simple cycle for demo purposes
        const currentIndex = BRANCHES.findIndex(b => b.id === currentBranch.id);
        const nextIndex = (currentIndex + 1) % BRANCHES.length;
        currentBranch = BRANCHES[nextIndex];
        
        nameLabel.innerText = currentBranch.name;
        
        // Re-render branch dependent content
        renderFlashDeals();
        
        // Visual feedback
        trigger.style.transform = 'scale(0.95)';
        setTimeout(() => trigger.style.transform = 'scale(1)', 100);
    });
}
