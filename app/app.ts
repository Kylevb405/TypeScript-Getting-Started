function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

document.getElementById('startgame')!.addEventListener('click', startGame);


