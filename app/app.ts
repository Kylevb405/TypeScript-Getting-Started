function startGame() {

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(100, playerName);
    postScore(-5, playerName);

    // let messagesElement = document.getElementById('messages');
    // messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name: string = 'Mulitmath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'MultiMath Player'):void {

    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    const scoreElement:HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger('Score: ${score}')
}

document.getElementById('startgame')!.addEventListener('click', startGame);

const logMessage = (message: string): void => console.log(message);

logMessage('Welcome to MultiMath')

function logError(err: string): void {
    console.error(err)
}







// function funFunc (score: number, secondNum: number): [number, number] {
//     return [score, secondNum]
   
// }
// const newMessage : [number, number] = funFunc(4, 89);  //  "Congradulations!. Score: 4"
// "89. Score: 4"
