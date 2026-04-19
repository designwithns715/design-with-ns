AOS.init({ duration: 1000, once: true });

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    const icon = themeBtn.querySelector('i');
    isDark ? icon.classList.replace('fa-moon', 'fa-sun') : icon.classList.replace('fa-sun', 'fa-moon');
});

// FORM SUBMISSION (Links to your Google Sheet)
const scriptURL = 'https://script.google.com/macros/s/AKfycbwjoapUVfDYXTwIQn0k_nY7cs_JOdCqpo68hYPijbazBxbVZUP1bmr2BpW6RYjD-_eF4Q/exec'; // Replace this with your URL!
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    btn.disabled = true;
    btn.innerText = "Elevating Message...";

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        alert("Success! Your message has reached Design With NS.");
        contactForm.reset();
    } catch (error) {
        alert("Error sending message. Please try WhatsApp!");
    } finally {
        btn.disabled = false;
        btn.innerText = "Send Message";
    }
});
