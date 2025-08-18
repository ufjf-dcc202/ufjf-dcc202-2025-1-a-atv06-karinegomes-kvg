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