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

export function moverPeca(linhaDestino, colunaDestino) {
    if (!pecaSelecionada) return; 

    const { linha: linhaOrigem, coluna: colunaOrigem } = pecaSelecionada;

    
    if (ehMovimentoValido(linhaOrigem, colunaOrigem, linhaDestino, colunaDestino)) {
        tabuleiro[linhaDestino][colunaDestino] = 1;
        tabuleiro[linhaOrigem][colunaOrigem] = 2; 

        
        const linhaMeio = linhaOrigem + (linhaDestino - linhaOrigem) / 2;
        const colunaMeio = colunaOrigem + (colunaDestino - colunaOrigem) / 2;
        tabuleiro[linhaMeio][colunaMeio] = 2;

        pecaSelecionada = null; 
    }
}

function ehMovimentoValido(l1, c1, l2, c2) {
    if (tabuleiro[l2][c2] !== 2) {
        return false;
    }

    const ehSaltoHorizontal = Math.abs(c1 - c2) === 2 && l1 === l2;
    const ehSaltoVertical = Math.abs(l1 - l2) === 2 && c1 === c2;

    if (!ehSaltoHorizontal && !ehSaltoVertical) {
        return false;
    }

    const linhaMeio = l1 + (l2 - l1) / 2;
    const colunaMeio = c1 + (c2 - c1) / 2;
    if (tabuleiro[linhaMeio][colunaMeio] !== 1) {
        return false;}

    return true; 
}