const popup = document.querySelector('.popup');
const submit = document.querySelector('.first-page__submit');
submit.addEventListener('click', () => {
    popup.classList.add('popup--active');
})
popup.addEventListener('click', (event) => {
    if(event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
        popup.classList.remove('popup--active');
    }
})