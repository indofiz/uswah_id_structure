// Main JavaScript file for vanilla implementation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeHero();
    initializeCompanyIntro();
    initializeProductsServices();
    initializeClientPortfolio();
    initializeMitra();
    initializeBlog();
    initializeFooter();
});

// Navigation Component
function initializeNavigation() {
    // Navigation state
    let isScrolled = false;
    let isMobileMenuOpen = false;

    // Get DOM elements
    const navContainer = document.getElementById('nav-container');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    // Scroll handler
    function handleScroll() {
        const scrollY = window.scrollY;
        const shouldBeScrolled = scrollY > 50;

        if (shouldBeScrolled !== isScrolled) {
            isScrolled = shouldBeScrolled;
            updateNavStyles();
        }
    }

    // Update navigation styles based on scroll state
    function updateNavStyles() {
        if (isScrolled) {
            navContainer.className = navContainer.className.replace('bg-brand-navy border-navy-dark', 'bg-white border-gray-200 shadow-sm');
            navLinks.forEach(link => {
                link.className = link.className.replace('text-white hover:text-gray-200', 'text-gray-700 hover:text-primary-brand');
            });
            document.getElementById('contact-btn').className = document.getElementById('contact-btn').className.replace('text-white hover:text-gray-200', 'text-gray-700 hover:text-primary-brand');
            mobileMenuBtn.className = mobileMenuBtn.className.replace('text-white', 'text-gray-700');
        } else {
            navContainer.className = navContainer.className.replace('bg-white border-gray-200 shadow-sm', 'bg-brand-navy border-navy-dark');
            navLinks.forEach(link => {
                link.className = link.className.replace('text-gray-700 hover:text-primary-brand', 'text-white hover:text-gray-200');
            });
            document.getElementById('contact-btn').className = document.getElementById('contact-btn').className.replace('text-gray-700 hover:text-primary-brand', 'text-white hover:text-gray-200');
            mobileMenuBtn.className = mobileMenuBtn.className.replace('text-gray-700', 'text-white');
        }
    }

    // Mobile menu toggle
    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;

        if (isMobileMenuOpen) {
            mobileOverlay.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.add('open');
            }, 10);
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('open');
            setTimeout(() => {
                mobileOverlay.classList.add('hidden');
            }, 300);
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    // Close mobile menu
    function closeMobileMenu() {
        if (isMobileMenuOpen) {
            toggleMobileMenu();
        }
    }

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
    mobileOverlay.addEventListener('click', (e) => {
        if (e.target === mobileOverlay) {
            closeMobileMenu();
        }
    });

    // Close mobile menu when clicking on menu links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Handle dropdown menu
    const productsTrigger = document.getElementById('products-trigger');
    const productsContent = document.getElementById('products-content');
    const navMenu = productsTrigger.closest('.nav-menu');

    let hoverTimeout;

    function showDropdown() {
        clearTimeout(hoverTimeout);
        productsContent.classList.remove('opacity-0', 'invisible');
        productsContent.classList.add('opacity-100', 'visible');
    }

    function hideDropdown() {
        hoverTimeout = setTimeout(() => {
            productsContent.classList.remove('opacity-100', 'visible');
            productsContent.classList.add('opacity-0', 'invisible');
        }, 150);
    }

    // Show dropdown on hover/focus
    navMenu.addEventListener('mouseenter', showDropdown);
    navMenu.addEventListener('mouseleave', hideDropdown);
    productsTrigger.addEventListener('focus', showDropdown);

    // Keep dropdown open when hovering over content
    productsContent.addEventListener('mouseenter', () => clearTimeout(hoverTimeout));
    productsContent.addEventListener('mouseleave', hideDropdown);

    // Handle keyboard navigation
    productsTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (productsContent.classList.contains('opacity-0')) {
                showDropdown();
            } else {
                hideDropdown();
            }
        }
    });

    // Initialize styles
    updateNavStyles();
}

// Hero Component
function initializeHero() {
    // Hero content now rendered in HTML
    // JavaScript for hero interactions can be added here if needed
}

// Company Introduction Component
function initializeCompanyIntro() {
    // Company intro content now rendered in HTML
    // JavaScript for company intro interactions can be added here if needed
}

// Products Services Component
function initializeProductsServices() {
    // Products content now rendered in HTML
    // JavaScript for products interactions can be added here if needed
}

// Client Portfolio Component
function initializeClientPortfolio() {
    // Client portfolio content now rendered in HTML
    // JavaScript for portfolio interactions can be added here if needed
}

// Mitra Kami Component
function initializeMitra() {
    // Mitra content now rendered in HTML
    // JavaScript for mitra interactions can be added here if needed
}

// Blog Section Component
function initializeBlog() {
    // Blog content now rendered in HTML
    // JavaScript for blog interactions can be added here if needed
}

// Footer Component
function initializeFooter() {
    // Footer content now rendered in HTML
    // JavaScript for footer interactions can be added here if needed
}