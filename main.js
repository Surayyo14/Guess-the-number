let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const message = document.getElementById("message");
const guessInput = document.getElementById("guess-input");
const checkBtn = document.getElementById("check-btn");
const restartBtn = document.getElementById("restart-btn");
const attemptsDisplay = document.getElementById("attempts");

checkBtn.addEventListener("click", () => {
  const guess = parseInt(guessInput.value, 10);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    message.textContent = "Iltimos, 1 dan 10 gacha raqam kiriting!";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Urinishlar: ${attempts}`;

  if (guess === secretNumber) {
    message.textContent = `Tabriklaymiz! Siz to'g'ri topdingiz! Bu ${attempts} urinishda bo'ldi.`;
    checkBtn.disabled = true;
    restartBtn.classList.remove("hidden");
  } else if (guess < secretNumber) {
    message.textContent = "Sizning soningiz kichik!";
  } else {
    message.textContent = "Sizning soningiz katta!";
  }

  guessInput.value = "";
});

restartBtn.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  message.textContent = "1 dan 10 gacha sonni toping!";
  attemptsDisplay.textContent = "Urinishlar: 0";
  guessInput.value = "";
  checkBtn.disabled = false;
  restartBtn.classList.add("hidden");
});
