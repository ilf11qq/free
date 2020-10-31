const popup = document.querySelector('.popup');
const submit = document.querySelector('.first-page__submit');
submit.addEventListener('click', () => {
    popup.classList.add('popup--active');
    document.body.classList.add('body-overflow-hidden');
})
popup.addEventListener('click', (event) => {
    if(event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
        popup.classList.remove('popup--active');
        document.body.classList.remove('body-overflow-hidden');
    }
})
const portfolioItems = document.querySelectorAll('.portfolio__item');
const showButton = document.querySelector('.portfolio__show-more');
const hideButton = document.querySelector('.portfolio__hide-more');
showButton.addEventListener('click', () => {
    for (let i = 4; i < portfolioItems.length; i++) {
        portfolioItems[i].classList.remove('portfolio__item--hide');
    }
    showButton.classList.add('portfolio__item--hide');
    hideButton.classList.remove('portfolio__item--hide');
});
hideButton.addEventListener('click', () => {
    for (let i = 4; i < portfolioItems.length; i++) {
        portfolioItems[i].classList.add('portfolio__item--hide');
    }
    showButton.classList.remove('portfolio__item--hide');
    hideButton.classList.add('portfolio__item--hide');
})
let burger = document.querySelector('.burger__icon');
let burgerNav = document.querySelector('.burger__nav');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger__icon--active');
    burgerNav.classList.toggle('burger__nav--active');
    document.body.classList.toggle('body-overflow-hidden');
})