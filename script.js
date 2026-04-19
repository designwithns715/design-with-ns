AOS.init({ duration: 1000, once: true });

// UI Feature: Navbar Scroll Blur
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    nav.style.boxShadow = window.scrollY > 50 ? '0 10px 30px rgba(0,0,0,0.05)' : 'none';
});

// UX Fix: Persistent Theme
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

// PRESERVING YOUR OLD FORM SUBMISSION LOGIC
const scriptURL = 'https://script.google.com/macros/s/AKfycbyEPvVsPh9zcIBRNAa9wZBR0Ed0gxpobK5EnvGhLKSwKhldByzPkjS4Hbh8y632zzhqcA/exec';
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    btn.disabled = true;
    btn.innerText = "Processing...";

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(formData)
        });
        alert("Success! Design With NS has received your inquiry.");
        contactForm.reset();
    } catch (err) {
        alert("Submission failed. Please reach out via WhatsApp.");
    } finally {
        btn.disabled = false;
        btn.innerText = "Submit Inquiry";
    }
});
