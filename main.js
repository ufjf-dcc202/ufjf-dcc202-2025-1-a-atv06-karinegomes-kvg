import { getTabuleiro,getPecaSelecionada, selecionarPeca, moverPeca } from "./restaUm.js";
const container = document.getElementById("tabuleiro-container");

function renderizarTabuleiro() {
    container.innerHTML = "";
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    const tabuleiro = getTabuleiro();
    const pecaSelecionada = getPecaSelecionada();

    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            const ePosicao = document.createElement("div");
            ePosicao.classList.add("posicao");
            ePosicao.dataset.linha = i;
            ePosicao.dataset.coluna = j;
            const valor = tabuleiro[i][j];
            if (valor === 0) {
                ePosicao.classList.add("invalida");
            } else if (valor === 1) {
                const ePeca = document.createElement("div");
                ePeca.classList.add("peca");
                if (pecaSelecionada && pecaSelecionada.linha === i && pecaSelecionada.coluna === j) {
                        ePeca.classList.add("selecionada");
                }
                ePosicao.appendChild(ePeca);
            } else { 
                ePosicao.classList.add("vazia");
            }
            eTabuleiro.appendChild(ePosicao);
        }
    }
    container.appendChild(eTabuleiro);
}
function ClicarPosicao(evento) {
    const linha = Number(evento.currentTarget.dataset.linha);
    const coluna = Number(evento.currentTarget.dataset.coluna);
    const tabuleiro = getTabuleiro();
    const pecaSelecionada = getPecaSelecionada();

    if (tabuleiro[linha][coluna] === 1) { 
        selecionarPeca(linha, coluna);
    } else if (tabuleiro[linha][coluna] === 2 && pecaSelecionada) { 
        moverPeca(linha, coluna);
    }
    renderizarTabuleiro();
}
renderizarTabuleiro();