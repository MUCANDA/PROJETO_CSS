
        const boardMap = mapa.trim().split('\n');
        const game = document.getElementById("jogo");
        const board = createGameElement('div', 'tabela', game);
        const positionOfPieces = {
            boxes: []
    };
    let numberOfGoals = 0;
    const NUM_ROWS = boardMap.length;

    for (let k = 0; k < NUM_ROWS; k++) {
        const linha = createGameElement('div', 'linha', board);
        const NUM_COLS = boardMap[k].length;

        for (let i = 0; i < NUM_COLS; i++) {
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
            if (char === 'P') positionOfPieces.player = position;
            if (char == 'B') positionOfPieces.boxes.push(position);


        }
    }

    return { boardMap, positionOfPieces, numberOfGoals };


export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}