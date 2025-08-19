// Building data for apartamento1.html (3-floor building)
const buildingData = {
    1: {
        title: "Edificio en La Ràpita - Piso 1",
        subtitle: "Primera planta del edificio en Sant Carles de la Ràpita",
        images: [
            'images/1/main.jpg',
            'images/1/1.jpg',
            'images/1/2.jpg',
            'images/1/3.jpg',
            'images/1/4.jpg',
            'images/1/5.jpg',
            'images/1/6.jpg',
            'images/1/7.jpg',
            'images/1/8.jpg',
            'images/1/9.jpg',
            'images/1/10.jpg'
        ],
        characteristics: {
            bedrooms: 1,
            bathrooms: 1,
            beds: 2,
            size: "30 m²"
        },
        amenities: [
            { icon: "fas fa-eye", text: "Vista a la ciudad" },
            { icon: "fas fa-building", text: "Balcón privado" },
            { icon: "fas fa-snowflake", text: "Aire acondicionado" },
            { icon: "fas fa-utensils", text: "Cocina equipada" }
        ],
        description: `
            <p>Bienvenido al primer piso de nuestro edificio en La Ràpita. Este acogedor apartamento ofrece todas las comodidades necesarias para una estancia perfecta.</p>
            
            <h3>El espacio</h3>
            <p>Este apartamento de 30 m² cuenta con un dormitorio cómodo, un baño completo y una cocina equipada. El balcón privado ofrece vistas encantadoras de la ciudad.</p>
            
            <h3>Comodidades</h3>
            <ul>
                <li>Aire acondicionado para máximo confort</li>
                <li>Cocina totalmente equipada</li>
                <li>Balcón privado con vistas a la ciudad</li>
                <li>Ubicación céntrica en Sant Carles de la Ràpita</li>
            </ul>
        `
    },
    2: {
        title: "Edificio en La Ràpita - Piso 2",
        subtitle: "Segunda planta del edificio en Sant Carles de la Ràpita",
        images: [
            'images/2/main.jpg',
            'images/2/1.jpg',
            'images/2/2.jpg',
            'images/2/3.jpg',
            'images/2/4.jpg',
            'images/2/5.jpg',
            'images/2/6.jpg',
            'images/2/7.jpg',
            'images/2/8.jpg',
            'images/2/9.jpg',
            'images/2/10.jpg',
            'images/2/11.jpg'
        ],
        characteristics: {
            bedrooms: 2,
            bathrooms: 1,
            beds: 3,
            size: "45 m²"
        },
        amenities: [
            { icon: "fas fa-eye", text: "Vista panorámica" },
            { icon: "fas fa-building", text: "Balcón amplio" },
            { icon: "fas fa-snowflake", text: "Aire acondicionado" },
            { icon: "fas fa-utensils", text: "Cocina equipada" }
        ],
        description: `
            <p>El segundo piso ofrece más espacio y mejores vistas. Ideal para familias pequeñas o grupos que buscan comodidad y ubicación privilegiada.</p>
            
            <h3>El espacio</h3>
            <p>Con 45 m² de superficie, este apartamento cuenta con dos dormitorios, un baño completo y una cocina equipada. El balcón amplio ofrece vistas panorámicas excepcionales.</p>
            
            <h3>Comodidades</h3>
            <ul>
                <li>Dos dormitorios cómodos</li>
                <li>Balcón amplio con vistas panorámicas</li>
                <li>Aire acondicionado en todas las habitaciones</li>
                <li>Cocina completamente equipada</li>
            </ul>
        `
    },
    3: {
        title: "Edificio en La Ràpita - Piso 3",
        subtitle: "Tercera planta del edificio en Sant Carles de la Ràpita",
        images: [
            'images/3/main.jpg',
            'images/3/1.jpg',
            'images/3/2.jpg',
            'images/3/3.jpg',
            'images/3/4.jpg',
            'images/3/5.jpg',
            'images/3/6.jpg',
            'images/3/7.jpg',
            'images/3/8.jpg',
            'images/3/9.jpg',
            'images/3/10.jpg',
            'images/3/11.jpg',
            'images/3/12.jpg'
        ],
        characteristics: {
            bedrooms: 2,
            bathrooms: 2,
            beds: 4,
            size: "55 m²"
        },
        amenities: [
            { icon: "fas fa-eye", text: "Vista superior" },
            { icon: "fas fa-building", text: "Terraza privada" },
            { icon: "fas fa-snowflake", text: "Aire acondicionado" },
            { icon: "fas fa-utensils", text: "Cocina equipada" }
        ],
        description: `
            <p>La tercera planta es el piso más espacioso del edificio, con las mejores vistas y una terraza privada. Perfecto para estancias más largas.</p>
            
            <h3>El espacio</h3>
            <p>Este apartamento de 55 m² es el más amplio del edificio, con dos dormitorios, dos baños completos y una terraza privada con vistas superiores de la ciudad.</p>
            
            <h3>Comodidades</h3>
            <ul>
                <li>Dos dormitorios amplios</li>
                <li>Dos baños completos</li>
                <li>Terraza privada con las mejores vistas</li>
                <li>Aire acondicionado central</li>
                <li>Cocina totalmente equipada</li>
            </ul>
        `
    }
};

// Global variables for image modal
let currentImageIndex = 0;
let currentImageArray = [];
let modalOpen = false;

// Navigation functionality
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// Initialize building for apartamento1.html
function initializeBuilding() {
    // This function will be called from apartamento1.html
    selectFloor(1);
}

// Floor selection for building (apartamento1.html)
function selectFloor(floorNumber) {
    if (!buildingData[floorNumber]) return;
    
    const floor = buildingData[floorNumber];
    
    // Update active floor button
    document.querySelectorAll('.floor-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-floor="${floorNumber}"]`).classList.add('active');
    
    // Update title and subtitle
    const titleElement = document.getElementById('building-title');
    const subtitleElement = document.getElementById('building-subtitle');
    const characteristicsTitle = document.getElementById('characteristics-title');
    const modalTitle = document.getElementById('modal-title');
    
    if (titleElement) titleElement.textContent = floor.title;
    if (subtitleElement) subtitleElement.textContent = floor.subtitle;
    if (characteristicsTitle) characteristicsTitle.textContent = `Características - Piso ${floorNumber}`;
    if (modalTitle) modalTitle.textContent = floor.title;
    
    // Update main image
    const mainImage = document.getElementById('mainImage');
    if (mainImage && floor.images[0]) {
        mainImage.src = floor.images[0];
    }
    
    // Update gallery grid images (keep only first 6 for preview)
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach((img, index) => {
        if (floor.images[index]) {
            img.src = floor.images[index];
        }
    });
    
    // Update characteristics
    updateCharacteristics(floor);
    
    // Update modal description
    const modalDescription = document.getElementById('modal-description-content');
    if (modalDescription) {
        modalDescription.innerHTML = floor.description;
    }
    
    // Set current floor images for modal carousel (ALL images, not just preview)
    currentImageArray = [...floor.images];
}

// Update characteristics display
function updateCharacteristics(floor) {
    const characteristicsContent = document.getElementById('characteristics-content');
    if (!characteristicsContent) return;
    
    const char = floor.characteristics;
    const amenities = floor.amenities;
    
    characteristicsContent.innerHTML = `
        <div class="char-section">
            <h3>Especificaciones</h3>
            <div class="char-item">
                <i class="fas fa-bed"></i>
                <span>${char.bedrooms} dormitorio${char.bedrooms > 1 ? 's' : ''}</span>
            </div>
            <div class="char-item">
                <i class="fas fa-bath"></i>
                <span>${char.bathrooms} baño${char.bathrooms > 1 ? 's' : ''}</span>
            </div>
            <div class="char-item">
                <i class="fas fa-users"></i>
                <span>${char.beds} cama${char.beds > 1 ? 's' : ''}</span>
            </div>
            <div class="char-item">
                <i class="fas fa-ruler-combined"></i>
                <span>${char.size}</span>
            </div>
        </div>
        
        <div class="char-section">
            <h3>Comodidades</h3>
            ${amenities.map(amenity => `
                <div class="char-item">
                    <i class="${amenity.icon}"></i>
                    <span>${amenity.text}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// Initialize apartment gallery for apartamento2.html and apartamento3.html
function initializeApartmentGallery(imageArray) {
    // Set the image array for modal use (ALL images from the provided array)
    currentImageArray = [...imageArray];
}

// Open image modal
function openImageModal(imageIndex) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    if (!modal || !modalImage || !currentImageArray.length) return;
    
    currentImageIndex = imageIndex;
    modalImage.src = currentImageArray[currentImageIndex];
    modal.style.display = 'block';
    modalOpen = true;
    
    // Create dots for navigation
    createModalDots();
    updateActiveDot();
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleModalKeydown);
}

// Close image modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        modalOpen = false;
        document.removeEventListener('keydown', handleModalKeydown);
    }
}

// Change modal image
function modalChangeImage(direction) {
    if (!currentImageArray.length) return;
    
    currentImageIndex += direction;
    
    // Loop around
    if (currentImageIndex >= currentImageArray.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentImageArray.length - 1;
    }
    
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.src = currentImageArray[currentImageIndex];
    }
    
    updateActiveDot();
}

// Create modal navigation dots
function createModalDots() {
    const dotsContainer = document.querySelector('.gallery-dots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    
    currentImageArray.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'gallery-dot';
        dot.onclick = () => goToModalImage(index);
        dotsContainer.appendChild(dot);
    });
}

// Go to specific modal image
function goToModalImage(index) {
    if (index >= 0 && index < currentImageArray.length) {
        currentImageIndex = index;
        const modalImage = document.getElementById('modalImage');
        if (modalImage) {
            modalImage.src = currentImageArray[currentImageIndex];
        }
        updateActiveDot();
    }
}

// Update active dot
function updateActiveDot() {
    const dots = document.querySelectorAll('.gallery-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageIndex);
    });
}

// Handle modal keyboard navigation
function handleModalKeydown(event) {
    if (!modalOpen) return;
    
    switch(event.key) {
        case 'ArrowLeft':
            event.preventDefault();
            modalChangeImage(-1);
            break;
        case 'ArrowRight':
            event.preventDefault();
            modalChangeImage(1);
            break;
        case 'Escape':
            event.preventDefault();
            closeImageModal();
            break;
    }
}

// Open description modal
function openDescriptionModal() {
    const modal = document.getElementById('descriptionModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Close description modal
function closeDescriptionModal() {
    const modal = document.getElementById('descriptionModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const imageModal = document.getElementById('imageModal');
    const descriptionModal = document.getElementById('descriptionModal');
    
    if (imageModal && event.target === imageModal) {
        closeImageModal();
    }
    
    if (descriptionModal && event.target === descriptionModal) {
        closeDescriptionModal();
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    
    // Initialize specific functionality based on page
    if (document.getElementById('building-title')) {
        // We're on apartamento1.html (building page)
        initializeBuilding();
    }
});

// For apartamento2.html - initialize with apartment2Images array
if (typeof apartment2Images !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        initializeApartmentGallery(apartment2Images);
    });
}

// For apartamento3.html - define and initialize apartment3Images array
const apartment3Images = [
    'images/3/main.jpg',
    'images/3/1.jpg',
    'images/3/2.jpg',
    'images/3/3.jpg',
    'images/3/4.jpg',
    'images/3/5.jpg',
    'images/3/6.jpg',
    'images/3/7.jpg',
    'images/3/8.jpg',
    'images/3/9.jpg',
    'images/3/10.jpg',
    'images/3/11.jpg',
    'images/3/12.jpg',
    'images/3/13.jpg',
    'images/3/14.jpg',
    'images/3/16.jpg'
];

// Initialize apartment3 gallery if on apartamento3.html
if (window.location.pathname.includes('apartamento3.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        initializeApartmentGallery(apartment3Images);
    });
}
