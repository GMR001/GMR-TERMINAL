const text ="GMR TERMINAL ACTIVATE";
let index = 0;
const speed = 80;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typeText").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

typeEffect();