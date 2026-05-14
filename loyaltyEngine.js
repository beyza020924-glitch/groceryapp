import { USER_HISTORY, PRODUCTS } from './data.js';

export function getPersonalizedDeals() {
    // 1. Analyze SKU frequency
    const frequency = {};
    USER_HISTORY.forEach(item => {
        frequency[item.sku] = (frequency[item.sku] || 0) + item.quantity;
    });

    // 2. Sort by frequency
    const sortedSkus = Object.entries(frequency)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);

    // 3. Select top items and apply "Next Week" discounts
    const topSkus = sortedSkus.slice(0, 3);
    
    return topSkus.map(sku => {
        const product = PRODUCTS.find(p => p.id === sku);
        return {
            ...product,
            discount: 0.25, // 25% loyal customer discount
            reason: 'En Çok Tercih Ettiğiniz Ürün'
        };
    });
}
