// Toggle dark mode by switching the 'dark' class on <html>
const btn = document.getElementById('themeToggle');
if (btn) {
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
}
