const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;


const positionOfPieces = buildGameBoard(NUM_ROWS, NUM_COLS);


const board = document.querySelector('.tabela');
const playerElement = createBoardPiece(positionOfPieces.player, 'jogador');


function createBoardPiece(piecePosition, className) {
   const piece = new Piece(piecePosition.x, piecePosition.y);
   piece.insertElementInto(className, board);

   return piece;

}

window.addEventListener("keydown", function (event) {

   const next = playerElement.nextPosition(event.code);

   if (verifyPosition(next)) {
      playerElement.moveTo(next);
   }
})
function verifyPosition(position) {
   let { x, y } = position;

   return boardMap[x][y] !== '#';
}




