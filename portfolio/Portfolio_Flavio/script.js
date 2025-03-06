// Animation pour les éléments lors du défilement
document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.hero h1, .hero p');
        elements.forEach(el => {
            el.classList.add('fade-in');
        });
    
        // Animation pour la navbar
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            }
        });
    });