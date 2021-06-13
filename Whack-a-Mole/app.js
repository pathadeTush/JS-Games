const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const btn = document.querySelector('.btn')
let score = document.querySelector('#score')

 btn.addEventListener("click", () => {
   location.reload();
 });

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    // removing img from each box
    square.forEach(className => {
        className.classList.remove('mole')
    })

    // taking random position of box and adding img to it
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    // assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id == hitPosition) {
            result += 1
            score.textContent = result
        }
    })
})

let timerIdRSquare = null;
function moveMole() {
    timerIdRSquare = setInterval(randomSquare, 1000);
}


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(timerIdRSquare)
        clearInterval(timerId)
        clearInterval()
        alert('Game Over! Your final score is: '+ result)
    }
}

let timerId = setInterval(countDown, 1000)

moveMole()
