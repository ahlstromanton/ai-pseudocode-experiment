const subscribeButton = document.getElementById('subscribe-button');

subscribeButton.addEventListener('click', () => {
    // Remove the subscribe button
    subscribeButton.remove();

    // Create and append the subscription form
    const subscribeForm = document.createElement('form');
    subscribeForm.classList.add('subscribe-form');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Your name:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Your email address:';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Confirm';

    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for subscribing!';
    thankYouMessage.style.display = 'none';

    confirmButton.addEventListener('click', () => {
        // Handle the subscription confirmation here
        // For now, just display the thank you message
        thankYouMessage.style.display = 'block';
    });

    subscribeForm.appendChild(nameLabel);
    subscribeForm.appendChild(nameInput);
    subscribeForm.appendChild(emailLabel);
    subscribeForm.appendChild(emailInput);
    subscribeForm.appendChild(confirmButton);
    subscribeForm.appendChild(thankYouMessage);

    document.querySelector('.subscribe-section').appendChild(subscribeForm);
});
