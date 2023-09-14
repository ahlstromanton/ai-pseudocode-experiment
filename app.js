const subscribeButton = document.querySelector('.subscribe-button');
const subscribeForm = document.querySelector('.subscribe-form');
const subscribeButtons = document.querySelectorAll('.subscribe-button');

subscribeButtons.forEach(button => {
    button.addEventListener('click', () => {
        subscribeForm.style.display = 'block';
    });
});
