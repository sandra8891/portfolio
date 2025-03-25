// const text = document.querySelector(".typing-text");
// const words = ["Web Developer", "UI/UX Designer", "Freelancer"];
// let i = 0;

// setInterval(() => {
//     text.textContent = words[i];
//     i = (i + 1) % words.length;
// }, 2000);

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
