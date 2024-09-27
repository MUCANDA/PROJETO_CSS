

const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

const positionOfPieces = buildGameBoard(NUM_ROWS, NUM_COLS);

const player = new Piece(positionOfPieces.player.k, positionOfPieces.player.i);
// const celulas = document.querySelectorAll('.celula');
const playerElement = document.querySelector('.jogador');

const DIST_SALTO = 66;
const MARGIN_FIX = 4;


// playerElement.style.top = calculaPosicao(player.x);
// playerElement.style.left = calculaPosicao(player.y);

window.addEventListener("keydown", function (event) {

   const next = player.nextPosition(event.code);

   if (verifyPosition(next)) {

      let k = next.x * 8 + next.y;
      console.log(next);

      player.moveTo(next, playerElement, celulas[k]);
   }
})
function verifyPosition(position) {
   let { x, y } = position;

   return boardMap[x][y] !== '#';
}
function calculaPosicao(qtd) {

   return `${qtd * DIST_SALTO + MARGIN_FIX}px`;
}





