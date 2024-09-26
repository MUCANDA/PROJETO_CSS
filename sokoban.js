const boardMap = [
   ["#", "#", "#", "#", "#", "#", "#", "#"],
   ["#", ".", ".", ".", ".", ".", ".", "#"],
   ["#", ".", ".", ".", "#", ".", ".", "#"],
   ["#", ".", "#", "G", ".", ".", ".", "#"],
   ["#", ".", ".", "G", "B", "#", ".", "#"],
   ["#", ".", ".", "#", ".", "B", ".", "#"],
   ["#", ".", ".", "P", ".", ".", ".", "#"],
   ["#", "#", "#", "#", "#", "#", "#", "#"]
]

const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;
buildGameBoard(NUM_ROWS, NUM_COLS);

const player = new Player(1, 1);
const celulas = document.querySelectorAll('.celula');
const playerElement = document.querySelector('.jogador');

const DIST_SALTO = 66;
const MARGIN_FIX = 4;


playerElement.style.top = calculaPosicao(player.x);
playerElement.style.left = calculaPosicao(player.y);

window.addEventListener("keydown", function (event) {

   const next = player.nextPosition(event.code);

   if (verifyPosition(next)) {

      let k = next.x * 8 + next.y;
      console.log(next);
      // const { x, y } = next;
      // const k = x * 8 + y;


      player.moveTo(next, playerElement, celulas[k]);
   }
})

function Player(posx, posy) {

   this.x = posx;
   this.y = posy;


   this.nextPosition = function (keycode) {
      console.log(keycode);


      let { x, y } = this;
      if (keycode == "ArrowUp") x--;
      if (keycode == "ArrowDown") x++;
      if (keycode == "ArrowLeft") y--;
      if (keycode == "ArrowRight") y++;


      return { x, y };

   }

   this.moveTo = function (position, element, _parent) {

      this.x = position.x;
      this.y = position.y;

      element.style.top = calculaPosicao(this.x);
      element.style.left = calculaPosicao(this.y);


      // parent.append(element);

   }
}

function verifyPosition(position) {
   let { x, y } = position;

   return boardMap[x][y] !== '#';
}
function calculaPosicao(qtd) {

   return `${qtd * DIST_SALTO + MARGIN_FIX}px`;
}

// console.log(calculaPosicao(0, 64) === "0px");
// console.log(calculaPosicao(1, 64) === "64px");
// console.log(calculaPosicao(2, 32) === "64px");
// console.log(calculaPosicao(10, 60) === "600px");
// console.log(calculaPosicao(-3, 45) === "-135px");
function createGameElement(elementName, className, parentNode) {
   const element = document.createElement(elementName);
   element.classList.add(className);
   parentNode.append(element);

   return element;
}
function buildGameBoard(numRows, numCols) {
   const game = document.getElementById("jogo");
   const board = createGameElement('div', 'tabela', game);



   for (let k = 0; k < numRows; k++) {
      const linha = createGameElement('div', 'linha', board);


    
      for (let i = 0; i < numCols; i++) {
         const celula = createGameElement('div', 'celula', linha);
          const char = boardMap[k][i];
          
 
          if (char === '#')celula.classList.add('wall');
          if (char === 'G')celula.classList.add('goal');
          if (char === 'B')celula.classList.add('box');
       }
   }
   createGameElement('div', 'jogador', board);
}




