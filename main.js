import { getTabuleiro } from "./restaUm.js";
const container = document.getElementById("tabuleiro-container");

function renderizarTabuleiro() {
    container.innerHTML = "";
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    const tabuleiro = getTabuleiro();

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
        console.log(`Clicou em: linha ${linha}, coluna ${coluna}`);
    selecionarPeca(linha, coluna);
    renderizarTabuleiro();
}

renderizarTabuleiro();