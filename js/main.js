/**
 * Cưới Hỏi Trầu Cau - Core Shared Interactive Logic
 * Header scroll effect, mobile menu, floating contact widget & scroll-to-top
 */
(function () {
    'use strict';

    // 1. Header Scroll Effect & Scroll-To-Top Visibility
    const header = document.getElementById('header') || document.querySelector('.header');
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        if (scrollTopBtn) {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    // 2. Scroll to top action
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Mobile Menu Navigation Toggle (Trang chủ)
    const mobileBtn = document.getElementById('mobile-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when clicking link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 4. Floating Contact Widget Toggle
    const floatContact = document.getElementById('floatContact');
    const floatBtn = document.getElementById('floatBtn');

    if (floatBtn && floatContact) {
        floatBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            floatContact.classList.toggle('active');
            const icon = floatBtn.querySelector('i');
            if (icon) {
                if (floatContact.classList.contains('active')) {
                    icon.classList.remove('fa-comment-dots');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-comment-dots');
                }
            }
        });

        // Close float menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!floatContact.contains(e.target) && floatContact.classList.contains('active')) {
                floatContact.classList.remove('active');
                const icon = floatBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-comment-dots');
                }
            }
        });
    }

    // 5. Internal Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 6. Intersection Observer for Scroll Fade-In-Up Animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(element => {
            observer.observe(element);
        });
    } else {
        // Fallback for older browsers
        document.querySelectorAll('.fade-in-up').forEach(element => {
            element.classList.add('visible');
        });
    }
})();

