// Recuperar o #balaozinho
let balaozinhoEl = document.querySelector('#balaozinho');

// Recuperar todas as .marcacao
let tagMarcacao = document.querySelectorAll('.marcacao');

for (let marcacaoEl of tagMarcacao) {
    marcacaoEl.addEventListener('mouseover', function(e) {
        let el = e.currentTarget;
        balaozinhoEl.innerHTML = `<h2>${el.dataset.titulo}</h2>
                                <p>${el.dataset.conteudo}</p>`;
        balaozinhoEl.style.color = el.dataset.cor;

    });
    marcacaoEl.addEventListener('mouseout', function(e) {
        let el = e.currentTarget;
        balaozinhoEl.innerHTML = ``;

    });
    marcacaoEl.addEventListener('mousemove', function(e) {
        console.log('teste');
        balaozinhoEl.style.left = `${e.pageX}px`;
        balaozinhoEl.style.top = `${e.pageY}px`;

        console.log(balaozinhoEl.style.top);
        console.log(balaozinhoEl.style.left);

    });

}