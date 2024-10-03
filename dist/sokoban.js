import { buildGameBoard } from "../dist/tabela.js";
import { lvl0, lvl1 } from "./level.js";

const { boardMap, pieces: { boxes, player }, numberOfGoals } = buildGameBoard(lvl0);
window.addEventListener("keydown", function (event) {
   handlePieceMovement(event.code);
});

function findBoxAtPosition(position) {
   return boxes.find((caixa) => caixa.x === position.x && caixa.y === position.y);
}

function handlePieceMovement(keycode) {
 
   const nextPlayerPosition = player.nextPosition(keycode);
  
   const foundBox = findBoxAtPosition(nextPlayerPosition);

   if (foundBox) {
      const nextPosBox = foundBox.nextPosition(keycode);
      const foundBox2 = findBoxAtPosition(nextPosBox);
      const boxCanMove = verifyPosition(nextPosBox);

      if (boxCanMove && !foundBox2) {
         foundBox.moveTo(nextPosBox);
         player.moveTo(nextPlayerPosition);
      }
      if (levelCompleted()) setTimeout(() => alert("Você venceu!"), 250);
   }
   else {
     
      const playerCanMove = verifyPosition(nextPlayerPosition);
      if (playerCanMove) {
         player.moveTo(nextPlayerPosition);
      }
   }
}
function levelCompleted() {
   let count = 0;
   for (let i = 0; i < boxes.length; i++) {
      let { x: i, y: k } = boxes[i];

      if (boardMap[k][i] == 'G') count++;
   }
   return count == numberOfGoals;
}

function verifyPosition(position) {
   let { x: i, y: k } = position;

   return boardMap[k][i] !== '#';
}
