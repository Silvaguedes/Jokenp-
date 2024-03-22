
const result = document.querySelector(".result")

const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playhuman = (humanChoice) => {


    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {

    const choices = ['roch', 'paper', 'scissors',]

    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log(' Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    }

    else if ((human === 'paper' && machine === 'roch') || (human === 'roch' &&
        machine === 'scissors') || (human === 'scissors' && machine === 'paper')) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"
    }

    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você Perdeu!"
    }
}