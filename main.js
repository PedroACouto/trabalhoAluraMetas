const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

const contadores = document.querySelectorAll(".contador");

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return { dias, horas, minutos, segundos };
}

function atualizaContadores() {
    const temposObjetivos = [
        new Date("2024-12-30T00:00:00"),
        new Date("2024-12-15T00:00:00"),
        new Date("2024-09-30T00:00:00"),
        new Date("2024-10-30T00:00:00")
    ];

    temposObjetivos.forEach((tempoObjetivo, index) => {
        const { dias, horas, minutos, segundos } = calculaTempo(tempoObjetivo);
        const contador = contadores[index];

        const diasElemento = contador.querySelector(".contador-digito:nth-child(1) .contador-digito-numero");
        const horasElemento = contador.querySelector(".contador-digito:nth-child(2) .contador-digito-numero");
        const minutosElemento = contador.querySelector(".contador-digito:nth-child(3) .contador-digito-numero");
        const segundosElemento = contador.querySelector(".contador-digito:nth-child(4) .contador-digito-numero");

        diasElemento.textContent = dias;
        horasElemento.textContent = horas;
        minutosElemento.textContent = minutos;
        segundosElemento.textContent = segundos;
    });
}

setInterval(atualizaContadores, 1000);

atualizaContadores();
