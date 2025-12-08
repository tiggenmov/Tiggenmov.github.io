/* Tigray Generational Movement - Animation Styles */

/* Initial state for animated elements */
.hero-title,
.hero-lead,
.hero-actions {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.page-loaded .hero-title,
.page-loaded .hero-lead,
.page-loaded .hero-actions {
    opacity: 1;
    transform: translateY(0);
}

/* Scroll animation classes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-in {
    animation: fadeInUp 0.8s ease-out both;
}

.animate-in-left {
    animation: fadeInLeft 0.8s ease-out both;
}

.animate-in-right {
    animation: fadeInRight 0.8s ease-out both;
}

/* Stagger animations */
.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.3s; }
.card:nth-child(3) { animation-delay: 0.5s; }

.update:nth-child(1) { animation-delay: 0.2s; }
.update:nth-child(2) { animation-delay: 0.4s; }

/* Loading spinner */
.loading-spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(178, 34, 34, 0.3);
    border-radius: 50%;
    border-top-color: #b22222;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Pulse animation for important elements */
@keyframes pulse-gold {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4); }
    50% { box-shadow: 0 0 0 10px rgba(255, 215, 0, 0); }
}

@keyframes pulse-red {
    0%, 100% { box-shadow: 0 0 0 0 rgba(178, 34, 34, 0.4); }
    50% { box-shadow: 0 0 0 10px rgba(178, 34, 34, 0); }
}

.pulse-gold {
    animation: pulse-gold 2s infinite;
}

.pulse-red {
    animation: pulse-red 2s infinite;
}

/* Shake animation for attention */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.shake {
    animation: shake 0.8s ease;
}

/* Bounce animation */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
}

.bounce {
    animation: bounce 1s;
}

/* Float animation for cards */
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.float {
    animation: float 6s ease-in-out infinite;
}

/* Glitch text effect */
@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}

.glitch {
    animation: glitch 0.5s infinite;
    color: #b22222;
    position: relative;
}

/* Typewriter cursor */
.typewriter::after {
    content: '|';
    animation: blink 1s infinite;
    color: #ffd700;
    font-weight: bold;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

/* Smooth transitions for all interactive elements */
.btn, .cta, .card, .menu a, .readmore {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Enhanced hover effects */
.btn:hover, .cta:hover {
    transform: translateY(-5px) scale(1.05);
}

.card:hover {
    transform: translateY(-15px) scale(1.03);
}

/* Mobile touch feedback */
@media (hover: none) and (pointer: coarse) {
    .btn:active, .cta:active, .card:active {
        transform: scale(0.95);
        transition: transform 0.1s;
    }
}
