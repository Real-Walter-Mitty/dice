let h1 = document.querySelector('h1');
let imgPlayer = document.querySelector('.player');
let imgComputer = document.querySelector('.computer');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
    let playerRandomNum = (Math.floor(Math.random() * 6)) + 1;
    let computerRandomNum = (Math.floor(Math.random() * 6)) + 1;

    if (playerRandomNum > computerRandomNum) {
        h1.textContent = "Player Wins";
        imgPlayer.setAttribute('src', `images/dice${playerRandomNum}.png`);
        imgComputer.setAttribute('src', `images/dice${computerRandomNum}.png`);
    } else if (computerRandomNum > playerRandomNum) {
        h1.textContent = "Computer Wins";
        imgPlayer.setAttribute('src', `images/dice${playerRandomNum}.png`);
        imgComputer.setAttribute('src', `images/dice${computerRandomNum}.png`);
    } else {
        h1.textContent = "It's Tie";
        imgPlayer.setAttribute('src', `images/dice${playerRandomNum}.png`);
        imgComputer.setAttribute('src', `images/dice${computerRandomNum}.png`);
    }
})
