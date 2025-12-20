/**
 * TIGRAY 2 Movement - Main JavaScript
 * Handles navigation, animations, and interactive features
 */

document.addEventListener('DOMContentLoaded', function() {
    // ========== MOBILE NAVIGATION ==========
    const hambtn = document.getElementById('hambtn');
    const primaryMenu = document.getElementById('primary-menu');
    const menuLinks = document.querySelectorAll('.menu a');
    
    // Toggle mobile menu
    if (hambtn && primaryMenu) {
        hambtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle menu visibility
            this.setAttribute('aria-expanded', !isExpanded);
            primaryMenu.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = this.querySelectorAll('span');
            if (!isExpanded) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking links
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                hambbtn.setAttribute('aria-expanded', 'false');
                primaryMenu.classList.remove('active');
                
                // Reset hamburger icon
                const spans = hambtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = hambtn.contains(event.target) || primaryMenu.contains(event.target);
            if (!isClickInside && primaryMenu.classList.contains('active')) {
                hambtn.setAttribute('aria-expanded', 'false');
                primaryMenu.classList.remove('active');
                
                // Reset hamburger icon
                const spans = hambtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // ========== SMOOTH SCROLLING ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (primaryMenu && primaryMenu.classList.contains('active')) {
                    hambtn.setAttribute('aria-expanded', 'false');
                    primaryMenu.classList.remove('active');
                    
                    // Reset hamburger icon
                    const spans = hambtn.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== ACTIVE NAV LINK ON SCROLL ==========
    const sections = document.querySelectorAll('section[id], main[id], article[id]');
    const navLinks = document.querySelectorAll('.menu a, .footnav a');
    
    function highlightNavLink() {
        let scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}` || 
                        link.getAttribute('href').includes(`#${sectionId}`)) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Highlight current page in navigation
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === '/') ||
                (currentPage === 'index.html' && linkHref === '/')) {
                link.classList.add('active');
            } else if (linkHref.startsWith('#') && !linkHref.includes(currentPage)) {
                link.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    window.addEventListener('load', highlightNavLink);
    
    // ========== CARD ANIMATIONS ==========
    const cards = document.querySelectorAll('.card, .youth-card, .goal-card, .document-card, .action-card');
    
    // Add hover animation for cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });
    
    // ========== BUTTON ANIMATIONS ==========
    const buttons = document.querySelectorAll('.btn, .cta');
    
    buttons.forEach(button => {
        // Ripple effect
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // ========== PARALLAX EFFECT FOR HERO ==========
    const heroSection = document.querySelector('.hero, .manifesto-hero, .vision-hero, .truth-hero, .action-hero, .youth-hero');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Subtle parallax for hero backgrounds
            if (scrolled < heroSection.offsetHeight) {
                heroSection.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        });
    }
    
    // ========== LAZY LOAD IMAGES ==========
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ========== FORM VALIDATION (for future forms) ==========
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'var(--accent-red)';
                    
                    // Add error message
                    if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
                        const errorMsg = document.createElement('span');
                        errorMsg.classList.add('error-message');
                        errorMsg.style.color = 'var(--accent-red)';
                        errorMsg.style.fontSize = '0.8rem';
                        errorMsg.style.marginTop = '0.25rem';
                        errorMsg.style.display = 'block';
                        errorMsg.textContent = 'This field is required';
                        field.parentNode.appendChild(errorMsg);
                    }
                } else {
                    field.style.borderColor = '';
                    const errorMsg = field.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.remove();
                    }
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                
                // Scroll to first error
                const firstError = this.querySelector('[required]:invalid');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
            }
        });
        
        // Clear error on input
        form.querySelectorAll('[required]').forEach(field => {
            field.addEventListener('input', function() {
                this.style.borderColor = '';
                const errorMsg = this.nextElementSibling;
                if (errorMsg && errorMsg.classList.contains('error-message')) {
                    errorMsg.remove();
                }
            });
        });
    });
    
    // ========== BACK TO TOP BUTTON ==========
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    backToTopButton.classList.add('back-to-top');
    
    // Add styles for back to top button
    const backToTopStyles = document.createElement('style');
    backToTopStyles.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(90deg, var(--accent-red), var(--accent-red-2));
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 1.2rem;
            cursor: pointer;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(178, 34, 34, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .back-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(178, 34, 34, 0.4);
        }
        
        @media (max-width: 768px) {
            .back-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 1rem;
            }
        }
    `;
    document.head.appendChild(backToTopStyles);
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Back to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ========== PAGE LOAD ANIMATIONS ==========
    // Add loaded class to body when page is fully loaded
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate in elements with delay
        const animateElements = document.querySelectorAll('.animate-in');
        animateElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.1}s`;
        });
    });
    
    // ========== SECURITY REMINDER ==========
    // Add security console log (only in development)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('%c🔒 TIGRAY 2 - Security Notice 🔒', 'color: #ffd700; font-size: 16px; font-weight: bold;');
        console.log('%cAlways use VPN when accessing this site from high-risk areas.', 'color: #b22222;');
        console.log('%cNever share sensitive information through insecure channels.', 'color: #b22222;');
    }
    
    // ========== SOCIAL SHARE ==========
    const socialShareButtons = document.querySelectorAll('[data-share]');
    
    socialShareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-share');
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent('Join the TIGRAY 2 Movement for internal renewal and sovereignty. #Tigray2 #ChangeGeneration');
            
            let shareUrl;
            
            switch (platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${text}%20${url}`;
                    break;
                case 'telegram':
                    shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
                    break;
                default:
                    return;
            }
            
            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });
    
    // ========== CURRENT YEAR IN FOOTER ==========
    const currentYearElements = document.querySelectorAll('#currentYear');
    const currentYear = new Date().getFullYear();
    
    currentYearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // ========== PROGRESS BAR FOR READING ==========
    const progressBar = document.createElement('div');
    progressBar.classList.add('reading-progress');
    
    const progressStyles = document.createElement('style');
    progressStyles.textContent = `
        .reading-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--accent-red), var(--accent-red-2));
            z-index: 9999;
            transition: width 0.1s ease;
        }
    `;
    document.head.appendChild(progressStyles);
    document.body.appendChild(progressBar);
    
    // Update progress bar
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// ========== SERVICE WORKER FOR OFFLINE SUPPORT ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}

// ========== ERROR HANDLING ==========
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// ========== OFFLINE DETECTION ==========
window.addEventListener('offline', function() {
    // Could show an offline notification
    console.log('You are now offline. Some features may not work.');
});

window.addEventListener('online', function() {
    console.log('You are back online.');
});

// ========== PERFORMANCE MONITORING ==========
// Log page load time
window.addEventListener('load', function() {
    if (window.performance) {
        const timing = performance.getEntriesByType('navigation')[0];
        const loadTime = timing.loadEventEnd - timing.startTime;
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
    }
});
