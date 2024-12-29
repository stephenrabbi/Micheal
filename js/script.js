// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hash !== '') {
                e.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation on the contact page
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const nameInput = document.querySelector('#name');
            const emailInput = document.querySelector('#email');
            const messageInput = document.querySelector('#message');
            let isValid = true;

            // Name validation
            if (nameInput.value.trim() === '') {
                isValid = false;
                alert('Name is required.');
                nameInput.focus();
            }
            
            // Email validation
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                isValid = false;
                alert('Please enter a valid email address.');
                emailInput.focus();
            }
            
            // Message validation
            else if (messageInput.value.trim() === '') {
                isValid = false;
                alert('Message cannot be empty.');
                messageInput.focus();
            }

            // Prevent form submission if invalid
            if (!isValid) {
                e.preventDefault();
            }
        });
    }

    // Interactive carousel indicator highlighting
    const carouselIndicators = document.querySelectorAll('.carousel-indicators li');
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('slide.bs.carousel', (event) => {
            carouselIndicators.forEach((indicator, index) => {
                indicator.classList.remove('active');
                if (index === event.to) {
                    indicator.classList.add('active');
                }
            });
        });
    }

    // Dynamic year in the footer
    const yearSpan = document.querySelector('#currentYear');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});
