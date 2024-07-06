let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let userGuess = document.getElementById('guessInput').value;
    let result = document.getElementById('result');

    if (userGuess == randomNumber) {
        result.textContent = 'Congratulations! You guessed the correct number!';
        result.style.color = 'green';
    } else if (userGuess > randomNumber) {
        result.textContent = 'Too high! Try again.';
        result.style.color = 'red';
    } else {
        result.textContent = 'Too low! Try again.';
        result.style.color = 'red';
    }
}
