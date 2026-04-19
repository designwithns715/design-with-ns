// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check for saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-theme') {
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

// Navbar Scroll Effect
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

// Contact Form Validation & Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic Validation
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Example of sending to Google Sheets via Fetchb
    // Replace YOUR_WEB_APP_URL with your actual Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbytdgsMLex_pU8wtM89AXuRkcz-4oSY6D3hqBN3agGYZrnaKIhEVI5UExhEKHDM48Pq2g/exec';
    
    try {
        // If you don't have the script set up yet, we'll just simulate success
        if (scriptURL === 'https://script.google.com/macros/s/AKfycbytdgsMLex_pU8wtM89AXuRkcz-4oSY6D3hqBN3agGYZrnaKIhEVI5UExhEKHDM48Pq2g/exec') {
            console.log("Form Data:", { name, email, message });
            alert("Form submitted successfully! (Simulation mode - configure your Apps Script URL in script.js to save data)");
            contactForm.reset();
            return;
        }

        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            alert("Thank you! Your message has been sent.");
            contactForm.reset();
        }
    } catch (error) {
        console.error('Error!', error.message);
        alert("Something went wrong. Please try again.");
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
