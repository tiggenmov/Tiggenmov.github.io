// Minimal JS: mobile menu + hero pointer parallax
(function(){
  // nav toggle
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('nav-list');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.style.display = open ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '12px';
      nav.style.padding = '12px';
      nav.style.background = 'linear-gradient(180deg, rgba(3,3,3,0.72), rgba(3,3,3,0.8))';
      nav.style.borderRadius = '12px';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '66px';
    });
    // close on resize
    window.addEventListener('resize', ()=>{ if(window.innerWidth > 820){ nav.style.display = 'flex'; nav.style.position = 'static'; }});
  }

  // hero pointer parallax
  const hero = document.getElementById('hero');
  if(hero){
    hero.addEventListener('pointermove', (e)=>{
      const rect = hero.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const bg = hero.querySelector('.hero::before'); // not directly selectable
      // subtle transform via style on pseudo not possible; instead nudge hero background element
      hero.style.setProperty('--mx', (px*6).toFixed(2) + 'px');
      hero.style.setProperty('--my', (py*6).toFixed(2) + 'px');
      hero.querySelector('::before');
      // fallback: transform the hero-inner slightly
      const inner = hero.querySelector('.hero-inner');
      if(inner) inner.style.transform = `translate3d(${px*10}px, ${py*6}px, 0)`;
    });
    hero.addEventListener('pointerleave', ()=>{
      const inner = hero.querySelector('.hero-inner');
      if(inner) inner.style.transform = '';
    });
  }

  // current year in footer
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;
})();
