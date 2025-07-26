
const text = "Você foi embora, mas o destino te trouxe de volta… e dessa vez, pra ficar. 💘";
let index = 0;
const speed = 50;

function typeText() {
    if (index < text.length) {
        document.querySelector(".typed-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, speed);
    }
}

function revealMessage() {
    document.getElementById("hidden-message").style.display = "block";
}

function quizAnswer(answer) {
    document.getElementById("quiz-result").textContent = "💡 Você escolheu: " + answer;
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});
