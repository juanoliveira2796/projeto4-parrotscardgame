// let nCards = prompt("Bem vindo ao Parrot Card Game! Com quantas cartas gostaria de jogar? (Escolha um número par de 4 a 14)");
let nCards = 8;
let cardsList = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif']; 
let gameList = [];
let cardsTurned = 0;
let points = 0;
let turns = 0;

// Controle para a entrada do número de cartas
while (nCards% 2 !== 0 || nCards === null || nCards === '' ) {
    alert('Por favor, insira um número par para iniciar o jogo.');
    nCards = prompt("Bem vindo ao Parrot Card Game! Com quantas cartas gostaria de jogar? (Escolha um número par de 4 a 14)");
}

// Coloca o número de cartas selecionadas pelo jogador
let index = -1
for (let contador = 0; contador < nCards; contador++ ){
    // Adiciona os back-faces em uma lista
    if (contador % 2 === 0) {
        index++    
    }
    gameList.push(index)
}

// Embaralha a gameList
function comparador() { 
	return Math.random() - 0.5; 
}
gameList.sort(comparador); 


// Adiciona a quantidade de cartas já com aleatoriedade do verso
for (let contador = 0; contador < nCards; contador++ ){

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

// Vira carta
function turnCard(element) {
    turns++

    if(cardsTurned === 0){
        element.classList.add('turnedCard')
        cardsTurned++
        const firstTurned = element
        console.log(firstTurned.innerHTML) 
    }
 
    else if (cardsTurned === 1){
        element.classList.add('turnedCard')
        const secondTurned = element
        console.log(secondTurned.innerHTML)
        cardsTurned = 0   
    
        // if (firstTurned === secondTurned){
        //     points++    
        // }
        
        // else{

        // }
    }
}









