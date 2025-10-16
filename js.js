// Datos de los productos en pesos colombianos
const products = [
    {
        id: 1,
        name: "Vela Clásica Redonda",
        basePrice: 45000,
        image: "https://images.unsplash.com/photo-1545975076-2b4e4d4fae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "250g",
        burnTime: "40-45 horas",
        dimensions: "8cm x 8cm",
        description: "Nuestra vela redonda clásica, perfecta para personalizar con tu color y aroma favorito. Elaborada con cera de soja natural que garantiza una combustión limpia y duradera.",
        badge: "Más Popular"
    },
    {
        id: 2,
        name: "Vela Cubo Elegante",
        basePrice: 38000,
        image: "https://images.unsplash.com/photo-1585329063178-9a8dd0adf763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "200g",
        burnTime: "35-40 horas",
        dimensions: "7cm x 7cm",
        description: "Diseño moderno en forma de cubo, ideal para espacios contemporáneos. Personalízala con los colores y aromas que mejor se adapten a tu decoración.",
        badge: "Moderno"
    },
    {
        id: 3,
        name: "Vela Jarrón Alto",
        basePrice: 52000,
        image: "https://images.unsplash.com/photo-1590736968-f8b8b1cac7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "300g",
        burnTime: "50-55 horas",
        dimensions: "10cm x 6cm",
        description: "Elegante vela en forma de jarrón, perfecta como pieza decorativa central. Su diseño alto y estilizado añade sofisticación a cualquier ambiente.",
        badge: "Elegante"
    },
    {
        id: 4,
        name: "Vela Achatada Decorativa",
        basePrice: 42000,
        image: "https://images.unsplash.com/photo-1600267163998-177115f5d035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        weight: "280g",
        burnTime: "45-50 horas",
        dimensions: "12cm x 4cm",
        description: "Vela achatada con amplia superficie, ideal para mostrar colores personalizados. Perfecta para mesas de centro y repisas.",
        badge: "Decorativa"
    }
];

// Opciones de personalización
const colorOptions = [
    { name: "Rosa Pálido", value: "rosa-palido", color: "#f8d7dc" },
    { name: "Blanco Nieve", value: "blanco-nieve", color: "#f8f8f8" },
    { name: "Lila Suave", value: "lila-suave", color: "#e6d4f0" },
    { name: "Azul Cielo", value: "azul-cielo", color: "#d4e8f0" },
    { name: "Verde Menta", value: "verde-menta", color: "#d4f0e6" },
    { name: "Beige Natural", value: "beige-natural", color: "#f0e6d4" },
    { name: "Melocotón", value: "melocoton", color: "#f8dcc7" },
    { name: "Lavanda", value: "lavanda", color: "#e6d4f0" }
];

const scentOptions = [
    { 
        name: "Lavanda Relajante", 
        value: "lavanda", 
        description: "Aroma calmante perfecto para espacios de descanso",
        price: 5000 
    },
    { 
        name: "Vainilla Comfort", 
        value: "vainilla", 
        description: "Dulce y acogedor, ideal para crear ambientes cálidos",
        price: 4000 
    },
    { 
        name: "Cítricos Energizantes", 
        value: "citricos", 
        description: "Mezcla revitalizante de naranja, limón y lima",
        price: 6000 
    },
    { 
        name: "Jazmín Oriental", 
        value: "jazmin", 
        description: "Floral exótico que evoca elegancia y sofisticación",
        price: 7000 
    },
    { 
        name: "Sándalo Mystic", 
        value: "sandalwood", 
        description: "Aroma terroso y cálido para meditación y relax",
        price: 8000 
    },
    { 
        name: "Rosas Frescas", 
        value: "rosas", 
        description: "Fragancia romántica y delicada de rosas naturales",
        price: 6500 
    },
    { 
        name: "Vainilla y Canela", 
        value: "vainilla-canela", 
        description: "Combinación acogedora perfecta para días fríos",
        price: 5500 
    },
    { 
        name: "Océano Azul", 
        value: "oceano", 
        description: "Fresco aroma marino que revitaliza los espacios",
        price: 6000 
    }
];

// Variables globales
let cart = [];
let currentProduct = null;
let currentQuantity = 1;
let selectedColor = null;
let selectedScent = null;
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
const customizationModal = document.getElementById('customizationModal');
const closeCustomization = document.getElementById('closeCustomization');
const customizationBody = document.getElementById('customizationBody');
const searchInput = document.getElementById('searchInput');

// Formatear precio en pesos colombianos
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

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
                <p>${product.description.substring(0, 100)}...</p>
                <div class="product-meta">
                    <span><i class="fas fa-weight-hanging"></i> ${product.weight}</span>
                    <span><i class="fas fa-clock"></i> ${product.burnTime}</span>
                </div>
                <div class="product-price">$${formatPrice(product.basePrice)} COP</div>
                <button class="btn btn-primary customize-btn" data-id="${product.id}">
                    <i class="fas fa-magic"></i> Personalizar
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Agregar event listeners a los botones de personalización
    document.querySelectorAll('.customize-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showCustomization(productId);
        });
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Carrito
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    
    // Modal de personalización
    closeCustomization.addEventListener('click', closeCustomizationModal);
    
    // Finalizar compra
    checkoutBtn.addEventListener('click', checkout);
    
    // Búsqueda
    searchInput.addEventListener('input', filterProducts);
    
    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === customizationModal) {
            closeCustomizationModal();
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
    
    // Video placeholders
    document.querySelectorAll('.video-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            showNotification('Próximamente podrás ver videos de nuestro proceso artesanal', 'info');
        });
    });
}

// Filtrar productos por búsqueda
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    });
    loadProducts();
}

// Mostrar/ocultar carrito
function toggleCart() {
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

// Mostrar modal de personalización
function showCustomization(productId) {
    const product = products.find(p => p.id === productId);
    currentProduct = product;
    currentQuantity = 1;
    selectedColor = colorOptions[0];
    selectedScent = scentOptions[0];
    
    customizationBody.innerHTML = `
        <div class="customization-preview">
            <h3>Personaliza tu ${product.name}</h3>
            <div class="preview-image" id="previewImage" style="background-color: ${colorOptions[0].color}">
                <i class="fas fa-candle-holder"></i>
            </div>
            <p>Vista previa de tu vela personalizada</p>
        </div>
        
        <div class="customization-options">
            <div class="option-group">
                <h4>Elige el Color</h4>
                <div class="color-options">
                    ${colorOptions.map((color, index) => `
                        <div class="color-option ${index === 0 ? 'selected' : ''}" 
                             style="background-color: ${color.color}"
                             data-color='${JSON.stringify(color)}'
                             onclick="selectColor(this)">
                            <span class="color-name">${color.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="option-group">
                <h4>Selecciona el Aroma</h4>
                <div class="scent-options">
                    ${scentOptions.map((scent, index) => `
                        <div class="scent-option ${index === 0 ? 'selected' : ''}" 
                             data-scent='${JSON.stringify(scent)}'
                             onclick="selectScent(this)">
                            <div class="scent-name">${scent.name}</div>
                            <div class="scent-description">${scent.description}</div>
                            <div class="scent-price">+ $${formatPrice(scent.price)} COP</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="quantity-selector">
            <span>Cantidad:</span>
            <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
            <span class="quantity-display" id="quantityDisplay">${currentQuantity}</span>
            <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
        </div>
        
        <div class="customization-summary">
            <h4>Resumen de tu Pedido</h4>
            <div class="summary-item">
                <span>${product.name}:</span>
                <span>$${formatPrice(product.basePrice)} COP</span>
            </div>
            <div class="summary-item">
                <span>Color ${selectedColor.name}:</span>
                <span>Incluido</span>
            </div>
            <div class="summary-item">
                <span>Aroma ${selectedScent.name}:</span>
                <span>+ $${formatPrice(selectedScent.price)} COP</span>
            </div>
            <div class="summary-item">
                <span>Cantidad (${currentQuantity}):</span>
                <span>x${currentQuantity}</span>
            </div>
            <div class="summary-total">
                <span>Total:</span>
                <span id="summaryTotal">$${formatPrice(calculateTotal())} COP</span>
            </div>
            
            <button class="btn btn-primary" onclick="addCustomizedToCart()" style="width: 100%; margin-top: 20px;">
                <i class="fas fa-cart-plus"></i> Añadir al Carrito - $${formatPrice(calculateTotal())} COP
            </button>
        </div>
    `;
    
    customizationModal.style.display = 'block';
}

// Seleccionar color
function selectColor(element) {
    // Remover selección anterior
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Agregar selección nueva
    element.classList.add('selected');
    selectedColor = JSON.parse(element.getAttribute('data-color'));
    
    // Actualizar vista previa
    const previewImage = document.getElementById('previewImage');
    previewImage.style.backgroundColor = selectedColor.color;
    
    // Actualizar resumen
    updateSummary();
}

// Seleccionar aroma
function selectScent(element) {
    // Remover selección anterior
    document.querySelectorAll('.scent-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Agregar selección nueva
    element.classList.add('selected');
    selectedScent = JSON.parse(element.getAttribute('data-scent'));
    
    // Actualizar resumen
    updateSummary();
}

// Cambiar cantidad
function changeQuantity(change) {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
        currentQuantity = newQuantity;
        document.getElementById('quantityDisplay').textContent = currentQuantity;
        updateSummary();
    }
}

// Calcular total
function calculateTotal() {
    const basePrice = currentProduct.basePrice;
    const scentPrice = selectedScent.price;
    return (basePrice + scentPrice) * currentQuantity;
}

// Actualizar resumen
function updateSummary() {
    const summaryTotal = document.getElementById('summaryTotal');
    const addToCartBtn = document.querySelector('.customization-summary .btn');
    
    if (summaryTotal && addToCartBtn) {
        const total = calculateTotal();
        summaryTotal.textContent = `$${formatPrice(total)} COP`;
        addToCartBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Añadir al Carrito - $${formatPrice(total)} COP`;
    }
}

// Añadir producto personalizado al carrito
function addCustomizedToCart() {
    const customizedProduct = {
        id: Date.now(), // ID único para productos personalizados
        baseId: currentProduct.id,
        name: `${currentProduct.name} Personalizada`,
        color: selectedColor.name,
        scent: selectedScent.name,
        basePrice: currentProduct.basePrice,
        scentPrice: selectedScent.price,
        quantity: currentQuantity,
        totalPrice: calculateTotal(),
        image: currentProduct.image
    };
    
    cart.push(customizedProduct);
    updateCartUI();
    saveCartToLocalStorage();
    
    // Mostrar notificación
    showNotification(`¡${currentProduct.name} personalizada añadida al carrito!`);
    
    // Cerrar modal
    closeCustomizationModal();
}

// Cerrar modal de personalización
function closeCustomizationModal() {
    customizationModal.style.display = 'none';
}

// Eliminar producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToLocalStorage();
    
    // Mostrar notificación
    showNotification('Producto eliminado del carrito');
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
                <p style="margin-top: 10px; font-size: 0.9rem;">¡Personaliza tus velas favoritas y añádelas aquí!</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Color: ${item.color} | Aroma: ${item.scent}</p>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
                <div class="cart-item-price">
                    $${formatPrice(item.totalPrice)} COP
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
    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    cartTotal.textContent = formatPrice(total);
}

// Guardar carrito en localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('prettyCandlesCart', JSON.stringify(cart));
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío. ¡Personaliza algunas velas!', 'warning');
        return;
    }
    
    // Crear mensaje de pedido
    let orderMessage = "¡Hola! Me gustaría realizar el siguiente pedido en PrettyCandles:\n\n";
    
    cart.forEach((item, index) => {
        orderMessage += `🕯️ *Vela ${index + 1}:*\n`;
        orderMessage += `   • ${item.name}\n`;
        orderMessage += `   • Color: ${item.color}\n`;
        orderMessage += `   • Aroma: ${item.scent}\n`;
        orderMessage += `   • Cantidad: ${item.quantity}\n`;
        orderMessage += `   • Precio: $${formatPrice(item.totalPrice)} COP\n\n`;
    });
    
    orderMessage += `💵 *Total del pedido: $${formatPrice(cart.reduce((sum, item) => sum + item.totalPrice, 0))} COP*\n\n`;
    orderMessage += "Por favor, contactarme para coordinar el pago y envío. ¡Gracias!";
    
    // Codificar el mensaje para WhatsApp
    const encodedMessage = encodeURIComponent(orderMessage);
    const phoneNumber = "573147886481"; 
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