
const textElement = document.querySelector(".typing-text");
const words = ["Web Developer"];
let i = 0;

function animateText() {
    textElement.style.opacity = "1";
    setTimeout(() => {
        textElement.style.opacity = "0";
    }, 1000);

    setTimeout(() => {
        textElement.textContent = "_";
        textElement.style.opacity = "2";
    }, 1500);

    setTimeout(() => {
        textElement.style.opacity = "0";
    }, 1800);

    setTimeout(() => {
        textElement.textContent = words[i];
        textElement.style.opacity = "2";
    }, 2000);
}

setInterval(animateText, 3000);





const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.replace('bx-menu', 'bx-x');
        } else {
            menuIcon.classList.replace('bx-x', 'bx-menu');
        }
    });

   
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.replace('bx-x', 'bx-menu');
        });
    });
} else {
    console.error("Menu icon or nav links not found in the DOM");
}




const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent successfully!');
        this.reset();
    });
} else {
    console.error("Contact form not found in the DOM");
}