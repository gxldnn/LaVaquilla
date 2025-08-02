/**
 * LaVaquilla Apartment Rental Website JavaScript
 * Handles navigation, image galleries, modals, and interactive features
 */

// Global variables for image gallery management
let currentImages = [];
let currentImageIndex = 0;

/**
 * Initialize the website when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeModals();
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
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23f0f0f0"/%3E%3Ctext x="150" y="100" font-family="Arial" font-size="14" fill="%23999" text-anchor="middle"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
            this.classList.add('image-error');
        });
    });
}

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize core functionality
    initializeNavigation();
    initializeModals();
    
    // Initialize performance and accessibility features
    improveAccessibility();
    trackPagePerformance();
    setupImageErrorHandling();
    
    // Initialize lazy loading if supported
    if ('IntersectionObserver' in window) {
        initializeLazyLoading();
    }
    
    // Add smooth transitions to all elements
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '1';
});

/**
 * Keyboard navigation support
 */
document.addEventListener('keydown', function(event) {
    // Arrow key navigation for image gallery
    if (document.getElementById('imageModal').style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            modalChangeImage(-1);
        } else if (event.key === 'ArrowRight') {
            modalChangeImage(1);
        }
    } else {
        // Arrow key navigation for main gallery
        const galleryMain = document.querySelector('.gallery-main');
        if (galleryMain && document.activeElement === galleryMain) {
            if (event.key === 'ArrowLeft') {
                changeImage(-1);
            } else if (event.key === 'ArrowRight') {
                changeImage(1);
            }
        }
    }
});

/**
 * Touch/swipe support for mobile devices
 */
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchmove', function(event) {
    // Prevent default to avoid scrolling while swiping
    if (event.target.closest('.gallery-main') || event.target.closest('.modal-gallery')) {
        event.preventDefault();
    }
});

document.addEventListener('touchend', function(event) {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;
    
    // Only process horizontal swipes
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        const target = event.target.closest('.gallery-main') || event.target.closest('.modal-gallery');
        
        if (target) {
            if (deltaX > 0) {
                // Swipe left - next image
                if (document.getElementById('imageModal').style.display === 'block') {
                    modalChangeImage(1);
                } else {
                    changeImage(1);
                }
            } else {
                // Swipe right - previous image
                if (document.getElementById('imageModal').style.display === 'block') {
                    modalChangeImage(-1);
                } else {
                    changeImage(-1);
                }
            }
        }
    }
    
    // Reset touch coordinates
    touchStartX = 0;
    touchStartY = 0;
});
