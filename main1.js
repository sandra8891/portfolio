// Typing Animation
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
        textElement.style.opacity = "1";
    }, 1500);

    setTimeout(() => {
        textElement.style.opacity = "0";
    }, 1800);

    setTimeout(() => {
        textElement.textContent = words[i];
        textElement.style.opacity = "1";
    }, 2000);
}

setInterval(animateText, 3000);

// Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
        menuIcon.classList.toggle('bx-menu');
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

// Contact Form Submission
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

// Theme Switcher Logic
const root = document.documentElement;
const themeButtons = document.querySelectorAll('.theme-btn');
const primaryColorPicker = document.getElementById('primary-color-picker');
const paletteIcon = document.querySelector('.palette-icon');
const themeSwitcher = document.querySelector('.theme-switcher');

// Toggle theme switcher visibility on palette icon click
if (paletteIcon && themeSwitcher) {
    paletteIcon.addEventListener('click', () => {
        themeSwitcher.classList.toggle('active');
    });
}

// Predefined Themes
const themes = {
    default: { '--primary-color': 'cyan' },
    red: { '--primary-color': '#ff4444' },
    green: { '--primary-color': '#00cc00' }
};

function applyTheme(theme) {
    const selectedTheme = themes[theme];
    for (const [property, value] of Object.entries(selectedTheme)) {
        root.style.setProperty(property, value);
    }
}

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        applyTheme(theme);
        themeSwitcher.classList.remove('active'); // Optional: Hide after selection
    });
});

primaryColorPicker.addEventListener('input', (e) => {
    root.style.setProperty('--primary-color', e.target.value);
});