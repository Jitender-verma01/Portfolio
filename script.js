document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const modeSwitch = document.getElementById('mode-switch');
    const body = document.body;

    // Mobile menu toggle functionality
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
        });
    }

    // Message send button functionality
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    if (sendButton && messageInput) {
        sendButton.addEventListener('click', () => {
            const message = messageInput.value.trim();
            if (message) {
                // Add your message sending logic here, e.g., display or send to server
                console.log('Message sent:', message);
                messageInput.value = '';
            }
        });
    }

    // Dark mode toggle functionality
    if (modeSwitch) {
        modeSwitch.addEventListener('change', () => {
            body.classList.toggle('dark-mode', modeSwitch.checked);
            localStorage.setItem('dark-mode', modeSwitch.checked);
        });

        // Load dark mode preference from localStorage
        let darkMode = false;
        if (typeof localStorage !== 'undefined') {
            darkMode = localStorage.getItem('dark-mode') === 'true';
        }
        modeSwitch.checked = darkMode;
        body.classList.toggle('dark-mode', darkMode);
    }
});

