// ============================================
// TIGRAY GENERATIONAL MOVEMENT
// Advanced Animations & Interactions
// Version: 1.0 | 2025
// ============================================

'use strict';

class TigrayAnimations {
    constructor() {
        this.init();
    }

    // ====================
    // INITIALIZATION
    // ====================
    init() {
        console.log('🏔️ Tigray Generational Movement - Animations Initializing...');
        
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Core animations
        this.setupScrollAnimations();
        this.setupTypewriterEffects();
        this.setupProgressBar();
        this.setupHoverAnimations();
        this.setupParallax();
        this.setupBackToTop();
        this.setupStatsCounter();
        this.setupMobileMenu();
        this.setupPageTransitions();
        this.setupKeyboardShortcuts();
        
        // Performance optimizations
        this.optimizeAnimations();
        
        console.log('✅ Tigray Animations loaded successfully!');
    }

    // ====================
    // SCROLL ANIMATIONS
    // ====================
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Add specific animations
                    if (entry.target.classList.contains('card')) {
                        entry.target.classList.add('float');
                    }
                    
                    if (entry.target.classList.contains('hero-stats')) {
                        this.animateStats();
                    }
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll('.card, .update, .pillar, .about-media, .hero-side, .motto-image').forEach(el => {
            observer.observe(el);
        });
    }

    // ====================
    // TYPEWRITER EFFECTS
    // ====================
    setupTypewriterEffects() {
        // Motto typewriter
        const motto = document.querySelector('.motto');
        if (motto && !motto.classList.contains('typewriter-complete')) {
            const text = motto.textContent;
            motto.textContent = '';
            motto.classList.add('typewriter');
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    motto.textContent += text.charAt(i);
                    i++;
                    requestAnimationFrame(() => setTimeout(typeWriter, 50));
                } else {
                    motto.classList.remove('typewriter');
                    motto.classList.add('typewriter-complete');
                }
            };
            
            setTimeout(typeWriter, 1000);
        }

        // Tagline typewriter (if exists)
        const tagline = document.querySelector('.tagline');
        if (tagline && !tagline.classList.contains('typewriter-complete')) {
            const text = tagline.textContent;
            tagline.textContent = '';
            tagline.classList.add('typewriter');
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    tagline.textContent += text.charAt(i);
                    i++;
                    requestAnimationFrame(() => setTimeout(typeWriter, 30));
                } else {
                    tagline.classList.remove('typewriter');
                    tagline.classList.add('typewriter-complete');
                }
            };
            
            setTimeout(typeWriter, 1500);
        }
    }

    // ====================
    // SCROLL PROGRESS BAR
    // ====================
    setupProgressBar() {
        if (!document.getElementById('scrollProgress')) {
            const progressBar = document.createElement('div');
            progressBar.id = 'scrollProgress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                height: 3px;
                background: linear-gradient(90deg, #b22222, #ffd700);
                z-index: 9999;
                width: 0%;
                transition: width 0.1s;
                opacity: 0;
            `;
            document.body.appendChild(progressBar);
        }

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const progressBar = document.getElementById('scrollProgress');
                    if (progressBar) {
                        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                        const scrolled = (winScroll / height) * 100;
                        
                        progressBar.style.width = scrolled + "%";
                        progressBar.style.opacity = scrolled > 0 ? '1' : '0';
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ====================
    // HOVER ANIMATIONS
    // ====================
    setupHoverAnimations() {
        const interactiveElements = document.querySelectorAll('.btn, .cta, .readmore, .menu a, .card, .pillar');
        
        interactiveElements.forEach(element => {
            // Mouse enter
            element.addEventListener('mouseenter', (e) => {
                e.currentTarget.classList.add('hover-active');
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                
                // Add glow for important elements
                if (e.currentTarget.classList.contains('cta') || 
                    e.currentTarget.classList.contains('btn-primary')) {
                    e.currentTarget.classList.add('pulse-red');
                }
            });
            
            // Mouse leave
            element.addEventListener('mouseleave', (e) => {
                e.currentTarget.classList.remove('hover-active');
                e.currentTarget.style.transform = '';
                e.currentTarget.classList.remove('pulse-red');
            });
            
            // Touch devices
            element.addEventListener('touchstart', (e) => {
                e.currentTarget.classList.add('touch-active');
                setTimeout(() => {
                    e.currentTarget.classList.remove('touch-active');
                }, 300);
            });
        });
    }

    // ====================
    // PARALLAX EFFECTS
    // ====================
    setupParallax() {
        const hero = document.querySelector('.hero');
        const heroSide = document.querySelector('.hero-side');
        
        if (hero && heroSide) {
            let ticking = false;
            
            hero.addEventListener('mousemove', (e) => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        const rect = hero.getBoundingClientRect();
                        const mouseX = e.clientX - rect.left;
                        const mouseY = e.clientY - rect.top;
                        
                        // Calculate movement (subtle effect)
                        const moveX = (mouseX / rect.width - 0.5) * 15;
                        const moveY = (mouseY / rect.height - 0.5) * 8;
                        
                        // Apply transform with hardware acceleration
                        heroSide.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
                        ticking = false;
                    });
                    ticking = true;
                }
            });
            
            // Reset on mouse leave
            hero.addEventListener('mouseleave', () => {
                heroSide.style.transform = 'translate3d(0, 0, 0)';
                heroSide.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
            });
        }
    }

    // ====================
    // BACK TO TOP BUTTON
    // ====================
    setupBackToTop() {
        if (!document.getElementById('backToTop')) {
            const backToTop = document.createElement('button');
            backToTop.id = 'backToTop';
            backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
            backToTop.setAttribute('aria-label', 'Back to top');
            backToTop.setAttribute('title', 'Back to top');
            backToTop.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, #b22222, #8b0000);
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 20px;
                cursor: pointer;
                display: none;
                z-index: 1000;
                box-shadow: 0 4px 15px rgba(178, 34, 34, 0.4);
                transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                opacity: 0;
                transform: translateY(20px);
            `;
            
            // Hover effects
            backToTop.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.1)';
                this.style.boxShadow = '0 6px 20px rgba(178, 34, 34, 0.6)';
                this.style.background = 'linear-gradient(135deg, #8b0000, #b22222)';
            });
            
            backToTop.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 4px 15px rgba(178, 34, 34, 0.4)';
                this.style.background = 'linear-gradient(135deg, #b22222, #8b0000)';
            });
            
            // Click to scroll
            backToTop.addEventListener('click', () => {
                window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth' 
                });
            });
            
            document.body.appendChild(backToTop);
        }
        
        // Show/hide with smooth animation
        window.addEventListener('scroll', () => {
            const backToTop = document.getElementById('backToTop');
            if (backToTop) {
                const show = window.scrollY > 500;
                
                if (show) {
                    backToTop.style.display = 'block';
                    requestAnimationFrame(() => {
                        backToTop.style.opacity = '1';
                        backToTop.style.transform = 'translateY(0)';
                    });
                } else {
                    backToTop.style.opacity = '0';
                    backToTop.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        if (window.scrollY <= 500) {
                            backToTop.style.display = 'none';
                        }
                    }, 300);
                }
            }
        });
    }

    // ====================
    // STATS COUNTER
    // ====================
    setupStatsCounter() {
        const stats = document.querySelectorAll('.hero-stats strong');
        if (stats.length > 0) {
            // Trigger on scroll into view
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateStats();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            stats.forEach(stat => {
                if (stat.closest('.hero-stats')) {
                    statsObserver.observe(stat.closest('.hero-stats'));
                }
            });
        }
    }

    animateStats() {
        const stats = document.querySelectorAll('.hero-stats strong');
        
        stats.forEach((stat, index) => {
            const originalText = stat.textContent;
            const isNumber = originalText.match(/\d+/);
            
            if (isNumber) {
                const target = parseInt(isNumber[0]);
                let current = 0;
                const increment = target / 30;
                const hasPlus = originalText.includes('+');
                const duration = 1500; // 1.5 seconds
                const startTime = Date.now();
                
                const updateCounter = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function for smooth animation
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    current = target * easeOut;
                    
                    stat.textContent = Math.floor(current) + (hasPlus ? '+' : '');
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = originalText;
                    }
                };
                
                // Delay each counter slightly
                setTimeout(() => requestAnimationFrame(updateCounter), index * 200);
            }
        });
    }

    // ====================
    // MOBILE MENU ANIMATIONS
    // ====================
    setupMobileMenu() {
        const hambtn = document.getElementById('hambtn');
        const menu = document.getElementById('primary-menu');
        
        if (hambtn && menu) {
            hambtn.addEventListener('click', () => {
                const isExpanded = hambtn.getAttribute('aria-expanded') === 'true';
                hambbtn.setAttribute('aria-expanded', !isExpanded);
                
                // Animate hamburger icon
                const spans = hambtn.querySelectorAll('span');
                if (isExpanded) {
                    // Close animation
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                } else {
                    // Open animation
                    spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
                }
            });
        }
    }

    // ====================
    // PAGE TRANSITIONS
    // ====================
    setupPageTransitions() {
        // Add loaded class to body
        setTimeout(() => {
            document.body.classList.add('page-loaded');
            
            // Animate hero elements sequentially
            const heroElements = document.querySelectorAll('.hero-title, .hero-lead, .hero-actions, .main-title');
            heroElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 200 * (index + 1));
            });
        }, 100);
        
        // Smooth page transitions for internal links
        document.querySelectorAll('a[href^="/"], a[href^="."]').forEach(link => {
            if (link.href && !link.href.includes('#') && link.href !== window.location.href) {
                link.addEventListener('click', (e) => {
                    if (!link.target || link.target === '_self') {
                        e.preventDefault();
                        
                        // Add fade out effect
                        document.body.style.opacity = '0.7';
                        document.body.style.transition = 'opacity 0.3s ease';
                        
                        setTimeout(() => {
                            window.location.href = link.href;
                        }, 300);
                    }
                });
            }
        });
    }

    // ====================
    // KEYBOARD SHORTCUTS
    // ====================
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl + Arrow Up = Back to top
            if (e.ctrlKey && e.key === 'ArrowUp') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
            // Escape = Close mobile menu
            if (e.key === 'Escape') {
                const hambtn = document.getElementById('hambtn');
                if (hambtn && hambtn.getAttribute('aria-expanded') === 'true') {
                    hambtn.click();
                }
            }
            
            // Alt + S = Scroll to take action
            if (e.altKey && e.key === 's') {
                e.preventDefault();
                const actionSection = document.querySelector('#pillars, .pillars');
                if (actionSection) {
                    actionSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // ====================
    // PERFORMANCE OPTIMIZATIONS
    // ====================
    optimizeAnimations() {
        // Use passive event listeners for better scrolling performance
        const options = { passive: true };
        
        // Optimize scroll events
        ['scroll', 'touchmove', 'wheel'].forEach(event => {
            window.addEventListener(event, () => {}, options);
        });
        
        // Use will-change for elements that will animate
        document.querySelectorAll('.card, .btn, .hero-side').forEach(el => {
            el.style.willChange = 'transform, opacity';
        });
        
        // Clean up will-change after animations
        setTimeout(() => {
            document.querySelectorAll('.card, .btn, .hero-side').forEach(el => {
                el.style.willChange = 'auto';
            });
        }, 3000);
    }

    // ====================
    // UTILITY FUNCTIONS
    // ====================
    debounce(func, wait = 20) {
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

    throttle(func, limit = 100) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ====================
// INITIALIZE ANIMATIONS
// ====================
// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Create global instance
    window.tigrayAnimations = new TigrayAnimations();
    
    // Also expose for debugging
    if (window.console) {
        console.log('🏔️ Tigray Animations ready!');
        console.log('ℹ️ Available as: window.tigrayAnimations');
    }
});

// Fallback for older browsers
if (typeof window.CustomEvent !== "function") {
    window.CustomEvent = function(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        const evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    };
}
