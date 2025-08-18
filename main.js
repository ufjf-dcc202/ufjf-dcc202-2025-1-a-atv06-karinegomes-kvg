// 0 = Posição inválida
// 1 = Posição com peça
// 2 = Posição vazia
const tabuleiroInicial = [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
];

let tabuleiro = JSON.parse(JSON.stringify(tabuleiroInicial));

export function getTabuleiro() {
    return [...tabuleiro];
}

let pecaSelecionada = null;

export function getPecaSelecionada() {
    return pecaSelecionada;
}

export function selecionarPeca(linha, coluna) {
    if (tabuleiro[linha][coluna] !== 1) {
        return;
    }

    if (pecaSelecionada && pecaSelecionada.linha === linha && pecaSelecionada.coluna === coluna) {
        pecaSelecionada = null;
    } else {
        pecaSelecionada = { linha, coluna };
    }
}