// let x=3;
// let y=4;

buildGameBoard(8, 8);

const player = new Player(0, 0);
const celulas = document.querySelectorAll('.celula');
const playerElement = document.querySelector('.jogador');


const DIST_SALTO = 66;
const MARGIN_FIX = 4;





 playerElement.style.top = calculaPosicao(0);
 playerElement.style.left =  calculaPosicao(0);

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

   return x >= 0 && x < 8 && y >= 0 && y < 8;
}
function calculaPosicao(qtd) {

return `${qtd * DIST_SALTO + MARGIN_FIX}px`;
}

// console.log(calculaPosicao(0, 64) === "0px");
// console.log(calculaPosicao(1, 64) === "64px");
// console.log(calculaPosicao(2, 32) === "64px");
// console.log(calculaPosicao(10, 60) === "600px");
// console.log(calculaPosicao(-3, 45) === "-135px");


function buildGameBoard(numRows, numCols) {
   const game = document.getElementById("jogo");
   const board = document.createElement('div');
   board.classList.add('tabela');


   for (let k = 0; k < numRows; k++) {
       const linha = document.createElement('div');
       linha.classList.add('linha');
       board.append(linha);

       for (let i = 0; i < numCols; i++) {
           const celula = document.createElement('div');
           celula.classList.add('celula');
           linha.appendChild(celula);

          
               }
           }
   game.append(board);
}

   
 

 