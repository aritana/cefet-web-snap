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