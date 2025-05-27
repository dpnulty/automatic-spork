// Toggle dark mode by switching the 'dark' class on <html>
const btn = document.getElementById('themeToggle');
const root = document.documentElement;
const stored = localStorage.getItem('theme');

// Default to dark when no preference is stored
if (stored === 'dark' || stored === null) {
  root.classList.add('dark');
}

if (btn) {
  btn.setAttribute('aria-pressed', root.classList.contains('dark'));
  btn.addEventListener('click', () => {
    root.classList.toggle('dark');
    const dark = root.classList.contains('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    btn.setAttribute('aria-pressed', dark);
  });
}
