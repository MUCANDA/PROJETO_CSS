import Piece from "./pieces.js";
import { buildGameBoard } from "./tabela.js";
import { boardMap } from "./tabela.js";

const positionOfPieces = buildGameBoard();

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
   event.preventDefault();

   handlePieceMovement(event.code);
});
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

   console.log(findBoxAtPosition({x: 4, y: 4}));
   console.log(findBoxAtPosition({x: 5, y: 5}));
   console.log(findBoxAtPosition({x: 4, y: 5}));
   console.log(findBoxAtPosition({x: 5, y: 4}));

   /** Tarefa #2: modificar a função abaixo de forma a tratar tando a movimentação
   * do jogador quanto das caixas.
    */
    function handlePieceMovement(keycode) {
     // Variável destinada ao pré-cálculo da posição do jogador
    const nextPlayerPosition = player.nextPosition(keycode);
     // (Modificar) Variável para detectar a "presença" de outra peça
      const foundPiece = findBoxAtPosition(nextPlayerPosition);

       // Implementar lógica caso encontre uma outra peça no caminho.
       if (foundPiece) {
         

      }
       // E caso não encontre outra peça...
       else {
         // Faça as modificações que forem necessárias para manter o
       // funcionamento do jogo.
        if (verifyPosition(nextPlayerPosition)) {
            player.moveTo(nextPlayerPosition);
         }
      }
    }

    

   function verifyPosition(position) {
      let { x: i, y: k } = position;

      return boardMap[k][i] !== '#';
   }
