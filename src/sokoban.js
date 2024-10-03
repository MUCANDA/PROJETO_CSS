import Piece from "./pieces.js";
import { buildGameBoard } from "../dist/tabela.js";
import { lvl0 } from "../level.js";

const { boardMap, positionOfPieces, numberOfGoals } = buildGameBoard(lvl0);

const board = document.querySelector('.tabela');
const player = createBoardPiece(positionOfPieces.player, 'jogador');
const boxes = [];

for (let i = 0; i < positionOfPieces.boxes.length; i++) {
   let piece = createBoardPiece(positionOfPieces.boxes[i], 'caixa');
   boxes.push(piece);
}

function createBoardPiece(piecePosition, className) {
   const piece = new Piece(piecePosition.x, piecePosition.y);
   piece.insertElementInto(className, board);

   return piece;
}
// window.addEventListener("keydown", function (event) {
//    const next = playerElement.nextPosition(event.code);

//    if (verifyPosition(next)) {
//       playerElement.moveTo(next);
//    }
// })
window.addEventListener("keydown", function (event) {
   // event.preventDefault();

   handlePieceMovement(event.code);
});

/** Tarefa #1: implementar função para localizar uma caixa à partir de um
* uma dada coordenada.
*/
function findBoxAtPosition(position) {
   // const found = findBoxAtPosition((element) => element > 10);

   return boxes.find((caixa) => caixa.x === position.x && caixa.y === position.y);
}
function levantaAPlaquinha() {
   alert("congratulations");
}


/** Tarefa #2: modificar a função abaixo de forma a tratar tando a movimentação
* do jogador quanto das caixas.
 */
function handlePieceMovement(keycode) {
   // Variável destinada ao pré-cálculo da posição do jogador
   const nextPlayerPosition = player.nextPosition(keycode);
   // (Modificar) Variável para detectar a "presença" de outra peça
   const foundBox = findBoxAtPosition(nextPlayerPosition);

   // Implementar lógica caso encontre uma outra peça no caminho.
   if (foundBox) {
      const nextPosBox = foundBox.nextPosition(keycode);
      const foundBox2 = findBoxAtPosition(nextPosBox);
      const boxCanMove = verifyPosition(nextPosBox);

      if (boxCanMove && !foundBox2) {
         foundBox.moveTo(nextPosBox);
         player.moveTo(nextPlayerPosition);
         const caixasCertas = contagemDeCaixasCorretas();
         if (caixasCertas == numberOfGoals) {
            setTimeout(levantaAPlaquinha, 300);
         }
      }


   }
   // E caso não encontre outra peça...
   else {
      // Faça as modificações que forem necessárias para manter o
      // funcionamento do jogo.
      const playerCanMove = verifyPosition(nextPlayerPosition);
      if (playerCanMove) {
         player.moveTo(nextPlayerPosition);
      }
   }
}
function contagemDeCaixasCorretas() {
   let count = 0;
   for (let i = 0; i < boxes.length; i++) {
      let { x: i, y: k } = boxes[i];

      if (boardMap[k][i] == 'G') count++;
   }
   return count;
}


function verifyPosition(position) {
   let { x: i, y: k } = position;

   return boardMap[k][i] !== '#';
}
