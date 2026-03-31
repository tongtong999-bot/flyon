// ============================================================
// GALIVIEW — INTERACTIVE SCRIPTS
// ============================================================

// ── DOM Content Loaded ──
document.addEventListener('DOMContentLoaded', function() {
    initScrollEffects();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
});

// ── Scroll Effects ──
function initScrollEffects() {
    const header = document.querySelector('.main-header');
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal animations on scroll
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Initial check and scroll listener
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
}

// ── Mobile Menu Toggle ──
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mainNav.contains(event.target) && !mobileToggle.contains(event.target)) {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    }
}

// ── Smooth Scroll for Anchor Links ──
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(href);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ── Contact Form Validation ──
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation
            let isValid = true;
            let errorMessage = '';

            if (name.length < 2) {
                isValid = false;
                errorMessage = 'Please enter your name';
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            } else if (message.length < 10) {
                isValid = false;
                errorMessage = 'Please enter a message (at least 10 characters)';
            }

            if (isValid) {
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert(errorMessage);
            }
        });
    }
}

// ── Email Validation Helper ──
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ── Add Loading Animation Prevention ──
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ── Smooth Page Transitions ──
if ('document' in window && 'performance' in window) {
    window.addEventListener('beforeunload', function() {
        document.body.classList.add('page-transition');
    });
}

// ── Parallax Effect for Hero Orbs (Optional Enhancement) ──
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    const orbs = document.querySelectorAll('.hero-orb');

    if (heroSection && orbs.length > 0) {
        window.addEventListener('mousemove', function(e) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            orbs.forEach((orb, index) => {
                const factor = (index + 1) * 0.3;
                orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        });
    }
}

// Initialize parallax effect if desired
// initParallaxEffect();

// ── Add Active State to Current Page Navigation ──
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');

        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// Run on page load
setActiveNavLink();
