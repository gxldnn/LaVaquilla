/**
 * LaVaquilla Apartment Rental Website JavaScript
 * Handles navigation, image galleries, modals, and interactive features
 */

// Global variables for image gallery management
let currentImages = [];
let currentImageIndex = 0;
let currentFloor = 1;

// Building data for different floors
const buildingData = {
    1: {
        title: "Edificio en La Ràpita - Piso 1",
        subtitle: "Primera planta del edificio en Sant Carles de la Ràpita, España",
        images: [
            "images/1/main.jpg",
            "images/1/1.jpg",
            "images/1/2.jpg",
            "images/1/3.jpg",
            "images/1/4.jpg",
            "images/1/5.jpg"
        ],
        characteristics: {
            specs: [
                { icon: "fas fa-bed", text: "1 dormitorio" },
                { icon: "fas fa-bath", text: "1 baño" },
                { icon: "fas fa-users", text: "2 camas" },
                { icon: "fas fa-ruler-combined", text: "35 m²" }
            ],
            amenities: [
                { icon: "fas fa-eye", text: "Vista a la calle" },
                { icon: "fas fa-building", text: "Balcón pequeño" },
                { icon: "fas fa-utensils", text: "Cocina básica" },
                { icon: "fas fa-snowflake", text: "Aire acondicionado" }
            ],
            restrictions: [
                { icon: "fas fa-ban", text: "No se permiten mascotas" },
                { icon: "fas fa-smoking-ban", text: "Prohibido fumar" },
                { icon: "fas fa-volume-mute", text: "No se permiten fiestas" }
            ]
        },
        description: `
            <p>Piso 1 - Planta baja con acceso directo. Perfecto para quienes buscan comodidad sin escaleras. Vista directa a la calle principal de La Ràpita.</p>
            <ul>
                <li>Acceso directo desde la calle</li>
                <li>Vista a la vida urbana de la ciudad</li>
                <li>Balcón con vista a los transeúntes</li>
            </ul>

            <h3>Distribución Piso 1</h3>
            <p>Apartamento cómodo y funcional en planta baja. Sala de estar integrada con cocina, dormitorio principal con cama doble y baño completo con ducha.</p>
            <ul>
                <li>Sala-comedor con cocina americana</li>
                <li>1 dormitorio con cama doble</li>
                <li>1 baño completo con ducha</li>
            </ul>

            <h3>Características Especiales Piso 1</h3>
            <p>Ideal para personas con movilidad reducida o que prefieren evitar escaleras. Fácil acceso con equipaje. Conexión directa con la energía de la calle.</p>
        `
    },
    2: {
        title: "Edificio en La Ràpita - Piso 2",
        subtitle: "Segunda planta del edificio en Sant Carles de la Ràpita, España",
        images: [
            "images/2/main.jpg",
            "images/2/1.jpg",
            "images/2/2.jpg",
            "images/2/3.jpg",
            "images/2/4.jpg",
            "images/2/5.jpg"
        ],
        characteristics: {
            specs: [
                { icon: "fas fa-bed", text: "2 dormitorios" },
                { icon: "fas fa-bath", text: "2 baños" },
                { icon: "fas fa-users", text: "4 camas" },
                { icon: "fas fa-ruler-combined", text: "55 m²" }
            ],
            amenities: [
                { icon: "fas fa-mountain", text: "Vistas elevadas" },
                { icon: "fas fa-building", text: "Balcón amplio" },
                { icon: "fas fa-utensils", text: "Cocina completa" },
                { icon: "fas fa-snowflake", text: "Aire acondicionado doble" }
            ],
            restrictions: [
                { icon: "fas fa-ban", text: "No se permiten mascotas" },
                { icon: "fas fa-smoking-ban", text: "Prohibido fumar" },
                { icon: "fas fa-volume-mute", text: "No se permiten fiestas" }
            ]
        },
        description: `
            <p>Piso 2 - Primera planta elevada. Apartamento más espacioso con 2 dormitorios y 2 baños. Perfecto para familias o grupos de hasta 4 personas.</p>
            <ul>
                <li>Vistas mejoradas desde altura</li>
                <li>Mayor privacidad y menos ruido</li>
                <li>Balcón más amplio con mejores vistas</li>
            </ul>

            <h3>Distribución Piso 2</h3>
            <p>Apartamento familiar con distribución optimizada. Dos dormitorios independientes, cada uno con su propio baño, sala de estar amplia y cocina completamente equipada.</p>
            <ul>
                <li>Dormitorio principal con cama doble y baño en suite</li>
                <li>Dormitorio secundario con dos camas individuales</li>
                <li>Baño adicional completo</li>
                <li>Sala-comedor independiente de la cocina</li>
            </ul>

            <h3>Características Especiales Piso 2</h3>
            <p>El piso más versátil del edificio. Ideal para familias, grupos de amigos o estancias largas. Doble aire acondicionado para mayor confort en ambos dormitorios.</p>
        `
    },
    3: {
        title: "Edificio en La Ràpita - Piso 3",
        subtitle: "Tercera planta del edificio en Sant Carles de la Ràpita, España",
        images: [
            "images/3/main.jpg",
            "images/3/1.jpg",
            "images/3/2.jpg",
            "images/3/3.jpg",
            "images/3/4.jpg",
            "images/3/5.jpg"
        ],
        characteristics: {
            specs: [
                { icon: "fas fa-bed", text: "1 dormitorio suite" },
                { icon: "fas fa-bath", text: "1 baño luxury" },
                { icon: "fas fa-users", text: "2 camas premium" },
                { icon: "fas fa-ruler-combined", text: "45 m² + terraza" }
            ],
            amenities: [
                { icon: "fas fa-crown", text: "Vistas panorámicas 360°" },
                { icon: "fas fa-sun", text: "Terraza privada 20m²" },
                { icon: "fas fa-utensils", text: "Cocina gourmet" },
                { icon: "fas fa-hot-tub", text: "Hidromasaje privado" }
            ],
            restrictions: [
                { icon: "fas fa-ban", text: "No se permiten mascotas" },
                { icon: "fas fa-smoking-ban", text: "Prohibido fumar en interior" },
                { icon: "fas fa-volume-mute", text: "Horarios de silencio" }
            ]
        },
        description: `
            <p>Piso 3 - ÁTICO PREMIUM. La joya del edificio con terraza privada, vistas panorámicas y acabados de lujo. Experiencia única en La Ràpita.</p>
            <ul>
                <li>Terraza privada de 20m² con mobiliario de exterior</li>
                <li>Vistas panorámicas de 360° de la ciudad y el mar</li>
                <li>Hidromasaje privado en la terraza</li>
                <li>Acabados premium en todo el apartamento</li>
            </ul>

            <h3>Distribución Piso 3 - Ático</h3>
            <p>Suite de lujo con dormitorio principal amplio, baño con hidromasaje, cocina gourmet y acceso directo a terraza privada. Diseñado para la máxima experiencia de confort.</p>
            <ul>
                <li>Suite principal con vestidor y baño luxury</li>
                <li>Baño con bañera de hidromasaje y ducha independiente</li>
                <li>Cocina gourmet con electrodomésticos premium</li>
                <li>Terraza privada con zona de relax y comedor exterior</li>
            </ul>

            <h3>Características Especiales Piso 3</h3>
            <p>Experiencia premium exclusiva. Perfecto para luna de miel, aniversarios o ocasiones especiales. Incluye servicio de limpieza diario y amenities de cortesía.</p>
        `
    }
};

/**
 * Initialize the website when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeModals();
    initializeBuilding();
});

/**
 * Navigation functionality
 * Handles mobile menu toggle and active states
 */
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        // Toggle mobile menu
        navToggle.onclick = function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            } else {
                navMenu.classList.add('active');
            }
        };
        
        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.onclick = function() {
                navMenu.classList.remove('active');
            };
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
}

/**
 * Initialize modal functionality
 * Sets up event listeners for modal interactions
 */
function initializeModals() {
    // Close modals when clicking outside or on close button
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
}

/**
 * Initialize building data and set up floor navigation
 */
function initializeBuilding() {
    // Initialize with floor 1 data
    if (buildingData[1]) {
        currentImages = buildingData[1].images;
        currentImageIndex = 0;
        currentFloor = 1;
    }
}

/**
 * Select and display a specific floor
 * @param {number} floor - Floor number (1, 2, or 3)
 */
function selectFloor(floor) {
    if (!buildingData[floor]) return;

    currentFloor = floor;
    const floorData = buildingData[floor];
    
    // Update current images
    currentImages = floorData.images;
    currentImageIndex = 0;
    
    // Update page title and subtitle
    const titleElement = document.getElementById('building-title');
    const subtitleElement = document.getElementById('building-subtitle');
    if (titleElement) titleElement.textContent = floorData.title;
    if (subtitleElement) subtitleElement.textContent = floorData.subtitle;
    
    // Update characteristics title
    const characteristicsTitle = document.getElementById('characteristics-title');
    if (characteristicsTitle) characteristicsTitle.textContent = `Características - Piso ${floor}`;
    
    // Update images in gallery
    updateGalleryImages();
    
    // Update characteristics
    updateCharacteristics(floorData.characteristics);
    
    // Update floor buttons
    updateFloorButtons(floor);
    
    // Update modal title
    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) modalTitle.textContent = floorData.title;
    
    // Update modal description
    const modalDescription = document.getElementById('modal-description-content');
    if (modalDescription) modalDescription.innerHTML = floorData.description;
}

/**
 * Update gallery images for current floor
 */
function updateGalleryImages() {
    if (currentImages.length === 0) return;
    
    // Update main image
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = currentImages[0];
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.style.opacity = '1';
        }, 150);
    }
    
    // Update gallery grid images
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach((img, index) => {
        if (index < currentImages.length) {
            img.src = currentImages[index];
        }
    });
    
    // Update modal image
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.src = currentImages[0];
    }
    
    // Update dots
    updateGalleryDots();
}

/**
 * Update characteristics section with floor data
 * @param {Object} characteristics - Floor characteristics data
 */
function updateCharacteristics(characteristics) {
    const characteristicsContent = document.getElementById('characteristics-content');
    if (!characteristicsContent) return;
    
    let html = '';
    
    // Specifications section
    html += '<div class="char-section">';
    html += '<h3>Especificaciones</h3>';
    characteristics.specs.forEach(spec => {
        html += `<div class="char-item">
            <i class="${spec.icon}"></i>
            <span>${spec.text}</span>
        </div>`;
    });
    html += '</div>';
    
    // Amenities section
    html += '<div class="char-section">';
    html += '<h3>Comodidades</h3>';
    characteristics.amenities.forEach(amenity => {
        html += `<div class="char-item">
            <i class="${amenity.icon}"></i>
            <span>${amenity.text}</span>
        </div>`;
    });
    html += '</div>';
    
    // Restrictions section
    html += '<div class="char-section">';
    html += '<h3>No Permitido</h3>';
    characteristics.restrictions.forEach(restriction => {
        html += `<div class="char-item not-allowed">
            <i class="${restriction.icon}"></i>
            <span>${restriction.text}</span>
        </div>`;
    });
    html += '</div>';
    
    characteristicsContent.innerHTML = html;
}

/**
 * Update floor button active states
 * @param {number} activeFloor - Currently active floor
 */
function updateFloorButtons(activeFloor) {
    const floorButtons = document.querySelectorAll('.floor-btn');
    floorButtons.forEach(button => {
        const floor = parseInt(button.getAttribute('data-floor'));
        if (floor === activeFloor) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

/**
 * Initialize apartment gallery with provided images
 * @param {Array} images - Array of image paths for the gallery
 */
function initializeApartmentGallery(images) {
    currentImages = images;
    currentImageIndex = 0;
    
    // Update main image
    const mainImage = document.getElementById('mainImage');
    if (mainImage && images.length > 0) {
        mainImage.src = images[0];
    }
    
    // Update modal image
    const modalImage = document.getElementById('modalImage');
    if (modalImage && images.length > 0) {
        modalImage.src = images[0];
    }
    
    // Update dots
    updateGalleryDots();
}

/**
 * Change the current image in the gallery
 * @param {number} direction - Direction to move (-1 for previous, 1 for next)
 */
function changeImage(direction) {
    if (currentImages.length === 0) return;
    
    currentImageIndex += direction;
    
    // Wrap around if at beginning or end
    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    } else if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }
    
    // Update main image
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = currentImages[currentImageIndex];
        
        // Add smooth transition effect
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.style.opacity = '1';
        }, 150);
    }
    
    updateGalleryDots();
}

/**
 * Update gallery dots to reflect current image
 */
function updateGalleryDots() {
    const dotsContainer = document.querySelector('.gallery-dots');
    if (!dotsContainer) return;

    // Limpiar todos los dots
    dotsContainer.innerHTML = '';

    // Generar nuevos dots según la cantidad de imágenes
    currentImages.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === currentImageIndex) {
            dot.classList.add('active');
        }
        dot.onclick = () => setModalImage(index);
        dotsContainer.appendChild(dot);
    });
}

/**
 * Open the image modal gallery
 * @param {number} index - Optional index of image to display (defaults to current index)
 */
function openImageModal(index) {
    const modal = document.getElementById('imageModal');
    if (modal) {
        // Set the image index if provided
        if (typeof index === 'number' && index >= 0 && index < currentImages.length) {
            currentImageIndex = index;
        }
        
        modal.style.display = 'block';
        
        // Update modal image to selected image
        const modalImage = document.getElementById('modalImage');
        if (modalImage && currentImages.length > 0) {
            modalImage.src = currentImages[currentImageIndex];
        }
        
        updateGalleryDots();
        
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close the image modal gallery
 */
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        
        // Restore body scrolling
        document.body.style.overflow = 'auto';
    }
}

/**
 * Change image in modal gallery
 * @param {number} direction - Direction to move (-1 for previous, 1 for next)
 */
function modalChangeImage(direction) {
    if (currentImages.length === 0) return;
    
    currentImageIndex += direction;
    
    // Wrap around if at beginning or end
    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    } else if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }
    
    // Update modal image
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.style.opacity = '0';
        setTimeout(() => {
            modalImage.src = currentImages[currentImageIndex];
            modalImage.style.opacity = '1';
        }, 150);
    }
    
    // Also update main gallery image
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = currentImages[currentImageIndex];
    }
    
    updateGalleryDots();
}

/**
 * Set modal image to specific index
 * @param {number} index - Index of image to display
 */
function setModalImage(index) {
    if (index >= 0 && index < currentImages.length) {
        currentImageIndex = index;
        
        // Update modal image
        const modalImage = document.getElementById('modalImage');
        if (modalImage) {
            modalImage.style.opacity = '0';
            setTimeout(() => {
                modalImage.src = currentImages[currentImageIndex];
                modalImage.style.opacity = '1';
            }, 150);
        }
        
        // Also update main gallery image
        const mainImage = document.getElementById('mainImage');
        if (mainImage) {
            mainImage.src = currentImages[currentImageIndex];
        }
        
        updateGalleryDots();
    }
}

/**
 * Open the description modal
 */
function openDescriptionModal() {
    const modal = document.getElementById('descriptionModal');
    if (modal) {
        modal.style.display = 'block';
        
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close the description modal
 */
function closeDescriptionModal() {
    const modal = document.getElementById('descriptionModal');
    if (modal) {
        modal.style.display = 'none';
        
        // Restore body scrolling
        document.body.style.overflow = 'auto';
    }
}

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of element to scroll to
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Add smooth scroll behavior to anchor links
 */
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToElement(targetId);
        });
    });
});

/**
 * Lazy loading for images
 * Improves page performance by loading images when they come into view
 */
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Add loading animation to buttons
 * Provides user feedback during form submissions or navigation
 */
function addButtonLoadingState(buttonElement, loadingText = 'Cargando...') {
    const originalText = buttonElement.textContent;
    buttonElement.textContent = loadingText;
    buttonElement.disabled = true;
    buttonElement.classList.add('loading');
    
    // Return function to restore original state
    return function() {
        buttonElement.textContent = originalText;
        buttonElement.disabled = false;
        buttonElement.classList.remove('loading');
    };
}

/**
 * Form validation helpers
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Accessibility improvements
 */
function improveAccessibility() {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
            button.setAttribute('aria-label', 'Botón interactivo');
        }
    });
    
    // Add alt text to images that don't have it
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.getAttribute('alt')) {
            img.setAttribute('alt', 'Imagen del apartamento');
        }
    });
    
    // Ensure proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        if (!heading.id && heading.textContent) {
            const id = heading.textContent.toLowerCase()
                .replace(/[^a-z0-9\s]/g, '')
                .replace(/\s+/g, '-')
                .substring(0, 50);
            heading.id = id;
        }
    });
}

/**
 * Performance monitoring
 */
function trackPagePerformance() {
    // Monitor page load performance
    window.addEventListener('load', function() {
        if ('performance' in window) {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            
            // Log performance data (could be sent to analytics)
            console.log(`Page load time: ${loadTime}ms`);
        }
    });
}

/**
 * Error handling for image loading
 */
function setupImageErrorHandling() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace broken images with placeholder
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
            this.alt = 'Imagen no disponible';
        });
    });
}

// Initialize error handling when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    setupImageErrorHandling();
    improveAccessibility();
    initializeLazyLoading();
    trackPagePerformance();
});

// Expose functions globally for inline event handlers
window.selectFloor = selectFloor;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.modalChangeImage = modalChangeImage;
window.openDescriptionModal = openDescriptionModal;
window.closeDescriptionModal = closeDescriptionModal;
window.changeImage = changeImage;
window.setModalImage = setModalImage;
