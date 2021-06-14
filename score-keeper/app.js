const player1_score = document.getElementById('player1-score')
const player2_score = document.getElementById("player2-score");
const player1_btn = document.getElementById("player1-btn");
const player2_btn = document.getElementById("player2-btn");
const reset_btn = document.getElementById("reset-btn");

player1_score.textContent = 0
player2_score.textContent = 0

player1_btn.addEventListener('click', () => {
    player1_score.textContent++; 
})

player2_btn.addEventListener("click", () => {
  player2_score.textContent++;
});

reset_btn.addEventListener('click', () => {
    player1_score.textContent = 0;
    player2_score.textContent = 0;
})