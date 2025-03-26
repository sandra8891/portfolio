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




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



