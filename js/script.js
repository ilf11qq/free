let burger = document.querySelector('.burger__icon');
let burgerNav = document.querySelector('.burger__nav');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger__icon--active');
    burgerNav.classList.toggle('burger__nav--active');
})