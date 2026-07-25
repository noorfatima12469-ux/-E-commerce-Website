// 🛒 Complete E-Commerce Products Data Array
const products = [
    // Chocolates Category
    { id: 1, name: "Dark Chocolate Pack", category: "chocolate", price: 12.99, image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=500" },
    { id: 2, name: "Milk Chocolate Bar", category: "chocolate", price: 8.99, image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500" },
    { id: 3, name: "Hazelnut Chocolate Box", category: "chocolate", price: 15.50, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=500" },

    // Grocery Category
    { id: 4, name: "Organic Grocery Pack", category: "grocery", price: 25.00, image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500" },
    { id: 5, name: "Daily Essentials Basket", category: "grocery", price: 35.50, image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=500" },
    { id: 6, name: "Fresh Fruits & Veggies Combo", category: "grocery", price: 20.00, image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500" },

    // Kids Category
    { id: 7, name: "Kids Learning Toys", category: "kids", price: 18.00, image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500" },
    { id: 8, name: "Soft Plush Teddy Bear", category: "kids", price: 14.20, image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=500" },
    { id: 9, name: "Building Blocks Building Set", category: "kids", price: 22.99, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500" },

    // Makeup Category
    { id: 10, name: "Beauty Makeup Kit", category: "makeup", price: 29.99, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500" },
    { id: 11, name: "Matte Red Lipstick Set", category: "makeup", price: 16.50, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500" },
    { id: 12, name: "Skin Care & Glow Serum", category: "makeup", price: 24.00, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500" }
];

// 📦 Shopping Cart Storage Array
let cart = JSON.parse(localStorage.getItem('userCart')) || [];

// Function: Render Products Dynamically into DOM
function displayProducts(productsList) {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = '';

    if (productsList.length === 0) {
        productGrid.innerHTML = `<h3 style="grid-column: 1/-1; text-align: center; color: #777;">No products found!</h3>`;
        return;
    }

    productsList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="category-tag">${product.category.toUpperCase()}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart 🛒</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Function: Add Item to Cart with Alert & LocalStorage
function addToCart(productId) {
    const selectedProduct = products.find(p => p.id === productId);
    if (selectedProduct) {
        cart.push(selectedProduct);
        localStorage.setItem('userCart', JSON.stringify(cart));
        updateCartCounter();
        alert(`✅ "${selectedProduct.name}" has been added to your cart!`);
    }
}

// Function: Update Cart Count Badge on Header
function updateCartCounter() {
    const cartCounter = document.getElementById('cart-count');
    if (cartCounter) {
        cartCounter.innerText = cart.length;
    }
}

// Function: Filter Products by Category
function filterByCategory(categoryName) {
    if (categoryName === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === categoryName);
        displayProducts(filtered);
    }
}

// Initial Run on Page Load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartCounter();
});
