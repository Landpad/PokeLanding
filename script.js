const hamburguer = document.getElementById('hamburguer');
const navUl = document.getElementById('navUl');

hamburguer.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('clicked');
});