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
 
function buildGameBoard(numRows, numCols) {
    const game = document.getElementById("jogo");
    const board = createGameElement('div', 'tabela', game);
    const positionOfPieces = createGameElement('div', 'jogador', board);
 
 
    for (let k = 0; k < numRows; k++) {
       const linha = createGameElement('div', 'linha', board);
 
 
 
       for (let i = 0; i < numCols; i++) {
          const celula = createGameElement('div', 'celula', linha);
          const char = boardMap[k][i];
 
 
          if (char === '#') celula.classList.add('wall');
          if (char === 'G') celula.classList.add('goal');
          if (char === 'p') celula.classList.add('box');
          if (char === 'p') {
             player = new player(k, i);
          }
       }
    }
 
    return positionOfPieces;
 }
 
 
 
function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);
 
    return element;
 }
 
 
 
 