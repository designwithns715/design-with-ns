// 1. Initialize AOS
AOS.init({ duration: 1000, once: true });

// 2. Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
    });
});

// 3. Persistent Theme Toggle (Fixed Night Mode)
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check local storage for theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeBtn.querySelector('i');
    
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// 4. Secure Form Submission to your Google Sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyUtsawjN29J7Ft-6-E_teUB2TEqQfjZDqW2HEv4_6MGUzJw59sHSNx0C-MUNdQOkzxKw/exec';
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    btn.disabled = true;
    btn.innerText = "Sending...";

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
        alert("Success! Your message has been elevated to our team.");
        contactForm.reset();
    } catch (error) {
        alert("There was an error. Please try WhatsApp!");
    } finally {
        btn.disabled = false;
        btn.innerText = "Send Message";
    }
});
