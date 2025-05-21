// Page navigation handler
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = btn.dataset.target;
    });
});

// Toggle read-more buttons
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        alert('The full artcicle is currently not available. This is just to demo.');
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!');
    });
}