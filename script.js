// Declaraçao de variaveis globais
let cardsList = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
let gameList = [];
let cardsTurned = 0;
let points = 0;
let turns = 0;
let firstTurned;
let secondTurned;

let keepPlaying = true;


// Laço do jogo

let nCards = prompt("Bem vindo ao Parrot Card Game! Com quantas cartas gostaria de jogar? (Escolha um número par de 4 a 14)");

// Controle para a entrada do número de cartas
while (nCards % 2 !== 0 || nCards === null || nCards === '') {
    alert('Por favor, insira um número par para iniciar o jogo.');
    nCards = prompt("Bem vindo ao Parrot Card Game! Com quantas cartas gostaria de jogar? (Escolha um número par de 4 a 14)");
}

// Coloca o número de cartas selecionadas pelo jogador
let index = -1
for (let contador = 0; contador < nCards; contador++) {
    // Adiciona os back-faces em uma lista
    if (contador % 2 === 0) {
        index++
    }
    gameList.push(index)
}

gameList.sort(comparador);


// Adiciona a quantidade de cartas já com aleatoriedade do verso s
for (let contador = 0; contador < nCards; contador++) {

    const ulList = document.querySelector('ul')
    ulList.innerHTML = ulList.innerHTML + `
        <li class="card" onclick="turnCard(this)">
            <div class="face front-face">
                <img src="./uteis/front.png" alt="Imagem de um papagaio" >
            </div>

            <div class="face back-face">
                <img src="./uteis/${cardsList[gameList[contador]]}" alt="Imagem de um papagaio rockeiro" >
            </div>
        </li>`

}



// Declaraçao de funçoes f

// Embaralha a gameList
function comparador() {
    return Math.random() - 0.5;
}

// Vira carta
function turnCard(element) {
    if (element.classList.contains('turnedCard')) {
        
    }

    else {
        cardsTurned++;
        console.log('Entrou no else')

        if (cardsTurned === 1) {
            element.classList.add('turnedCard');
            turns++;
            firstTurned = element;
            console.log('Entrou no firstTurned')
        }

        else if (cardsTurned === 2 ){
            element.classList.add('turnedCard');
            turns++;
            secondTurned = element;
            console.log('Entrou no secondTurned')
            setTimeout(verify, 1000);
        }
    }

    document.querySelector('.plays-counter p').innerHTML = turns 
}

function verify() {
    if (firstTurned.innerHTML === secondTurned.innerHTML) {
        points++
        if (points === nCards / 2) {
            endOrRestartGame();
        }
    }

    else {
        firstTurned.classList.remove('turnedCard')
        secondTurned.classList.remove('turnedCard')
    }

    cardsTurned = 0;
}

function endOrRestartGame() {
    alert(`Parabéns! Você venceu o jogo em ${turns} jogadas!`)
    let answer = prompt('Deseja jogar novamente? (Responda sim ou não)'); 
    console.log(answer)

    while (answer !== 'sim' && answer !== 'não') {
        alert('Por favor, insira como resposta apenas sim ou não.');
        answer = prompt('Deseja jogar novamente? (Responda sim ou não)');
        console.log(answer)
    }

    if (answer == 'não') {
        keepPlaying = false;
        alert('Obrigado por ter jogado conosco! Até a próxima :)')
    }

    else{
        location.reload()
    }
}








