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