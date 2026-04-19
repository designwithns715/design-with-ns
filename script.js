/**
 * Design With NS - Main Website Script
 */

// 1. Initialize Scroll Animations
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// 2. Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
        themeBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeBtn.querySelector('i');
    if (body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light-theme');
    }
});

// 3. Navbar Styling on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = 'none';
    }
});

// 4. SECURE FORM SUBMISSION
// PASTE YOUR NEW DEPLOYMENT URL BELOW
const scriptURL = 'https://script.google.com/macros/s/AKfycbxZNxqzYUW7x8LkiYI6DsjrQIu48oldgEqzJLvUTFEPSEQFNvn1ugRamP9cXp9X2evUBQ/exec';

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button');
    submitBtn.innerText = "Elevating...";
    submitBtn.disabled = true;

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors', // Essential for Google Apps Script
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        // Since no-cors doesn't return a readable response, we trigger success on completion
        alert("Success! Your details have been sent to Design With NS.");
        contactForm.reset();

    } catch (error) {
        console.error('Error!', error.message);
        alert("Submission failed. Please try again or message via WhatsApp.");
    } finally {
        submitBtn.innerText = "Send Message";
        submitBtn.disabled = false;
    }
});

// 5. Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
