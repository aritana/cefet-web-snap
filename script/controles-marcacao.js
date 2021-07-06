let ocultarMarcacoesEl = document.querySelector('#visibilidade-das-marcacoes');
let marcacao = document.querySelectorAll('.marcacoes-ocultas .marcacao'); //coleta todos os elementos .


ocultarMarcacoesEl.addEventListener('change', function(e) {
    let estaMarcado = ocultarMarcacoesEl.checked;
    console.log(estaMarcado);

    if (estaMarcado) {
        for (let marcacaoEl of marcacao) {
            marcacaoEl.classList.add('marcada');
        }
        console.log('marcado');
    } else {
        for (let marcacaoEl of marcacao) {
            marcacaoEl.classList.remove('marcada');
        }
    }
});