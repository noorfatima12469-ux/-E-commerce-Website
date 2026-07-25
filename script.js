// 🌐 Global Navigation & Main Script Logic
console.log("ShopEasy E-Commerce Core Engine Initialized!");

// Function: Search Products Input Filter
function handleSearchInput() {
    const searchInput = document.getElementById('searchBar');
    if (!searchInput) return;

    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });
}

// Function: Newsletter Subscription Handler
function handleNewsletter() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('userEmail');

    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();
            if (email !== '' && email.includes('@')) {
                alert(`Thank you for subscribing! Confirmation sent to: ${email}`);
                emailInput.value = '';
            } else {
                alert("Please enter a valid email address!");
            }
        });
    }
}

// Function: Active Navigation Link Indicator
function highlightActiveNav() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// DOM Ready Listener
document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNav();
    handleSearchInput();
    handleNewsletter();
});
