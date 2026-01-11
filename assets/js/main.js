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
    const casual = 'assets/img/me17.jpg';

    p.addEventListener('click', () => {
      p.src = p.src.includes(formal) ? casual : formal;
    });

    // Hold to temporarily switch
    p.addEventListener('mousedown', () => { p.dataset._old = p.src; p.src = casual; });
    window.addEventListener('mouseup', () => { if (p.dataset._old) { p.src = p.dataset._old; delete p.dataset._old; }});
  })();

  // theme toggle (uses CSS custom properties)
//   Temporary disable theme toggle due top being buggy
//   (function themeToggle(){
//     const themeToggleBtn = document.getElementById('themeToggle'); // optional button
//     const root = document.documentElement;
//     const stored = localStorage.getItem('site-theme');
//     if (stored === 'dark') root.classList.add('theme-dark');

//     if (!themeToggleBtn) return;
//     themeToggleBtn.addEventListener('click', () => {
//       const isDark = root.classList.toggle('theme-dark');
//       localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
//     });
//   })();

//     const toggle = document.getElementById('themeToggle');
//     const icon = toggle.querySelector('i');

//     const setTheme = (dark) => {
//     document.documentElement.classList.toggle('theme-dark', dark);
//     icon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
//     localStorage.setItem('theme', dark ? 'dark' : 'light');
//     };

//     // Load theme
//     const savedTheme = localStorage.getItem('theme');
//     setTheme(savedTheme === 'dark');

//     // Toggle
//     toggle.addEventListener('click', () => {
//     const isDark = document.documentElement.classList.contains('theme-dark');
//     setTheme(!isDark);
//     });

// document preview wiring (append to DOMContentLoaded)
(function docsPreview(){
  document.querySelectorAll('.btn-preview').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const src = btn.dataset.src;
      const title = btn.dataset.title || 'Document Preview';
      const modal = new bootstrap.Modal(document.getElementById('docPreviewModal'));
      document.getElementById('docPreviewTitle').textContent = title;
      document.getElementById('docPreviewFrame').src = src;
      const dl = document.getElementById('docDownloadLink');
      dl.href = src;
      dl.setAttribute('download', src.split('/').pop());
      modal.show();
    });
  });

  // clear iframe src when modal closed (free memory)
  const previewModalEl = document.getElementById('docPreviewModal');
  previewModalEl.addEventListener('hidden.bs.modal', ()=>{
    document.getElementById('docPreviewFrame').src = '';
  });
})();


});