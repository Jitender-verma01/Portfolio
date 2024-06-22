document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const modeSwitch = document.getElementById('mode-switch');
    const body = document.body;

    // Mobile menu toggle functionality
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
    });

    // Dark mode toggle functionality
    modeSwitch.addEventListener('change', () => {
        body.classList.toggle('dark-mode', modeSwitch.checked);
        localStorage.setItem('dark-mode', modeSwitch.checked);
    });

    // Load dark mode preference from localStorage
    const darkMode = localStorage.getItem('dark-mode') === 'true';
    modeSwitch.checked = darkMode;
    body.classList.toggle('dark-mode', darkMode);
});
