/*
objetivo
1: clicar nos botões e descobrir se clicou na pedra papel ou tesoura

*/

const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

/* conceito de ENUM - escrever a palavra ou valor uma vez e utiliza-lo diversas vezes no projeto, objetivo facilita manutenção

humanScoreNumber = Camel case (camelo - começa minuscula (a letra) e depois cresce)
GAME_OPTIONS = Snake case ( cobrinha utilizada para separar palavras)

*/

// Buscando o valor escolhido ao clicar
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log("Humano escolheu: " + human + " Maquina escolheu: " + machine)
    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if (
        human === GAME_OPTIONS.PAPER && machine == GAME_OPTIONS.ROCK ||
        human === GAME_OPTIONS.ROCK && machine == GAME_OPTIONS.SCISSORS ||
        human === GAME_OPTIONS.SCISSORS && machine == GAME_OPTIONS.PAPER) {
        result.innerHTML = " Você ganhou"
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

    } else {
        result.innerHTML = "Seu adversário ganhou"
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}

/* papel - pedra - tesoura */