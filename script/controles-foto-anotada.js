let filtroEl = document.querySelector('#filtro-da-foto');


let fotoEl = document.querySelector('.foto-anotada > img');
filtroEl.addEventListener('change', function(e) {

    let el = e.currentTarget;
    let filtro = el.value;
    fotoEl.style.filter = filtro;
    console.log(`filtro: ${filtro}`);
})