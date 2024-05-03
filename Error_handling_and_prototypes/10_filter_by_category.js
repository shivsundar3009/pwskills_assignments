function filterByCategory(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    }
}

// Example usage:
const products = [
    { id: 1, name: 'Product 1', category: 'Electronics' },
    { id: 2, name: 'Product 2', category: 'Clothing' },
    { id: 3, name: 'Product 3', category: 'Electronics' },
    { id: 4, name: 'Product 4', category: 'Books' },
    { id: 5, name: 'Product 5', category: 'Electronics' }
];

const filterByCategoryFunc = filterByCategory(products);

const electronicsProducts = filterByCategoryFunc('Electronics');
console.log(electronicsProducts); // Output: [{ id: 1, name: 'Product 1', category: 'Electronics' }, { id: 3, name: 'Product 3', category: 'Electronics' }, { id: 5, name: 'Product 5', category: 'Electronics' }]
