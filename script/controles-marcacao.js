let ocultarMarcacoesEl = document.querySelector('#visibilidade-das-marcacoes');
let marcacao = document.querySelectorAll('.marcacoes-ocultas .marcacao'); //coleta todos os elementos .

ocultarMarcacoesEl.addEventListener('change', function(e) {
    let estaMarcado = ocultarMarcacoesEl.checked;

    if (estaMarcado) {
        for (let marcacaoEl of marcacao) {
            marcacaoEl.classList.add('marcada');
        }
    } else {
        for (let marcacaoEl of marcacao) {
            marcacaoEl.classList.remove('marcada');
        }
    }
});

//selecionar .marcacao clicando nela
//adicionar classe selecionada a ela
let marcacaoControles = document.querySelectorAll('.marcacao');
let controlePosicao = document.querySelectorAll('input[type="number"]');
let tituloEl = document.querySelector('#titulo-da-marcacao');
let conteudoEl = document.querySelector('#conteudo-da-marcacao');
let corEl = document.querySelector('#cor-da-marcacao');


//exercicio 02
let marcacaoSelecionada;

for (let marcacaoControlesEl of marcacaoControles) {
    console.log(marcacaoControlesEl.classList);
    marcacaoControlesEl.addEventListener('click', function(e) {

        //remover selecionada das demais
        for (let marcacaoControlesSelecionadaEl of marcacaoControles) {
            marcacaoControlesSelecionadaEl.classList.remove('selecionada');
        }

        marcacaoControlesEl.classList.add('selecionada'); //colocar selecionada 
        let el = e.currentTarget;
        for (let i = 0; i < controlePosicao.length; i++) {

            let controlePosicaoEl = controlePosicao[i];
            if (controlePosicaoEl.id === 'x-da-marcacao') {
                controlePosicaoEl.value = parseFloat(marcacaoControlesEl.style.left);
            }
            if (controlePosicaoEl.id === 'y-da-marcacao') {
                controlePosicaoEl.value = parseFloat(marcacaoControlesEl.style.top);
            }
            if (controlePosicaoEl.id === 'largura-da-marcacao') {
                controlePosicaoEl.value = parseFloat(marcacaoControlesEl.style.width);
            }
            if (controlePosicaoEl.id === 'altura-da-marcacao') {
                controlePosicaoEl.value = parseFloat(marcacaoControlesEl.style.height);
            }
        }
        //titulo conteudo e cor

        tituloEl.value = el.dataset.titulo;
        conteudoEl.value = el.dataset.conteudo;
        corEl.value = el.dataset.cor;
        //formato
        let formato = el.dataset.formato;
        let formatoMarcacaoEl = document.querySelector(`[value="${formato}"]`);
        formatoMarcacaoEl.checked = true;
        marcacaoSelecionada = el;

    });
}



//exercicio 03

let controleInputs = document.querySelectorAll(`[id$=da-marcacao]`);
for (let controleInputsEl of controleInputs) {
    controleInputsEl.addEventListener('change', formataCaixa);
}

function formataCaixa() {

    if (marcacaoSelecionada === undefined) return;
    for (let i = 0; i < controleInputs.length; i++) { //percorre os inputs

        let controlePosicaoEl = controleInputs[i];
        if (controlePosicaoEl.id === 'x-da-marcacao') {
            marcacaoSelecionada.style.left = `${controlePosicaoEl.value}px`;
        }
        if (controlePosicaoEl.id === 'y-da-marcacao') {
            marcacaoSelecionada.style.top = `${controlePosicaoEl.value}px`;
        }
        if (controlePosicaoEl.id === 'largura-da-marcacao') {
            marcacaoSelecionada.style.width = `${controlePosicaoEl.value}px`;
        }
        if (controlePosicaoEl.id === 'altura-da-marcacao') {
            marcacaoSelecionada.style.height = `${controlePosicaoEl.value}px`;
        }
        if (controlePosicaoEl.id === 'titulo-da-marcacao') {
            marcacaoSelecionada.dataset.titulo = `${controlePosicaoEl.value}`;
        }
        if (controlePosicaoEl.id === 'conteudo-da-marcacao') {
            marcacaoSelecionada.dataset.conteudo = `${controlePosicaoEl.value}`;
        }
        if (controlePosicaoEl.id === 'cor-da-marcacao') {
            marcacaoSelecionada.dataset.cor = `${controlePosicaoEl.value}`;
        }

    }

}

let controleRadio = document.querySelectorAll(`[name="formato-da-marcacao"]`);

for (let controleRadioEl of controleRadio) {
    controleRadioEl.addEventListener('click', formataCaixaForma);
}


function formataCaixaForma() {
    if (marcacaoSelecionada === undefined) return;
    let radioEl = document.querySelector(`[name="formato-da-marcacao"]:checked`);
    marcacaoSelecionada.classList.toggle(`${radioEl.value}`, true); //sempre insere

    if (radioEl.value === 'formato-retangular') {
        marcacaoSelecionada.classList.toggle('formato-retangular', true); //sempre insere
        marcacaoSelecionada.classList.remove('formato-oval');
        marcacaoSelecionada.dataset.formato = 'formato-retangular';

    }
    if (radioEl.value === 'formato-oval') {
        marcacaoSelecionada.classList.toggle('formato-oval', true);
        marcacaoSelecionada.classList.remove('formato-retangular');
        marcacaoSelecionada.dataset.formato = 'formato-oval';

    }
}