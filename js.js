// Datos de los productos actualizados con colores suaves
const products = [
    {
        id: 1,
        name: "Lavanda y Vainilla",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1633389495483-700e39d90b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "250g",
        color: "Lila suave",
        scent: "Lavanda con notas de vainilla",
        scentCategory: "Lavanda",
        materials: "Cera de soja 100% natural, aceites esenciales puros, mecha de algodón orgánico",
        burnTime: "40-45 horas",
        dimensions: "8cm x 8cm",
        description: "Una combinación relajante de lavanda con notas dulces de vainilla que crea una atmósfera de completa tranquilidad. Perfecta para espacios de meditación, dormitorios o para crear un ambiente sereno después de un largo día.",
        badge: "Más Vendido"
    },
    {
        id: 2,
        name: "Rosa Blanca",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1600267163998-177115f5d035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "200g",
        color: "Rosa pálido",
        scent: "Rosas blancas y jazmín",
        scentCategory: "Floral",
        materials: "Cera de soja natural, aceites esenciales florales premium, mecha de algodón",
        burnTime: "35-40 horas",
        dimensions: "7cm x 7cm",
        description: "Delicada fragancia de rosas blancas combinada con el dulce aroma del jazmín. Ideal para crear un ambiente romántico y elegante en cualquier espacio de tu hogar.",
        badge: "Romántica"
    },
    {
        id: 3,
        name: "Vainilla Bourbon",
        price: 26.99,
        image: "https://images.unsplash.com/photo-1585329063178-9a8dd0adf763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "300g",
        color: "Blanco hueso",
        scent: "Vainilla Bourbon y caramelo",
        scentCategory: "Vainilla",
        materials: "Cera de soja premium, aceites esenciales naturales, mecha de algodón",
        burnTime: "50-55 horas",
        dimensions: "9cm x 9cm",
        description: "El clásico aroma de vainilla Bourbon con un toque moderno de caramelo crea una experiencia sensorial reconfortante. Perfecta para crear un ambiente acogedor y familiar.",
        badge: "Clásico"
    },
    {
        id: 4,
        name: "Jardín de Rosas",
        price: 25.99,
        image: "https://images.unsplash.com/photo-1633389495736-4321a9a2d5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "250g",
        color: "Rosa pálido",
        scent: "Rosas frescas y peonías",
        scentCategory: "Floral",
        materials: "Cera de soja natural, aceite esencial de rosas búlgaras, mecha de algodón",
        burnTime: "40-45 horas",
        dimensions: "8cm x 8cm",
        description: "Fragante y romántica, con el delicado aroma de rosas frescas combinado con peonías. Perfecta para momentos especiales o para agregar un toque de elegancia a cualquier espacio.",
        badge: "Elegante"
    },
    {
        id: 5,
        name: "Vela Cubo Clásica",
        price: 19.50,
        image: "https://images.unsplash.com/photo-1545975076-2b4e4d4fae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "180g",
        color: "Beige",
        scent: "Macadamia y vainilla",
        scentCategory: "Vainilla",
        materials: "Cera de soja y parafina natural",
        burnTime: "40-45 horas",
        dimensions: "7.5cm x 7.5cm",
        description: "Diseño clásico en forma de cubo con aroma reconfortante de macadamia y vainilla. Ideal para regalos o para decorar espacios minimalistas.",
        badge: "Clásico"
    },
    {
        id: 6,
        name: "Brisa Marina",
        price: 27.99,
        image: "https://images.unsplash.com/photo-1590736968-f8b8b1cac7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "280g",
        color: "Azul claro",
        scent: "Brisa marina y algas",
        scentCategory: "Marino",
        materials: "Cera de soja, aceites esenciales marinos, mecha de algodón",
        burnTime: "45-50 horas",
        dimensions: "8.5cm x 8.5cm",
        description: "Transporta la esencia refrescante del océano a tu hogar con esta vela de aroma a brisa marina. Perfecta para crear un ambiente de pureza y renovación.",
        badge: "Relajante"
    },
    {
        id: 7,
        name: "Citrus Delight",
        price: 23.99,
        image: "https://images.unsplash.com/photo-1585329063178-9a8dd0adf763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "220g",
        color: "Amarillo pálido",
        scent: "Naranja, limón y pomelo",
        scentCategory: "Cítrico",
        materials: "Cera de soja natural, aceites esenciales cítricos, mecha de algodón",
        burnTime: "38-42 horas",
        dimensions: "7cm x 7cm",
        description: "Mezcla revitalizante de naranja dulce, limón fresco y pomelo vibrante. Ideal para comenzar el día con energía o para revitalizar ambientes.",
        badge: "Energizante"
    },
    {
        id: 8,
        name: "Sándalo Noble",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1633389495483-700e39d90b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "320g",
        color: "Crema",
        scent: "Sándalo y pachulí",
        scentCategory: "Madera",
        materials: "Cera de soja premium, aceites esenciales de maderas nobles, mecha de algodón",
        burnTime: "55-60 horas",
        dimensions: "10cm x 10cm",
        description: "Aroma terroso y cálido con notas profundas de sándalo y pachulí. Crea un ambiente acogedor y sofisticado, perfecto para momentos de meditación.",
        badge: "Premium"
    }
];

// El resto del código JavaScript permanece igual que en la versión anterior
// (Variables globales, funciones, event listeners, etc.)

// Variables globales
let cart = [];
let currentProduct = null;
let currentQuantity = 1;
let filteredProducts = [...products];

// Elementos del DOM
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const productModalBody = document.getElementById('productModalBody');
const searchInput = document.getElementById('searchInput');
const colorFilter = document.getElementById('colorFilter');
const scentFilter = document.getElementById('scentFilter');
const priceFilter = document.getElementById('priceFilter');
const weightFilter = document.getElementById('weightFilter');
const clearFiltersBtn = document.getElementById('clearFilters');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    updateCartUI();
    
    // Cargar carrito desde localStorage si existe
    const savedCart = localStorage.getItem('prettyCandlesCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
});

// Cargar productos en la página
function loadProducts() {
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.scent}</p>
                <div class="product-meta">
                    <span><i class="fas fa-weight-hanging"></i> ${product.weight}</span>
                    <span><i class="fas fa-clock"></i> ${product.burnTime}</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="btn btn-primary view-details-btn" data-id="${product.id}">
                    <i class="fas fa-eye"></i> Ver Detalles
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Agregar event listeners a los botones de detalles
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showProductDetails(productId);
        });
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Carrito
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    
    // Modal de producto
    closeModal.addEventListener('click', closeProductModal);
    
    // Finalizar compra
    checkoutBtn.addEventListener('click', checkout);
    
    // Búsqueda
    searchInput.addEventListener('input', filterProducts);
    
    // Filtros
    colorFilter.addEventListener('change', applyFilters);
    scentFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    weightFilter.addEventListener('change', applyFilters);
    clearFiltersBtn.addEventListener('click', clearFilters);
    
    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === productModal) {
            closeProductModal();
        }
        if (event.target === cartModal) {
            toggleCart();
        }
    });
    
    // Smooth scroll para enlaces de navegación
    document.querySelectorAll('nav a, .hero-buttons a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            showNotification(`¡Gracias por suscribirte con ${email}! Te enviaremos nuestras novedades.`);
            this.reset();
        });
    }
    
    // Video placeholders (puedes reemplazar con videos reales)
    document.querySelectorAll('.video-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            showNotification('Próximamente podrás ver videos de nuestro proceso artesanal', 'info');
        });
    });
}

// Aplicar filtros
function applyFilters() {
    filteredProducts = [...products];
    
    // Filtro por color
    if (colorFilter.value !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.color === colorFilter.value
        );
    }
    
    // Filtro por aroma
    if (scentFilter.value !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.scentCategory === scentFilter.value
        );
    }
    
    // Filtro por precio
    if (priceFilter.value !== 'all') {
        const [min, max] = priceFilter.value.split('-').map(Number);
        if (max) {
            filteredProducts = filteredProducts.filter(product => 
                product.price >= min && product.price <= max
            );
        } else {
            filteredProducts = filteredProducts.filter(product => 
                product.price >= min
            );
        }
    }
    
    // Filtro por peso
    if (weightFilter.value !== 'all') {
        const [min, max] = weightFilter.value.split('-').map(Number);
        const productWeight = product => parseInt(product.weight);
        
        if (max) {
            filteredProducts = filteredProducts.filter(product => 
                productWeight(product) >= min && productWeight(product) <= max
            );
        } else {
            filteredProducts = filteredProducts.filter(product => 
                productWeight(product) >= min
            );
        }
    }
    
    loadProducts();
}

// Limpiar filtros
function clearFilters() {
    colorFilter.value = 'all';
    scentFilter.value = 'all';
    priceFilter.value = 'all';
    weightFilter.value = 'all';
    searchInput.value = '';
    filteredProducts = [...products];
    loadProducts();
}

// Filtrar productos por búsqueda
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.scent.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    });
    loadProducts();
}

// Mostrar/ocultar carrito
function toggleCart() {
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

// Mostrar detalles del producto
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    currentProduct = product;
    currentQuantity = 1;
    
    productModalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-detail-image">
        <div class="product-details">
            <div class="product-detail-info">
                <h3>${product.name}</h3>
                <div class="product-detail-price">$${product.price.toFixed(2)}</div>
                
                <div class="detail-item">
                    <i class="fas fa-weight-hanging"></i>
                    <span>Peso:</span>
                    <span class="value">${product.weight}</span>
                </div>
                
                <div class="detail-item">
                    <i class="fas fa-palette"></i>
                    <span>Color:</span>
                    <span class="value">${product.color}</span>
                </div>
                
                <div class="detail-item">
                    <i class="fas fa-wind"></i>
                    <span>Aroma:</span>
                    <span class="value">${product.scent}</span>
                </div>
                
                <div class="detail-item">
                    <i class="fas fa-cube"></i>
                    <span>Materiales:</span>
                    <span class="value">${product.materials}</span>
                </div>
                
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>Tiempo de combustión:</span>
                    <span class="value">${product.burnTime}</span>
                </div>
                
                <div class="detail-item">
                    <i class="fas fa-ruler-combined"></i>
                    <span>Dimensiones:</span>
                    <span class="value">${product.dimensions}</span>
                </div>
                
                <!-- Selector de Cantidad -->
                <div class="quantity-selector">
                    <span>Cantidad:</span>
                    <button class="quantity-btn" id="decreaseQuantity">-</button>
                    <span class="quantity-display" id="quantityDisplay">${currentQuantity}</span>
                    <button class="quantity-btn" id="increaseQuantity">+</button>
                </div>
                
                <button class="btn btn-primary add-to-cart-detail" style="margin-top: 25px; width: 100%;">
                    <i class="fas fa-cart-plus"></i> Añadir al Carrito - $${(product.price * currentQuantity).toFixed(2)}
                </button>
            </div>
            
            <div class="product-description">
                <h4>Descripción</h4>
                <p>${product.description}</p>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
    
    // Agregar event listeners para el selector de cantidad
    document.getElementById('decreaseQuantity').addEventListener('click', function() {
        if (currentQuantity > 1) {
            currentQuantity--;
            updateQuantityDisplay();
        }
    });
    
    document.getElementById('increaseQuantity').addEventListener('click', function() {
        currentQuantity++;
        updateQuantityDisplay();
    });
    
    // Agregar event listener al botón de añadir al carrito en el modal
    document.querySelector('.add-to-cart-detail').addEventListener('click', function() {
        addToCart(product, currentQuantity);
        closeProductModal();
    });
}

// Actualizar display de cantidad
function updateQuantityDisplay() {
    const quantityDisplay = document.getElementById('quantityDisplay');
    const addToCartBtn = document.querySelector('.add-to-cart-detail');
    
    quantityDisplay.textContent = currentQuantity;
    addToCartBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Añadir al Carrito - $${(currentProduct.price * currentQuantity).toFixed(2)}`;
}

// Cerrar modal de producto
function closeProductModal() {
    productModal.style.display = 'none';
}

// Añadir producto al carrito
function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCartUI();
    saveCartToLocalStorage();
    
    // Mostrar notificación
    showNotification(`${product.name} (${quantity}) añadido al carrito`);
}

// Eliminar producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToLocalStorage();
    
    // Mostrar notificación
    const product = products.find(p => p.id === productId);
    showNotification(`${product.name} eliminado del carrito`);
}

// Actualizar interfaz del carrito
function updateCartUI() {
    // Actualizar contador
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Actualizar lista de productos
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Tu carrito está vacío</p>
                <p style="margin-top: 10px; font-size: 0.9rem;">¡Explora nuestros productos y añade tus velas favoritas!</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.scent}</p>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
                <div class="cart-item-price">
                    $${(item.price * item.quantity).toFixed(2)}
                </div>
                <button class="remove-item" data-id="${item.id}" title="Eliminar del carrito">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Agregar event listeners a los botones de eliminar
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }
    
    // Actualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Guardar carrito en localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('prettyCandlesCart', JSON.stringify(cart));
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío. ¡Añade algunos productos!', 'warning');
        return;
    }
    
    // Crear mensaje de pedido
    let orderMessage = "¡Hola! Me gustaría realizar el siguiente pedido en PrettyCandles:\n\n";
    
    cart.forEach(item => {
        orderMessage += `🕯️ ${item.name}\n`;
        orderMessage += `   Aroma: ${item.scent}\n`;
        orderMessage += `   Cantidad: ${item.quantity}\n`;
        orderMessage += `   Precio: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    orderMessage += `💵 *Total: $${cartTotal.textContent}*\n\n`;
    orderMessage += "Por favor, contactarme para coordinar el pago y envío. ¡Gracias!";
    
    // Codificar el mensaje para WhatsApp
    const encodedMessage = encodeURIComponent(orderMessage);
    const phoneNumber = "3147886481"; 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Vaciar el carrito después de enviar el mensaje
    cart = [];
    updateCartUI();
    saveCartToLocalStorage();
    
    // Cerrar el carrito
    toggleCart();
    
    // Mostrar mensaje de confirmación
    showNotification('¡Pedido enviado! Revisa WhatsApp para continuar con tu compra.', 'success');
}

// Mostrar notificación
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    
    // Colores según el tipo
    const colors = {
        info: '#e8b4bc',
        success: '#8bc34a',
        warning: '#ff9800',
        error: '#f44336'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${colors[type] || colors.info};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideIn 0.3s ease-out;
        max-width: 350px;
        font-weight: 500;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Eliminar notificación después de 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Agregar estilos de animación para las notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Efectos de scroll y animaciones
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--white)';
        header.style.backdropFilter = 'blur(0)';
    }
});

// Animación de elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.product-card, .video-container, .about-content, .section-header');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});