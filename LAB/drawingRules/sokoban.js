const tabela2 = document.getElementById('tabela2');
const M = 8;
const N = 8;



//buildGameBoard(8, 8, rule0);
buildGameBoard(8, 8, rule1);
// buildGameBoard(8, 8, rule2);
// buildGameBoard(8, 8, rule3);
// buildGameBoard(8, 8, rule4);
// buildGameBoard(8, 8, rule5);
//buildGameBoard(8, 8, rule6);
//buildGameBoard(8, 8, rule7);






function buildGameBoard(numRows, numCols, drawrule) {
    const game = document.getElementById("jogo");
    const board = document.createElement('div');
    board.classList.add('tabela');


    for (let k = 0; k < numRows; k++) {
        const linha = document.createElement('div');
        linha.classList.add('linha');
        board.append(linha);

        for (let i = 0; i < numCols; i++) {
            const celula = document.createElement('div');
            celula.classList.add('celula');
            linha.appendChild(celula);

            drawrule(celula, numRows, numCols, k, i);



            // if (i == 0 || i == N - 1 || k == 0 || k == M - 1) {
            //     celula.classList.add('vazio');

            //     if (i > 0 && i < 7 && k > 0 && k < 7) {
            //         celula.classList.add('vazio');

                }
            }
    game.append(board);
}

function rule1(celula, numRows, numCols, k, i) {
    if (i == 0 || i == N - 1 || k == 0 || k == M - 1) {
        celula.classList.add('vazio');
    }
}
function rule2(celula, numRows, numCols, k, i) {

    if (k > 0 && k < numRows - 1 && i > 0 && i < numCols - 1) {
        celula.classList.add('vazio')
    }
}
function rule3(celula, numRows, numCols, k, i) {
    if (k == i) {
        celula.classList.add('vazio');
    }

}
function rule4(celula, numRows, numCols, k, i) {
    if (k + i == numCols - 1) {
        celula.classList.add('vazio')
    }
}
function rule5(celula, numRows, numCols, k, i) {
    if (k == i || k + i == numCols - 1) {
        celula.classList.add('vazio')
    }

}
