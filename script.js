document.getElementById('roca').addEventListener('click', () => playGame('roca'));
document.getElementById('papel').addEventListener('click', () => playGame('papel'));
document.getElementById('tijeras').addEventListener('click', () => playGame('tijeras'));

const playGame = (userChoice) => {
    const choices = ['roca', 'papel', 'tijeras'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let resultado = '';

    if (userChoice === computerChoice) {
        resultado = '¡Empate!';
    } else if (
        (userChoice === 'roca' && computerChoice === 'tijeras') ||
        (userChoice === 'papel' && computerChoice === 'roca') ||
        (userChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        resultado = '¡Ganaste!';
    } else {
        resultado = 'Perdiste. La computadora eligió ' + computerChoice;
    }

    document.getElementById('resultado').innerText = resultado;
}
