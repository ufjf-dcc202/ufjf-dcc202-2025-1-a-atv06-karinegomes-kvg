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
            
            eTabuleiro.appendChild(ePosicao);
        }
    }
    container.appendChild(eTabuleiro);
}

renderizarTabuleiro();