export const boardMap = [
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

export function buildGameBoard() {
    const game = document.getElementById("jogo");
    const board = createGameElement('div', 'tabela', game);
    const positionOfPieces = {
        boxes: []
    };
    let numberOfGoals = 0;

    for (let k = 0; k < NUM_ROWS; k++) {
        const linha = createGameElement('div', 'linha', board);

        for (let i = 0; i < NUM_COLS; i++) {
            const celula = createGameElement('div', 'celula', linha);
            const char = boardMap[k][i];
            const position = { x: i, y: k }
            if (char === '#') celula.classList.add('wall');
            if (char === 'G') {
                celula.classList.add('goal')
                numberOfGoals++;
            };
            if (char === 'P') positionOfPieces.player = position;
            if (char == 'B') positionOfPieces.boxes.push(position);

        }
    }

    return { positionOfPieces, numberOfGoals };
}

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}