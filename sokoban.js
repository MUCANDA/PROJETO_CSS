import Piece from "./pieces.js";
import {buildGameBoard} from "./tabela.js";
import {boardMap} from "./tabela.js";

const positionOfPieces = buildGameBoard();

const board = document.querySelector('.tabela');
const playerElement = createBoardPiece(positionOfPieces.player, 'jogador');
const box = createBoardPiece(positionOfPieces.boxes[0], 'caixa');

function createBoardPiece(piecePosition, className) {
   const piece = new Piece(piecePosition.x, piecePosition.y);
   piece.insertElementInto(className, board);

   return piece;
}
//  for (let i = 0; i < array.length; i++) {
// //  const element = array[i];

// }
function handlekeydownEvent(keycode) {
   const next = player. ne
}

window.addEventListener("keydown", function (event) {
   const next = playerElement.nextPosition(event.code);

   if (verifyPosition(next)) {
      playerElement.moveTo(next);
   }
})

function verifyPosition(position) {
   let  {x: i, y: k} = position;

   return boardMap[k][i] !== '#';
}