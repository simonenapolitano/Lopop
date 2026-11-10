document.addEventListener('DOMContentLoaded', () => {
    const category = new URLSearchParams(window.location.search).get('cat');
    if (!category || category === 'All') return;
    document.querySelectorAll('.cardProdotto').forEach(product => {
        product.style.display = product.getAttribute('data-categoria') === category ? 'block' : 'none';
    });
    const heading = document.querySelector('.sopraLista h2');
    if (heading) heading.textContent = category;
});
