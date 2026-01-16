/**
 * CV Website - JavaScript
 * Optimized for Performance & User Experience
 */

// ==============================================
// UTILITY FUNCTIONS
// ==============================================

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==============================================
// NAVIGATION
// ==============================================

class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        // Scroll behavior
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
        
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMenu());
        }
        
        // Close menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
                this.closeMenu();
            }
        });
        
        // Smooth scroll for navigation links
        this.setupSmoothScroll();
    }
    
    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
    
    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (this.navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    closeMenu() {
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navHeight = this.navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ==============================================
// SCROLL ANIMATIONS
// ==============================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.reveal-fade, .reveal-left, .reveal-right, .reveal-scale');
        this.observer = null;
        
        this.init();
    }
    
    init() {
        // Use Intersection Observer for better performance
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optionally unobserve after animation
                    // this.observer.unobserve(entry.target);
                }
            });
        }, options);
        
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }
    
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

// ==============================================
// SCROLL TO TOP BUTTON
// ==============================================

class ScrollToTop {
    constructor() {
        this.button = document.getElementById('scrollTop');
        this.init();
    }
    
    init() {
        if (!this.button) return;
        
        // Show/hide button on scroll
        window.addEventListener('scroll', throttle(() => this.toggleVisibility(), 100));
        
        // Scroll to top on click
        this.button.addEventListener('click', () => this.scrollToTop());
    }
    
    toggleVisibility() {
        if (window.scrollY > 500) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ==============================================
// CONTACT FORM
// ==============================================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!this.validateForm(data)) {
            return;
        }
        
        // Show success message
        this.showMessage('Thank you for your message! I will get back to you soon.', 'success');
        
        // Reset form
        this.form.reset();
        
        // In production, you would send this data to a server
        console.log('Form submitted:', data);
    }
    
    validateForm(data) {
        const { name, email, message } = data;
        
        if (!name || !email || !message) {
            this.showMessage('Please fill in all fields.', 'error');
            return false;
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return false;
        }
        
        return true;
    }
    
    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        messageElement.style.cssText = `
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.5rem;
            font-weight: 500;
            background: ${type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
            color: ${type === 'success' ? '#10b981' : '#ef4444'};
            border: 1px solid ${type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'};
        `;
        
        // Insert message
        this.form.insertBefore(messageElement, this.form.firstChild);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageElement.style.opacity = '0';
            messageElement.style.transition = 'opacity 0.3s ease-out';
            setTimeout(() => messageElement.remove(), 300);
        }, 5000);
    }
}

// ==============================================
// LAZY LOADING IMAGES
// ==============================================

class LazyLoadImages {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }
    
    init() {
        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports lazy loading
            return;
        }
        
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        this.images.forEach(img => imageObserver.observe(img));
    }
}

// ==============================================
// PERFORMANCE MONITORING
// ==============================================

class PerformanceMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        // Log performance metrics
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                const connectTime = perfData.responseEnd - perfData.requestStart;
                const renderTime = perfData.domComplete - perfData.domLoading;
                
                console.log('Performance Metrics:');
                console.log(`Page Load Time: ${pageLoadTime}ms`);
                console.log(`Connect Time: ${connectTime}ms`);
                console.log(`Render Time: ${renderTime}ms`);
                
                // You can send these metrics to analytics
            }, 0);
        });
    }
}

// ==============================================
// INITIALIZE ALL MODULES
// ==============================================

class App {
    constructor() {
        this.modules = [];
        this.init();
    }
    
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeModules());
        } else {
            this.initializeModules();
        }
    }
    
    initializeModules() {
        try {
            // Initialize all modules
            this.modules.push(new Navigation());
            this.modules.push(new ScrollAnimations());
            this.modules.push(new ScrollToTop());
            this.modules.push(new ContactForm());
            this.modules.push(new LazyLoadImages());
            
            // Initialize performance monitoring in development
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                this.modules.push(new PerformanceMonitor());
            }
            
            console.log('✅ CV Website initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing website:', error);
        }
    }
    
    destroy() {
        // Clean up all modules
        this.modules.forEach(module => {
            if (module.destroy && typeof module.destroy === 'function') {
                module.destroy();
            }
        });
    }
}

// ==============================================
// START APPLICATION
// ==============================================

const app = new App();

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { App, Navigation, ScrollAnimations, ScrollToTop, ContactForm };
}
