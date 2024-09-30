import Piece from "./pieces.js";
import {buildGameBoard} from "./tabela.js";
import {boardMap} from "./tabela.js";

const positionOfPieces = buildGameBoard();

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