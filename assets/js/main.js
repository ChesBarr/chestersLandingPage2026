// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // profile picture click/hold toggle
  (function profileToggle(){
    const p = document.querySelector('.profile img');
    if (!p) return;
    const formal = 'assets/img/formal1x1.jpg';
    const casual = 'assets/img/smile-informal.gif';

    p.addEventListener('click', () => {
      p.src = p.src.includes(formal) ? casual : formal;
    });

    // Hold to temporarily switch
    p.addEventListener('mousedown', () => { p.dataset._old = p.src; p.src = casual; });
    window.addEventListener('mouseup', () => { if (p.dataset._old) { p.src = p.dataset._old; delete p.dataset._old; }});
  })();

  // theme toggle (uses CSS custom properties)
  (function themeToggle(){
    const themeToggleBtn = document.getElementById('themeToggle'); // optional button
    const root = document.documentElement;
    const stored = localStorage.getItem('site-theme');
    if (stored === 'dark') root.classList.add('theme-dark');

    if (!themeToggleBtn) return;
    themeToggleBtn.addEventListener('click', () => {
      const isDark = root.classList.toggle('theme-dark');
      localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
    });
  })();
});
