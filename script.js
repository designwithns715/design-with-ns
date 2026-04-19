AOS.init({ duration: 1000, once: true });

// Mobile Menu Handler
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Remember preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    const icon = themeBtn.querySelector('i');
    if (isDark) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});
