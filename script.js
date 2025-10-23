// Data
const properties = [
    {
        id: "1",
        title: "Casa Moderna no Centro",
        description: "Linda casa moderna com acabamento de primeira qualidade. Localizada no centro de Paragominas, próxima a escolas, supermercados e comércio em geral.",
        price: 450000,
        type: "casa",
        category: "venda",
        location: "Centro, Paragominas-PA",
        bedrooms: 3,
        bathrooms: 2,
        area: 180,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
        ],
        features: [
            "Garagem para 2 carros",
            "Área de churrasqueira",
            "Quintal amplo",
            "Cozinha planejada",
            "Suíte master"
        ]
    },
    {
        id: "2",
        title: "Casa Familiar Aconchegante",
        description: "Casa perfeita para família, com espaços bem distribuídos e jardim. Bairro tranquilo e seguro.",
        price: 2500,
        type: "casa",
        category: "aluguel",
        location: "Promissão II, Paragominas-PA",
        bedrooms: 4,
        bathrooms: 3,
        area: 200,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
        ],
        features: [
            "4 quartos",
            "Área de lazer",
            "Garagem coberta",
            "Próximo a escolas"
        ]
    },
    {
        id: "3",
        title: "Mansão de Luxo com Piscina",
        description: "Imóvel de alto padrão com acabamento luxuoso, piscina, área gourmet completa e paisagismo impecável.",
        price: 980000,
        type: "casa",
        category: "venda",
        location: "Angelim, Paragominas-PA",
        bedrooms: 5,
        bathrooms: 4,
        area: 350,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
        ],
        features: [
            "Piscina aquecida",
            "Área gourmet",
            "Closet",
            "Sistema de segurança",
            "Jardim amplo"
        ]
    },
    {
        id: "4",
        title: "Lote Comercial Centro",
        description: "Excelente lote comercial em localização privilegiada no centro da cidade. Ideal para investimento.",
        price: 280000,
        type: "lote",
        category: "venda",
        location: "Centro, Paragominas-PA",
        area: 450,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
        ],
        features: [
            "Esquina",
            "Documentação regularizada",
            "Próximo ao comércio",
            "Fácil acesso"
        ]
    },
    {
        id: "5",
        title: "Lote Residencial Arborizado",
        description: "Lote plano e murado, em condomínio fechado com infraestrutura completa e área verde preservada.",
        price: 150000,
        type: "lote",
        category: "venda",
        location: "Promissão, Paragominas-PA",
        area: 600,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
        ],
        features: [
            "Condomínio fechado",
            "Área verde",
            "Segurança 24h",
            "Infraestrutura completa"
        ]
    },
    {
        id: "6",
        title: "Casa Compacta para Aluguel",
        description: "Casa ideal para casal ou pequena família. Bem localizada e próxima ao transporte público.",
        price: 1200,
        type: "casa",
        category: "aluguel",
        location: "Cidade Nova, Paragominas-PA",
        bedrooms: 2,
        bathrooms: 1,
        area: 80,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
        ],
        features: [
            "Garagem",
            "Quintal",
            "Próximo ao centro"
        ]
    },
    {
        id: "7",
        title: "Sobrado Espaçoso",
        description: "Sobrado novo com 3 pavimentos, ideal para família grande. Acabamento de qualidade e design moderno.",
        price: 650000,
        type: "casa",
        category: "venda",
        location: "Promissão III, Paragominas-PA",
        bedrooms: 4,
        bathrooms: 3,
        area: 280,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
        ],
        features: [
            "3 pavimentos",
            "Varanda gourmet",
            "Garagem para 3 carros",
            "Suítes com closet"
        ]
    },
    {
        id: "8",
        title: "Lote Industrial",
        description: "Grande lote industrial com fácil acesso e infraestrutura para galpão. Excelente para empreendimentos.",
        price: 420000,
        type: "lote",
        category: "venda",
        location: "Distrito Industrial, Paragominas-PA",
        area: 2000,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
        ],
        features: [
            "Grande metragem",
            "Fácil acesso",
            "Zona industrial",
            "Energia trifásica disponível"
        ]
    }
];

// State
let filteredProperties = [...properties];
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let isDarkMode = false;

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-message">${message}</div>
    `;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function toggleFavorite(propertyId) {
    const index = favorites.indexOf(propertyId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Removido dos favoritos');
    } else {
        favorites.push(propertyId);
        showToast('Adicionado aos favoritos');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderProperties();
}

function updateFavoritesCount() {
    const count = document.getElementById('favoritesCount');
    if (count) {
        count.textContent = favorites.length;
    }
}

function isFavorite(propertyId) {
    return favorites.includes(propertyId);
}

// Render Functions
function renderPropertyCard(property) {
    const isFav = isFavorite(property.id);
    
    return `
        <div class="property-card" data-id="${property.id}">
            <div class="property-image-wrapper">
                <img src="${property.image}" alt="${property.title}" class="property-image">
                <div class="property-category">${property.category}</div>
                <button class="property-favorite ${isFav ? 'active' : ''}" onclick="toggleFavorite('${property.id}')">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${property.location}</span>
                </div>
                <p class="property-description">${property.description}</p>
                ${property.bedrooms ? `
                    <div class="property-features">
                        <div class="property-feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="9" y1="3" x2="9" y2="21"></line>
                            </svg>
                            <span>${property.bedrooms}</span>
                        </div>
                        <div class="property-feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 6h6"></path>
                                <path d="M12 3v18"></path>
                                <path d="M19 17a2 2 0 0 1 2 2v2H3v-2a2 2 0 0 1 2-2"></path>
                            </svg>
                            <span>${property.bathrooms}</span>
                        </div>
                        <div class="property-feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"></path>
                            </svg>
                            <span>${property.area}m²</span>
                        </div>
                    </div>
                ` : `
                    <div class="property-features">
                        <div class="property-feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"></path>
                            </svg>
                            <span>${property.area}m²</span>
                        </div>
                    </div>
                `}
                <div class="property-footer">
                    <div>
                        <div class="property-price">${formatPrice(property.price)}</div>
                        ${property.category === 'aluguel' ? '<div class="property-price-label">/mês</div>' : ''}
                    </div>
                    <button class="btn-view-details" onclick="viewPropertyDetails('${property.id}')">
                        <span>Ver Detalhes</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProperties() {
    const grid = document.getElementById('propertiesGrid');
    if (!grid) return;
    
    if (filteredProperties.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 3rem; color: hsl(var(--muted-foreground));">Nenhum imóvel encontrado.</p>';
        return;
    }
    
    grid.innerHTML = filteredProperties.map(renderPropertyCard).join('');
}

function viewPropertyDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="property-modal-content">
            <div class="property-modal-gallery" style="margin-bottom: 2rem;">
                <img src="${property.images[0]}" alt="${property.title}" style="width: 100%; height: 400px; object-fit: cover; border-radius: var(--radius);">
            </div>
            <div class="property-category" style="display: inline-block; margin-bottom: 1rem;">${property.category}</div>
            <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem; color: hsl(var(--foreground));">${property.title}</h2>
            <div class="property-location" style="margin-bottom: 1.5rem; font-size: 1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${property.location}</span>
            </div>
            <div class="property-price" style="margin-bottom: 2rem;">
                ${formatPrice(property.price)}
                ${property.category === 'aluguel' ? '<span class="property-price-label">/mês</span>' : ''}
            </div>
            ${property.bedrooms ? `
                <div class="property-features" style="display: flex; gap: 2rem; padding: 1.5rem; background: hsl(var(--secondary)); border-radius: var(--radius); margin-bottom: 2rem;">
                    <div class="property-feature" style="flex: 1; text-align: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 0.5rem;">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="3" x2="9" y2="21"></line>
                        </svg>
                        <div style="font-size: 1.5rem; font-weight: 700; color: hsl(var(--primary));">${property.bedrooms}</div>
                        <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">Quartos</div>
                    </div>
                    <div class="property-feature" style="flex: 1; text-align: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 0.5rem;">
                            <path d="M9 6h6"></path>
                            <path d="M12 3v18"></path>
                            <path d="M19 17a2 2 0 0 1 2 2v2H3v-2a2 2 0 0 1 2-2"></path>
                        </svg>
                        <div style="font-size: 1.5rem; font-weight: 700; color: hsl(var(--primary));">${property.bathrooms}</div>
                        <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">Banheiros</div>
                    </div>
                    <div class="property-feature" style="flex: 1; text-align: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 0.5rem;">
                            <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"></path>
                        </svg>
                        <div style="font-size: 1.5rem; font-weight: 700; color: hsl(var(--primary));">${property.area}</div>
                        <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">m²</div>
                    </div>
                </div>
            ` : `
                <div class="property-features" style="display: flex; gap: 2rem; padding: 1.5rem; background: hsl(var(--secondary)); border-radius: var(--radius); margin-bottom: 2rem;">
                    <div class="property-feature" style="flex: 1; text-align: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 0.5rem;">
                            <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"></path>
                        </svg>
                        <div style="font-size: 1.5rem; font-weight: 700; color: hsl(var(--primary));">${property.area}</div>
                        <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">m² de área</div>
                    </div>
                </div>
            `}
            <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: hsl(var(--foreground));">Descrição</h3>
                <p style="color: hsl(var(--muted-foreground)); line-height: 1.8;">${property.description}</p>
            </div>
            ${property.features && property.features.length > 0 ? `
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: hsl(var(--foreground));">Características</h3>
                    <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; list-style: none;">
                        ${property.features.map(feature => `
                            <li style="display: flex; align-items: center; gap: 0.5rem; color: hsl(var(--muted-foreground));">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: hsl(var(--primary));">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                <a href="https://wa.me/5591999999999?text=Olá! Tenho interesse no imóvel: ${encodeURIComponent(property.title)}" target="_blank" class="btn-primary" style="flex: 1; text-decoration: none; justify-content: center; padding: 1rem;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Entrar em Contato
                </a>
                <button class="property-favorite ${isFavorite(property.id) ? 'active' : ''}" onclick="toggleFavorite('${property.id}')" style="width: 60px; height: 60px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    openModal('propertyModal');
}

// Filter Functions
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    
    filteredProperties = properties.filter(property => {
        const matchesSearch = property.title.toLowerCase().includes(searchTerm) ||
                            property.description.toLowerCase().includes(searchTerm) ||
                            property.location.toLowerCase().includes(searchTerm);
        
        const matchesType = typeFilter === 'all' || property.type === typeFilter;
        const matchesCategory = categoryFilter === 'all' || property.category === categoryFilter;
        
        let matchesPrice = true;
        if (priceFilter !== 'all') {
            const price = property.price;
            if (priceFilter === '0-200000') matchesPrice = price <= 200000;
            else if (priceFilter === '200000-500000') matchesPrice = price > 200000 && price <= 500000;
            else if (priceFilter === '500000-1000000') matchesPrice = price > 500000 && price <= 1000000;
            else if (priceFilter === '1000000+') matchesPrice = price > 1000000;
        }
        
        return matchesSearch && matchesType && matchesCategory && matchesPrice;
    });
    
    renderProperties();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Loading Screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1500);
    
    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.documentElement.classList.toggle('dark');
        
        const sunIcon = darkModeToggle.querySelector('.icon-sun');
        const moonIcon = darkModeToggle.querySelector('.icon-moon');
        
        if (isDarkMode) {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    });
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const menuIcon = mobileMenuToggle.querySelector('.icon-menu');
        const closeIcon = mobileMenuToggle.querySelector('.icon-close');
        
        if (mobileMenu.classList.contains('active')) {
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const menuIcon = mobileMenuToggle.querySelector('.icon-menu');
            const closeIcon = mobileMenuToggle.querySelector('.icon-close');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
    
    // Search Input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', applyFilters);
    
    // Filters
    document.getElementById('typeFilter').addEventListener('change', applyFilters);
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('priceFilter').addEventListener('change', applyFilters);
    
    // Search Button
    document.querySelector('.btn-search').addEventListener('click', applyFilters);
    
    // Login Modal
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', () => openModal('loginModal'));
    
    // Login Form
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simulação de login (você pode adicionar validação real aqui)
        if (username === 'admin' && password === 'admin') {
            showToast('Login realizado com sucesso!');
            closeModal('loginModal');
            loginForm.reset();
        } else {
            showToast('Usuário ou senha incorretos', 'error');
        }
    });
    
    // Modal Close Buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Modal Overlay Click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Favorites Button
    document.getElementById('favoritesBtn').addEventListener('click', () => {
        if (favorites.length === 0) {
            showToast('Você ainda não tem favoritos');
            return;
        }
        
        filteredProperties = properties.filter(p => favorites.includes(p.id));
        renderProperties();
        showToast(`Mostrando ${favorites.length} favorito(s)`);
        
        // Scroll to properties
        document.querySelector('.properties-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Initial Render
    updateFavoritesCount();
    renderProperties();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});