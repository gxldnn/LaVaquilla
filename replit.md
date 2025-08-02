# LaVaquilla - Apartment Rental Website

## Overview

LaVaquilla is a modern static apartment rental website showcasing vacation apartments in Spain. The website features a beautiful blue gradient design with advanced CSS animations and provides information about three featured apartments located in La Ràpita, Roda de Berà, and L'Eucaliptus. The site is built as a responsive static website with HTML, CSS, and JavaScript, featuring modern animations, symmetric image galleries, and enhanced visual effects.

## Recent Changes (August 2025)

- ✅ Implemented symmetric 3x2 image gallery layout for apartment detail pages  
- ✅ Added animated blue gradient hero section with text shimmer effects
- ✅ Enhanced apartment cards with modern hover animations and shimmer effects
- ✅ Fixed mobile navigation menu with improved JavaScript handling
- ✅ Added modern button animations with gradient backgrounds and sweep effects
- ✅ Created Apache deployment configuration with .htaccess file
- ✅ Improved footer styling while maintaining centered layout

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The website follows a traditional multi-page static architecture with the following key design decisions:

**HTML Structure**: Each page maintains a consistent layout with a navigation header, main content sections, and semantic HTML5 elements. The site uses a flat file structure with individual HTML files for each apartment listing and main pages.

**CSS Framework**: Custom CSS with a mobile-first responsive design approach. The styling system uses CSS custom properties (CSS variables) for consistent color theming and maintains a clean, modern aesthetic focused on apartment showcasing.

**JavaScript Functionality**: Vanilla JavaScript handles interactive features including mobile navigation toggle, image gallery modals, and responsive menu controls. The code is modular with separate functions for navigation and modal management.

**Responsive Design**: The website implements a mobile-first design strategy with responsive layouts that adapt to different screen sizes, ensuring optimal viewing on all devices.

### Content Management
**Static Content Structure**: The site uses a simple file-based approach where each apartment has its own dedicated HTML page (apartamento1.html, apartamento2.html, apartamento3.html), allowing for easy content management and fast loading times.

**Image Management**: The site references an images directory structure organized by apartment (images/1/, images/2/, etc.) for systematic asset organization.

### Navigation and User Experience
**Multi-page Navigation**: The site uses traditional page-based navigation with a consistent header across all pages, featuring the LaVaquilla brand logo and main navigation menu.

**Breadcrumb System**: Individual apartment pages include breadcrumb navigation for improved user experience and easy navigation back to the apartment listings.

## External Dependencies

### Third-party Libraries
- **Font Awesome 6.0.0**: Provides iconography throughout the site via CDN integration for social media icons, navigation elements, and decorative features.

### Browser Dependencies
- **Modern Web Standards**: The site relies on modern CSS features including CSS Grid, Flexbox, and CSS custom properties, requiring contemporary browser support.
- **JavaScript ES6+**: Uses modern JavaScript features including arrow functions, const/let declarations, and addEventListener methods.

### Hosting Requirements
- **Static Web Hosting**: The site can be deployed on any static hosting service (GitHub Pages, Netlify, Vercel, etc.) as it requires no server-side processing.
- **Web Server**: Requires basic HTTP server capabilities for serving static files with proper MIME types.

## Apache Deployment Guide

### Quick Deployment to Apache Server
The website is ready for deployment to `/var/www/html` on any Apache server:

```bash
# Copy all files to Apache web directory
sudo cp -r * /var/www/html/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/

# Restart Apache (if needed)
sudo systemctl restart apache2
```

### Included Apache Configuration
- **`.htaccess` file**: Provides clean URLs, caching, compression, and security headers
- **Clean URLs**: Visitors can access pages without `.html` extension (e.g., `/apartamentos` instead of `/apartamentos.html`)
- **Performance Optimization**: GZIP compression and browser caching for faster loading
- **Security Headers**: Basic security improvements with content type and XSS protection

### File Structure for Apache
```
/var/www/html/
├── .htaccess              # Apache configuration
├── index.html             # Homepage
├── apartamentos.html      # Apartment listings
├── contacto.html          # Contact page
├── apartamento1.html      # Apartment detail pages
├── apartamento2.html
├── apartamento3.html
├── styles.css             # Enhanced styling with animations
├── script.js              # JavaScript functionality
└── images/                # Image assets
    ├── 1/                 # Apartment 1 images
    ├── 2/                 # Apartment 2 images
    └── 3/                 # Apartment 3 images
```