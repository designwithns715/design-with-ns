// AOS Initialization
AOS.init();

// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
});

// Replace with your Google Apps Script URL
const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button');
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

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
        alert("Success! We have received your message.");
        contactForm.reset();
    } catch (err) {
        alert("Submission failed. Please try again.");
    } finally {
        submitBtn.innerText = "Send Message";
        submitBtn.disabled = false;
    }
});
