// Theme toggle with system preference and localStorage
(function(){
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const body = document.body;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme){
    if(theme === 'dark'){
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
      btn.textContent = '☀️';
    } else {
      body.classList.remove('theme-dark');
      body.classList.add('theme-light');
      btn.textContent = '🌙';
    }
  }

  // initial
  if(stored) applyTheme(stored);
  else applyTheme(prefersDark ? 'dark' : 'light');

  btn.addEventListener('click', ()=>{
    const isDark = body.classList.contains('theme-dark');
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
})();

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
});