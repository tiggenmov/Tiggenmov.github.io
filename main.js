// Tigray Generational Movement - Main JavaScript
(function(){
  
  // ====================
  // MOBILE MENU TOGGLE
  // ====================
  const btn = document.getElementById('hambtn');
  const menu = document.getElementById('primary-menu');
  
  if(btn && menu){
    btn.addEventListener('click', ()=>{
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      
      if(open){
        // Close menu
        menu.style.display = '';
        menu.style.position = '';
        menu.style.background = '';
        menu.style.padding = '';
        menu.style.borderRadius = '';
        menu.style.flexDirection = '';
        menu.style.gap = '';
        menu.style.boxShadow = '';
        menu.style.border = '';
        document.body.style.overflow = ''; // Re-enable scrolling
      } else {
        // Open menu with Tigray theme
        menu.style.display = 'flex';
        menu.style.position = 'fixed';
        menu.style.top = '70px';
        menu.style.right = '20px';
        menu.style.background = 'linear-gradient(180deg, rgba(0,0,0,0.95), rgba(178,34,34,0.1))';
        menu.style.backdropFilter = 'blur(10px)';
        menu.style.padding = '20px';
        menu.style.borderRadius = '12px';
        menu.style.flexDirection = 'column';
        menu.style.gap = '15px';
        menu.style.boxShadow = '0 20px 60px rgba(178, 34, 34, 0.3)';
        menu.style.border = '1px solid rgba(178, 34, 34, 0.3)';
        menu.style.zIndex = '9999';
        menu.style.width = '250px';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    });
    
    // Close menu on window resize
    window.addEventListener('resize', ()=>{ 
      if(window.innerWidth > 820){ 
        menu.style.display = ''; 
        menu.style.position = '';
        menu.style.background = '';
        menu.style.padding = '';
        menu.style.borderRadius = '';
        menu.style.flexDirection = '';
        menu.style.gap = '';
        menu.style.boxShadow = '';
        menu.style.border = '';
        document.body.style.overflow = '';
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if(menu.style.display === 'flex' && 
         !menu.contains(event.target) && 
         !btn.contains(event.target)) {
        menu.style.display = '';
        menu.style.position = '';
        menu.style.background = '';
        menu.style.padding = '';
        menu.style.borderRadius = '';
        menu.style.flexDirection = '';
        menu.style.gap = '';
        menu.style.boxShadow = '';
        menu.style.border = '';
        document.body.style.overflow = '';
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ====================
  // HERO PARALLAX EFFECT
  // ====================
  const hero = document.querySelector('.hero');
  if(hero){
    const side = hero.querySelector('.hero-side');
    if(side) {
      hero.addEventListener('pointermove', (e)=>{
        const r = hero.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        side.style.transform = `translate3d(${px * 15}px, ${py * 8}px, 0)`;
        side.style.transition = 'transform 0.1s ease-out';
      });
      
      hero.addEventListener('pointerleave', ()=>{ 
        side.style.transform = 'translate3d(0, 0, 0)';
        side.style.transition = 'transform 0.5s ease-out';
      });
    }
  }

  // ====================
  // SET CURRENT YEAR
  // ====================
  const yearEl = document.getElementById('currentYear');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  
  // ====================
  // SCROLL ANIMATIONS
  // ====================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe all pillars
  document.querySelectorAll('.pillar').forEach(pillar => {
    observer.observe(pillar);
  });
  
  // ====================
  // BACK TO TOP BUTTON
  // ====================
  // Create button if not exists
  if(!document.getElementById('backToTop')) {
    const backToTop = document.createElement('button');
    backToTop.id = 'backToTop';
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: #b22222;
      color: white;
      border: none;
      border-radius: 50%;
      font-size: 20px;
      cursor: pointer;
      display: none;
      z-index: 1000;
      box-shadow: 0 4px 15px rgba(178, 34, 34, 0.4);
      transition: all 0.3s;
    `;
    
    backToTop.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
      this.style.background = '#8b0000';
      this.style.boxShadow = '0 6px 20px rgba(178, 34, 34, 0.6)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.background = '#b22222';
      this.style.boxShadow = '0 4px 15px rgba(178, 34, 34, 0.4)';
    });
    
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(backToTop);
    
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
      const backToTopBtn = document.getElementById('backToTop');
      if(backToTopBtn) {
        if(window.scrollY > 500) {
          backToTopBtn.style.display = 'block';
        } else {
          backToTopBtn.style.display = 'none';
        }
      }
    });
  }
  
  // ====================
  // FORM VALIDATION
  // ====================
  const contactForm = document.getElementById('contactForm');
  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const requiredFields = this.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if(!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#b22222';
          field.style.boxShadow = '0 0 5px rgba(178, 34, 34, 0.5)';
        } else {
          field.style.borderColor = '';
          field.style.boxShadow = '';
        }
      });
      
      if(!isValid) {
        e.preventDefault();
        // Create error message
        const errorMsg = document.createElement('div');
        errorMsg.style.cssText = `
          background: #f8d7da;
          color: #721c24;
          padding: 10px;
          border-radius: 4px;
          margin: 10px 0;
          text-align: center;
        `;
        errorMsg.innerHTML = '⚠️ Please fill all required fields marked with *';
        
        // Insert after form
        this.parentNode.insertBefore(errorMsg, this.nextSibling);
        
        // Remove after 5 seconds
        setTimeout(() => {
          errorMsg.remove();
        }, 5000);
      }
    });
  }
  
  // ====================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if(targetId === '#' || targetId === '#!') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ====================
  // ADD ANIMATION CSS
  // ====================
  // Add animation styles if not already present
  if(!document.querySelector('#animation-styles')) {
    const style = document.createElement('style');
    style.id = 'animation-styles';
    style.textContent = `
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
      
      .animate-in {
        animation: fadeInUp 0.8s ease-out both;
      }
      
      .pillar:nth-child(1) { animation-delay: 0.1s; }
      .pillar:nth-child(2) { animation-delay: 0.3s; }
      .pillar:nth-child(3) { animation-delay: 0.5s; }
      
      /* Mobile menu button animation */
      #hambtn span {
        transition: transform 0.3s, opacity 0.3s;
      }
      
      #hambbtn[aria-expanded="true"] span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }
      
      #hambtn[aria-expanded="true"] span:nth-child(2) {
        opacity: 0;
      }
      
      #hambtn[aria-expanded="true"] span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    `;
    document.head.appendChild(style);
  }
  
  console.log('Tigray Generational Movement JS loaded successfully.');
  
})();
