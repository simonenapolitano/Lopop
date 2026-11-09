document.addEventListener('DOMContentLoaded', () => {
const params = new URLSearchParams(window.location.search);
const categoriaSelezionata = params.get('cat');

if (categoriaSelezionata && categoriaSelezionata !== 'tutti') {
    const prodotti = document.querySelectorAll('.cardProdotto');
    
    prodotti.forEach(prodotto => {
    const catProdotto = prodotto.getAttribute('data-categoria');

    if (catProdotto === categoriaSelezionata) {
        prodotto.style.display = 'block'; 
    } else {
        prodotto.style.display = 'none';
    }
    });

    const titolo = document.querySelector('.sopraLista h2');
    if (titolo) {
    titolo.textContent = categoriaSelezionata.charAt(0).toUpperCase() + categoriaSelezionata.slice(1);
    }
}
});