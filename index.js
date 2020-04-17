const form = document.querySelector('.form');

const generateError = (input) => {
	const validity = input.validity;
	if (validity.valid) return null;
	if (validity.valueMissing) return 'Please fill out this field.';
	if (validity.patternMismatch) return 'Please provide a valid email';
};

const displayError = (input, message, error) => {
	input.classList.add('invalid-input');
	if (!message) {
		message = document.createElement('span');
		message.classList.add('form__error');
		form.insertBefore(message, input.nextElementSibling);
	}
	message.textContent = error;
	message.id = '#error-message';
	input.setAttribute('aria-describedby', 'error-message');
};

const removeError = (input, message) => {
	input.classList.remove('invalid-input');
	input.removeAttribute('aria-describedby');
	if (message) form.removeChild(message);
};

const validate = () => {
	event.preventDefault();
	const input = form.querySelector('.form__input');
	let message = form.querySelector('.form__error');
	const error = generateError(input);
	if (error) {
		displayError(input, message, error);
		return;
	} else {
		removeError(input, message);
	}
};

form.addEventListener('submit', validate);
