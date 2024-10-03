import Piece from "./pieces.js"

export function buildGameBoard(mapa) {
        const boardMap = mapa.trim().split('\n');
        const game = document.getElementById("jogo");
        const board = createGameElement('div', 'tabela', game);
        const positionOfPieces = {
            boxes: []
    };
    let numberOfGoals = 0, boxes = [], player = null;
   
    for (let k = 0; k < boardMap.length; k++) {
        const linha = createGameElement('div', 'linha', board);
       

        for (let i = 0; i < boardMap[k].length; i++) {
            const celula = createGameElement('div', 'celula', linha);
            const char = boardMap[k][i];
            const position = { x: i, y: k }

            if (char === '#') celula.classList.add('wall');
            if (char === '-') celula.classList.add('nada');
            if (char === ' ') celula.classList.add('nada');
            if (char === 'G') {
                celula.classList.add('goal')
                numberOfGoals++;
            };

            if (char === 'P') player = createBoardPiece(position, 'jogador');;
            if (char === 'B') boxes.push(createBoardPiece(position, 'caixa'));;

        }
    }
    return { boardMap, pieces: { boxes, player }, numberOfGoals }
};

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

function createBoardPiece(piecePosition, className) {
    const board = document.querySelector('.tabela');''
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);
 
    return piece;
 }