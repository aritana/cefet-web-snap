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




for (let marcacaoControlesEl of marcacaoControles) {
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
        let formato = 'formato-oval';
        if (marcacaoControlesEl.classList.contains('formato-retangular')) {
            formato = 'formato-retangular';
        }


        let formatoMarcacaoEl = document.querySelector(`[value="${formato}"]`);
        formatoMarcacaoEl.checked = true;

    });


}