// 1. Initialize Scroll Animations
AOS.init({ duration: 1000, once: true });

// 2. Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Simple Hamburger Animation
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
});

// 3. Persistent Dark/Light Mode
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check saved theme
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
        localStorage.setItem('theme',// 1. Initialize Scroll Animations
AOS.init({ duration: 1000, once: true });

// 2. Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Simple Hamburger Animation
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
});

// 3. Persistent Dark/Light Mode
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check saved theme
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

// 4. Form Submission to Google Sheet (Secure ID Version)
const scriptURL = 'https://script.google.com/macros/s/AKfycbz_PUT_YOUR_EXEC_URL_HERE/exec';
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
        alert("Success! Your project details have been sent to Design With NS.");
        contactForm.reset();
    } catch (error) {
        alert("There was an error sending your message. Please reach out via WhatsApp!");
        console.error(error);
    } finally {
        btn.disabled = false;
        btn.innerText = "Send Message";
    }
}); 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// 4. Form Submission to Google Sheet (Secure ID Version)
const scriptURL = 'https://script.google.com/macros/s/AKfycbyUtsawjN29J7Ft-6-E_teUB2TEqQfjZDqW2HEv4_6MGUzJw59sHSNx0C-MUNdQOkzxKw/exec';
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
        alert("Success! Your project details have been sent to Design With NS.");
        contactForm.reset();
    } catch (error) {
        alert("There was an error sending your message. Please reach out via WhatsApp!");
        console.error(error);
    } finally {
        btn.disabled = false;
        btn.innerText = "Send Message";
    }
});
