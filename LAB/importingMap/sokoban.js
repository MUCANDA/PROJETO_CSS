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

}




