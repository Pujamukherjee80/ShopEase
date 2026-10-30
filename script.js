
/* =====================================================
   SHOPEASE - COMPLETE E-COMMERCE JAVASCRIPT
   Product | Search | Cart | Wishlist | Coupon | Checkout
===================================================== */


/* ==========================================
   1. STORAGE CONFIGURATION
========================================== */

const STORAGE = {
    cart: "shopease_cart",
    wishlist: "shopease_wishlist",
    orders: "shopease_orders",
    user: "shopease_user",
    newsletter: "shopease_newsletter"
};


/* ==========================================
   2. PRODUCT DATABASE
========================================== */

const products = [

    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 1499,
        oldPrice: 2499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        flashSale: true
    },

    {
        id: 2,
        name: "Smart Watch Series 8",
        category: "Electronics",
        price: 1999,
        oldPrice: 3499,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        flashSale: true
    },

    {
        id: 3,
        name: "Premium Running Sneakers",
        category: "Fashion",
        price: 1799,
        oldPrice: 2999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        flashSale: true
    },

    {
        id: 4,
        name: "Classic Leather Handbag",
        category: "Fashion",
        price: 1299,
        oldPrice: 2199,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        flashSale: false
    },

    {
        id: 5,
        name: "Modern Sunglasses",
        category: "Fashion",
        price: 699,
        oldPrice: 1199,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        flashSale: false
    },

    {
        id: 6,
        name: "Professional Camera",
        category: "Electronics",
        price: 24999,
        oldPrice: 32999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        flashSale: false
    },

    {
        id: 7,
        name: "Premium Face Care Set",
        category: "Beauty",
        price: 899,
        oldPrice: 1499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
        flashSale: true
    },

    {
        id: 8,
        name: "Luxury Perfume",
        category: "Beauty",
        price: 1199,
        oldPrice: 1999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
        flashSale: false
    },

    {
        id: 9,
        name: "Decorative Table Lamp",
        category: "Home",
        price: 799,
        oldPrice: 1299,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        flashSale: false
    },

    {
        id: 10,
        name: "Modern Home Chair",
        category: "Home",
        price: 2999,
        oldPrice: 4499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500",
        flashSale: false
    },

    {
        id: 11,
        name: "Yoga Fitness Mat",
        category: "Sports",
        price: 499,
        oldPrice: 899,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
        flashSale: true
    },

    {
        id: 12,
        name: "Sports Water Bottle",
        category: "Sports",
        price: 399,
        oldPrice: 699,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
        flashSale: false
    },

    {
        id: 13,
        name: "Programming Fundamentals",
        category: "Books",
        price: 399,
        oldPrice: 599,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
        flashSale: false
    },

    {
        id: 14,
        name: "Laptop Backpack",
        category: "Fashion",
        price: 999,
        oldPrice: 1699,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        flashSale: false
    },

    {
        id: 15,
        name: "Wireless Gaming Mouse",
        category: "Electronics",
        price: 899,
        oldPrice: 1499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
        flashSale: true
    },

    {
        id: 16,
        name: "Decorative Flower Vase",
        category: "Home",
        price: 599,
        oldPrice: 999,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500",
        flashSale: false
    },

    {
        id: 17,
        name: "Skincare Moisturizer",
        category: "Beauty",
        price: 549,
        oldPrice: 899,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500",
        flashSale: false
    },

    {
        id: 18,
        name: "Inspirational Book Collection",
        category: "Books",
        price: 699,
        oldPrice: 999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
        flashSale: false
    }

];


/* ==========================================
   3. GLOBAL VARIABLES
========================================== */

let cart = readStorage(STORAGE.cart, []);
let wishlist = readStorage(STORAGE.wishlist, []);
let orders = readStorage(STORAGE.orders, []);
let newsletterEmails = readStorage(STORAGE.newsletter, []);

let user = readStorage(STORAGE.user, null);

let currentProducts = [...products];
let appliedPromo = null;

let toastTimer = null;
let countdownInterval = null;

const promoCodes = {

    FIRST50: {
        type: "percentage",
        value: 50,
        maxDiscount: 500,
        minOrder: 499,
        firstOrderOnly: true
    },

    SAVE10: {
        type: "percentage",
        value: 10,
        maxDiscount: 500,
        minOrder: 0,
        firstOrderOnly: false
    },

    SHOP100: {
        type: "flat",
        value: 100,
        maxDiscount: 100,
        minOrder: 999,
        firstOrderOnly: false
    }

};


/* ==========================================
   4. STORAGE FUNCTIONS
========================================== */

function readStorage(key, fallback) {

    try {

        const data = localStorage.getItem(key);

        return data ? JSON.parse(data) : fallback;

    } catch (error) {

        console.error("Storage error:", error);

        return fallback;

    }

}


function saveData() {

    localStorage.setItem(STORAGE.cart, JSON.stringify(cart));

    localStorage.setItem(STORAGE.wishlist, JSON.stringify(wishlist));

    localStorage.setItem(STORAGE.orders, JSON.stringify(orders));

    localStorage.setItem(STORAGE.user, JSON.stringify(user));

    localStorage.setItem(STORAGE.newsletter, JSON.stringify(newsletterEmails));

}


/* ==========================================
   5. HELPER FUNCTIONS
========================================== */

function money(amount) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);

}


function getProduct(id) {

    return products.find(product => product.id === Number(id));

}


function notify(message) {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* ==========================================
   6. PAGE NAVIGATION
========================================== */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active");

    });

    const selectedPage = document.getElementById(pageId);

    if (!selectedPage) return;

    selectedPage.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (pageId === "cartPage") {
        renderCart();
    }

    if (pageId === "wishlistPage") {
        renderWishlist();
    }

    if (pageId === "checkoutPage") {
        renderCheckoutSummary();
    }

    if (pageId === "ordersPage") {
        renderOrders();
    }

    if (pageId === "accountPage") {
        renderAccount();
    }

}


/* ==========================================
   7. PRODUCT CARD
========================================== */

function productCard(product) {

    const discount = Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    );

    const isWishlisted = wishlist.includes(product.id);

    return `

        <article class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
                onerror="this.onerror=null;this.src='https://placehold.co/400x300?text=ShopEase'"
            >

            <h3>${product.name}</h3>

            <div class="rating">
                ★ ${product.rating} / 5
            </div>

            <div class="price">
                ${money(product.price)}

                <span class="old-price">
                    ${money(product.oldPrice)}
                </span>

                <span class="discount">
                    ${discount}% OFF
                </span>
            </div>

            <div class="product-actions">

                <button
                    class="wish-btn"
                    onclick="toggleWishlist(${product.id})"
                    aria-label="Toggle wishlist"
                >
                    ${isWishlisted ? "♥" : "♡"}
                </button>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

                <button
                    class="buy-btn"
                    onclick="buyNow(${product.id})"
                >
                    Buy Now
                </button>

            </div>

        </article>

    `;

}


/* ==========================================
   8. RENDER PRODUCTS
========================================== */

function renderProducts(list = currentProducts) {

    const grid = document.getElementById("productGrid");

    const count = document.getElementById("productCount");

    if (!grid) return;

    if (count) {
        count.textContent = `${list.length} Products`;
    }

    if (list.length === 0) {

        grid.innerHTML = `
            <div class="empty-state">
                <h2>No Products Found</h2>
                <p>Try another search or category.</p>
            </div>
        `;

        return;

    }

    grid.innerHTML = list.map(productCard).join("");

}


/* ==========================================
   9. SEARCH PRODUCTS
========================================== */

function searchProducts() {

    const searchInput = document.getElementById("searchInput");

    const categorySelect = document.getElementById("searchCategory");

    const query = searchInput.value.trim().toLowerCase();

    const category = categorySelect ? categorySelect.value : "all";

    currentProducts = products.filter(product => {

        const matchesText =
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query);

        const matchesCategory =
            category === "all" || product.category === category;

        return matchesText && matchesCategory;

    });

    const heading = document.getElementById("productHeading");

    if (heading) {
        heading.textContent = query ? `Search: ${query}` : "All Products";
    }

    showPage("homePage");

    renderProducts();

    document.getElementById("productSection").scrollIntoView({
        behavior: "smooth"
    });

}


function filterProducts(category) {

    if (category === "all") {

        currentProducts = [...products];

    } else {

        currentProducts = products.filter(product => {

            return product.category === category;

        });

    }

    const heading = document.getElementById("productHeading");

    if (heading) {
        heading.textContent =
            category === "all" ? "All Products" : category;
    }

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.value = "";
    }

    const categorySelect = document.getElementById("searchCategory");

    if (categorySelect) {
        categorySelect.value = "all";
    }

    const sortSelect = document.getElementById("sortSelect");

    if (sortSelect) {
        sortSelect.value = "default";
    }

    showPage("homePage");

    renderProducts();

    document.getElementById("productSection").scrollIntoView({
        behavior: "smooth"
    });

}


/* SEARCH ON ENTER */

document.getElementById("searchInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchProducts();
    }

});


/* ==========================================
   10. SORT PRODUCTS
========================================== */

function sortProducts() {

    const sortValue = document.getElementById("sortSelect").value;

    const sorted = [...currentProducts];

    if (sortValue === "low") {

        sorted.sort((a, b) => a.price - b.price);

    } else if (sortValue === "high") {

        sorted.sort((a, b) => b.price - a.price);

    } else if (sortValue === "rating") {

        sorted.sort((a, b) => b.rating - a.rating);

    }

    renderProducts(sorted);

}


/* ==========================================
   11. FLASH SALE PRODUCTS
========================================== */

function renderFlashSale() {

    const grid = document.getElementById("flashSaleGrid");

    if (!grid) return;

    const flashProducts = products.filter(product => product.flashSale);

    grid.innerHTML = flashProducts.map(productCard).join("");

}


/* ==========================================
   12. FLASH SALE COUNTDOWN
========================================== */

function startCountdown() {

    let remainingSeconds = 5 * 60 * 60;

    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    function updateTimer() {

        const hours = Math.floor(remainingSeconds / 3600);

        const minutes = Math.floor((remainingSeconds % 3600) / 60);

        const seconds = remainingSeconds % 60;

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");

        if (remainingSeconds > 0) {

            remainingSeconds--;

        } else {

            clearInterval(countdownInterval);

            document.querySelector(".countdown-container > span").textContent =
                "SALE ENDED";

        }

    }

    updateTimer();

    countdownInterval = setInterval(updateTimer, 1000);

}


/* ==========================================
   13. ADD TO CART
========================================== */

function addToCart(productId) {

    const product = getProduct(productId);

    if (!product) return;

    const existing = cart.find(item => item.id === product.id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });

    }

    saveData();

    updateCounts();

    notify(`${product.name} added to cart!`);

}


/* ==========================================
   14. BUY NOW
========================================== */

function buyNow(productId) {

    const product = getProduct(productId);

    if (!product) return;

    const existing = cart.find(item => item.id === product.id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });

    }

    saveData();

    updateCounts();

    showPage("checkoutPage");

    notify("Product ready for checkout!");

}


/* ==========================================
   15. CART HELPERS
========================================== */

function getCartItems() {

    return cart.map(item => {

        const product = getProduct(item.id);

        if (!product) return null;

        return {
            product,
            quantity: item.quantity
        };

    }).filter(Boolean);

}


function getCartTotal() {

    return getCartItems().reduce((total, item) => {

        return total + item.product.price * item.quantity;

    }, 0);

}


/* ==========================================
   16. CHANGE CART QUANTITY
========================================== */

function changeQuantity(productId, amount) {

    const item = cart.find(item => item.id === Number(productId));

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(cartItem => cartItem.id !== Number(productId));

    }

    saveData();

    updateCounts();

    renderCart();

}


/* ==========================================
   17. REMOVE FROM CART
========================================== */

function removeFromCart(productId) {

    cart = cart.filter(item => item.id !== Number(productId));

    saveData();

    updateCounts();

    renderCart();

    notify("Product removed from cart.");

}


/* ==========================================
   18. RENDER CART
========================================== */

function renderCart() {

    const container = document.getElementById("cartContent");

    if (!container) return;

    const items = getCartItems();

    if (items.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h2>🛒 Your Cart is Empty</h2>
                <p>Discover products and add something you love.</p>

                <button
                    class="primary-button"
                    onclick="showPage('homePage')"
                >
                    Start Shopping
                </button>
            </div>
        `;

        return;

    }

    container.innerHTML = `

        <div class="cart-container">

            <div>

                ${items.map(item => `

                    <div class="cart-item">

                        <img
                            src="${item.product.image}"
                            alt="${item.product.name}"
                            onerror="this.onerror=null;this.src='https://placehold.co/200?text=Product'"
                        >

                        <div>

                            <h3>${item.product.name}</h3>

                            <p>${money(item.product.price)}</p>

                            <div class="quantity-control">

                                <button onclick="changeQuantity(${item.product.id}, -1)">−</button>

                                <span>${item.quantity}</span>

                                <button onclick="changeQuantity(${item.product.id}, 1)">+</button>

                            </div>

                        </div>

                        <button onclick="removeFromCart(${item.product.id})">
                            Remove
                        </button>

                    </div>

                `).join("")}

            </div>


            <div class="cart-summary">

                <h2>Cart Summary</h2>

                <div class="summary-line">
                    <span>Subtotal</span>
                    <b>${money(getCartTotal())}</b>
                </div>

                <div class="summary-line">
                    <span>Delivery</span>
                    <b>FREE</b>
                </div>

                <div class="summary-total">
                    <span>Total</span>
                    <span>${money(getCartTotal())}</span>
                </div>

                <button
                    class="checkout-button"
                    onclick="showPage('checkoutPage')"
                >
                    Proceed to Checkout →
                </button>

            </div>

        </div>

    `;

}


/* ==========================================
   19. WISHLIST
========================================== */

function toggleWishlist(productId) {

    const product = getProduct(productId);

    if (!product) return;

    if (wishlist.includes(product.id)) {

        wishlist = wishlist.filter(id => id !== product.id);

        notify("Removed from wishlist.");

    } else {

        wishlist.push(product.id);

        notify("Added to wishlist!");

    }

    saveData();

    updateCounts();

    renderProducts(currentProducts);

    renderFlashSale();

}


function renderWishlist() {

    const grid = document.getElementById("wishlistGrid");

    if (!grid) return;

    const items = products.filter(product => wishlist.includes(product.id));

    if (items.length === 0) {

        grid.innerHTML = `
            <div class="empty-state">
                <h2>♡ Your Wishlist is Empty</h2>
                <p>Save your favourite products here.</p>
            </div>
        `;

        return;

    }

    grid.innerHTML = items.map(productCard).join("");

}


/* ==========================================
   20. UPDATE CART AND WISHLIST COUNTS
========================================== */

function updateCounts() {

    const cartCount = document.getElementById("cartCount");

    const wishlistCount = document.getElementById("wishlistCount");

    if (cartCount) {

        cartCount.textContent = cart.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

    }

    if (wishlistCount) {

        wishlistCount.textContent = wishlist.length;

    }

}


/* ==========================================
   21. PROMO CODE SYSTEM
========================================== */

function calculateDiscount() {

    if (!appliedPromo) return 0;

    const promo = promoCodes[appliedPromo];

    if (!promo) return 0;

    const subtotal = getCartTotal();

    if (subtotal < promo.minOrder) return 0;

    let discount = 0;

    if (promo.type === "percentage") {

        discount = subtotal * promo.value / 100;

    } else {

        discount = promo.value;

    }

    return Math.min(discount, promo.maxDiscount, subtotal);

}


function getFinalTotal() {

    return Math.max(0, getCartTotal() - calculateDiscount());

}


function applyPromoCode() {

    const input = document.getElementById("promoInput");

    const message = document.getElementById("promoMessage");

    if (!input || !message) return;

    const code = input.value.trim().toUpperCase();

    const promo = promoCodes[code];

    if (!code) {

        message.textContent = "Please enter a promo code.";

        message.style.color = "#dc2626";

        return;

    }

    if (!promo) {

        appliedPromo = null;

        message.textContent = "Invalid promo code.";

        message.style.color = "#dc2626";

        return;

    }

    if (promo.firstOrderOnly && orders.length > 0) {

        appliedPromo = null;

        message.textContent = "FIRST50 is valid only for your first order.";

        message.style.color = "#dc2626";

        return;

    }

    if (getCartTotal() < promo.minOrder) {

        appliedPromo = null;

        message.textContent = `Minimum order value is ${money(promo.minOrder)}.`;

        message.style.color = "#dc2626";

        return;

    }

    appliedPromo = code;

    renderCheckoutSummary();

    notify(`${code} applied successfully!`);

}


function removePromoCode() {

    appliedPromo = null;

    renderCheckoutSummary();

    notify("Coupon removed.");

}


/* ==========================================
   22. COPY COUPON
========================================== */

function copyCoupon() {

    const code = "FIRST50";

    if (navigator.clipboard && window.isSecureContext) {

        navigator.clipboard.writeText(code)
            .then(() => notify("FIRST50 copied!"))
            .catch(() => notify("Coupon code: FIRST50"));

    } else {

        notify("Coupon code: FIRST50");

    }

}


/* ==========================================
   23. CHECKOUT SUMMARY
========================================== */

function renderCheckoutSummary() {

    const summary = document.getElementById("checkoutSummary");

    if (!summary) return;

    const items = getCartItems();

    if (items.length === 0) {

        summary.innerHTML = `
            <h2>Order Summary</h2>

            <div class="empty-state">
                <p>Your cart is empty.</p>
            </div>

            <button
                class="checkout-button"
                onclick="showPage('homePage')"
            >
                Continue Shopping
            </button>
        `;

        return;

    }

    const subtotal = getCartTotal();

    const discount = calculateDiscount();

    const finalTotal = getFinalTotal();

    summary.innerHTML = `

        <h2>Order Summary</h2>

        ${items.map(item => `

            <div class="summary-line">

                <span>
                    ${item.product.name} × ${item.quantity}
                </span>

                <b>
                    ${money(item.product.price * item.quantity)}
                </b>

            </div>

        `).join("")}


        <div class="promo-box">

            <h3>🎁 Have a Promo Code?</h3>

            <input
                type="text"
                id="promoInput"
                placeholder="Enter coupon code"
                value="${appliedPromo || ""}"
                ${appliedPromo ? "disabled" : ""}
            >

            ${
                appliedPromo
                ? `
                    <button type="button" onclick="removePromoCode()">
                        Remove Coupon
                    </button>
                `
                : `
                    <button type="button" onclick="applyPromoCode()">
                        Apply Coupon
                    </button>
                `
            }

            <p id="promoMessage" class="promo-message">
                ${appliedPromo ? `${appliedPromo} applied successfully!` : "Try FIRST50, SAVE10 or SHOP100"}
            </p>

        </div>


        <div class="summary-line">

            <span>Subtotal</span>

            <b>${money(subtotal)}</b>

        </div>


        <div class="summary-line">

            <span>Delivery</span>

            <b>FREE</b>

        </div>


        <div class="summary-line">

            <span>Discount</span>

            <b style="color:#16a34a">
                - ${money(discount)}
            </b>

        </div>


        <div class="summary-total">

            <span>Grand Total</span>

            <span>${money(finalTotal)}</span>

        </div>

    `;

    const nameInput = document.getElementById("shippingName");

    if (user && nameInput && !nameInput.value) {

        nameInput.value = user.name || "";

    }

}


/* ==========================================
   24. PLACE ORDER
========================================== */

function placeOrder(event) {

    event.preventDefault();

    const items = getCartItems();

    if (items.length === 0) {

        notify("Your cart is empty!");

        return;

    }

    const shippingName = document.getElementById("shippingName").value.trim();

    const shippingPhone = document.getElementById("shippingPhone").value.trim();

    const shippingAddress = document.getElementById("shippingAddress").value.trim();

    const shippingCity = document.getElementById("shippingCity").value.trim();

    const shippingPin = document.getElementById("shippingPin").value.trim();

    const paymentMethod = document.querySelector(
        'input[name="payment"]:checked'
    ).value;


    const order = {

        id: "SE" + Date.now().toString().slice(-8),

        date: new Date().toLocaleString("en-IN"),

        items: items.map(item => ({

            id: item.product.id,

            name: item.product.name,

            price: item.product.price,

            quantity: item.quantity

        })),

        subtotal: getCartTotal(),

        discount: calculateDiscount(),

        promoCode: appliedPromo,

        total: getFinalTotal(),

        payment: paymentMethod,

        status: "Order Placed",

        shipping: {

            name: shippingName,

            phone: shippingPhone,

            address: shippingAddress,

            city: shippingCity,

            pin: shippingPin

        }

    };


    orders.unshift(order);

    cart = [];

    appliedPromo = null;

    saveData();

    updateCounts();

    event.currentTarget.reset();

    notify("🎉 Your order has been placed!");

    showPage("ordersPage");

}


/* ==========================================
   25. ORDER HISTORY
========================================== */

function renderOrders() {

    const container = document.getElementById("ordersContent");

    if (!container) return;

    if (orders.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h2>📦 No Orders Yet</h2>
                <p>Your placed orders will appear here.</p>
            </div>
        `;

        return;

    }

    container.innerHTML = orders.map(order => `

        <div class="order-card">

            <h3>Order #${order.id}</h3>

            <p>Date: ${order.date}</p>

            <p>Status: <span class="order-status">${order.status}</span></p>

            <p>Payment: ${order.payment}</p>

            ${order.items.map(item => `

                <p>
                    ${item.name} × ${item.quantity}
                </p>

            `).join("")}

            ${order.promoCode ? `
                <p>Coupon: ${order.promoCode}</p>
                <p>Discount: -${money(order.discount || 0)}</p>
            ` : ""}

            <p><strong>Total: ${money(order.total)}</strong></p>

            <p>
                Shipping: ${order.shipping.name},
                ${order.shipping.city},
                ${order.shipping.pin}
            </p>

            ${
                order.status !== "Cancelled"
                ? `
                    <button onclick="cancelOrder('${order.id}')">
                        Cancel Order
                    </button>
                `
                : ""
            }

        </div>

    `).join("");

}


/* ==========================================
   26. CANCEL ORDER
========================================== */

function cancelOrder(orderId) {

    const order = orders.find(item => item.id === orderId);

    if (!order) return;

    if (order.status === "Cancelled") return;

    const confirmed = confirm("Are you sure you want to cancel this order?");

    if (!confirmed) return;

    order.status = "Cancelled";

    saveData();

    renderOrders();

    notify("Order cancelled.");

}


/* ==========================================
   27. ACCOUNT PAGE
========================================== */

function renderAccount() {

    const container = document.getElementById("accountContent");

    if (!container) return;

    const totalOrders = orders.length;

    const name = user?.name || "Guest Customer";

    const email = user?.email || "Not provided";

    container.innerHTML = `

        <div class="account-card">

            <h2>👤 Account Information</h2>

            <p><strong>Name:</strong> ${name}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Total Orders:</strong> ${totalOrders}</p>

            <p><strong>Wishlist Items:</strong> ${wishlist.length}</p>

            <p><strong>Cart Items:</strong> ${cart.length}</p>

            <button
                class="checkout-button"
                onclick="logout()"
            >
                Logout
            </button>

        </div>

    `;

}


/* ==========================================
   28. LOGOUT
========================================== */

function logout() {

    const confirmed = confirm("Are you sure you want to logout?");

    if (!confirmed) return;

    localStorage.removeItem(STORAGE.user);

    user = null;

    saveData();

    notify("Logged out successfully.");

    setTimeout(() => {

        showPage("homePage");

        renderAccount();

    }, 500);

}


/* ==========================================
   29. NEWSLETTER
========================================== */

function subscribeNewsletter(event) {

    event.preventDefault();

    const input = document.getElementById("newsletterEmail");

    const email = input.value.trim().toLowerCase();

    if (!email) return;

    if (newsletterEmails.includes(email)) {

        notify("You are already subscribed!");

        return;

    }

    newsletterEmails.push(email);

    saveData();

    input.value = "";

    notify("Thank you for subscribing!");

}


/* ==========================================
   30. INITIALIZE WEBSITE
========================================== */

function initializeShopEase() {

    renderProducts();

    renderFlashSale();

    updateCounts();

    startCountdown();

    document.getElementById("checkoutForm").addEventListener(
        "submit",
        placeOrder
    );

    document.getElementById("newsletterForm").addEventListener(
        "submit",
        subscribeNewsletter
    );

    renderAccount();

    console.log("ShopEase initialized successfully!");

}


/* ==========================================
   31. START WEBSITE
========================================== */

document.addEventListener("DOMContentLoaded", function() {

    initializeShopEase();

});
