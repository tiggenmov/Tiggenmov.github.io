// Small site JS: mobile toggle, pointer parallax, year
(function(){
  // mobile menu
  const btn = document.getElementById('hambtn');
  const menu = document.getElementById('primary-menu');
  if(btn && menu){
    btn.addEventListener('click', ()=>{
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if(open){
        menu.style.display = '';
        menu.style.position = '';
      } else {
        menu.style.display = 'flex';
        menu.style.position = 'absolute';
        menu.style.top = '66px';
        menu.style.right = '18px';
        menu.style.background = 'linear-gradient(180deg, rgba(3,3,3,0.86), rgba(3,3,3,0.96))';
        menu.style.padding = '12px';
        menu.style.borderRadius = '12px';
        menu.style.flexDirection = 'column';
        menu.style.gap = '10px';
        menu.style.boxShadow = '0 18px 60px rgba(0,0,0,0.6)';
      }
    });
    window.addEventListener('resize', ()=>{ if(window.innerWidth > 820){ menu.style.display = ''; menu.style.position = ''; }});
  }

  // hero subtle pointer parallax for hero-side
  const hero = document.getElementById('hero');
  if(hero){
    const side = hero.querySelector('.hero-side');
    hero.addEventListener('pointermove', (e)=>{
      const r = hero.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if(side) side.style.transform = `translate3d(${px * 10}px, ${py * 6}px, 0)`;
    });
    hero.addEventListener('pointerleave', ()=>{ const side = hero.querySelector('.hero-side'); if(side) side.style.transform = ''; });
  }

  // set current year
  const yearEl = document.getElementById('currentYear');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
})();
