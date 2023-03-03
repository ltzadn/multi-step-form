import stepsJson from './mocks/steps.json' assert { type: 'json' };
// import isAnEmail from './validation/isAnEmailValidator.js';
// import isAPhoneNumber from './validation/isAPhoneNumberValidator.js';

const sidebar = document.querySelector('.main__sidebar--container');
const nextStepButton = document.querySelector('#next-step');
const sidebarStepNumberIcons = sidebar.getElementsByClassName('sidebar__step__number');
const formTextFields = document.getElementsByClassName('input__personal-info');
// const emailAdressTextField = document.getElementById('#email-textfield');
// const phoneTextField = document.getElementById('#phone-textfield');

window.onload = () => {
	stepsJson.data.map((step, index) => {
		// creating a new element
		let divContainer = document.createElement('div');
		let divStepNumber = document.createElement('div');
		let divParagraphContainer = document.createElement('div');
		let titleParagraph = document.createElement('p');
		let stepParagraph = document.createElement('p');
		// adding classes to new elements
		divContainer.classList.add('sidebar__steps__container');
		divStepNumber.classList.add('sidebar__step__number');
		index === 0 && divStepNumber.classList.add('active');
		divParagraphContainer.classList.add('sidebar__paragraph__container');
		titleParagraph.classList.add('sidebar__step__title');
		stepParagraph.classList.add('sidebar__step__paragraph__number');
		// appending elements
		sidebar.appendChild(divContainer);
		divContainer.appendChild(divStepNumber);
		divContainer.appendChild(divParagraphContainer);
		divParagraphContainer.appendChild(stepParagraph);
		divParagraphContainer.appendChild(titleParagraph);
		// textContent
		divStepNumber.textContent = index + 1;
		stepParagraph.textContent = `step ${index + 1}`;
		titleParagraph.textContent = step.stepTitle;
	});
};
let activeStep = 0;

const sidebarStepsActiveStateHandler = event => {
	event.target.innerText === 'Next Step'
		? activeStep < 3
			? activeStep++
			: activeStep
		: activeStep > 0
		? activeStep--
		: activeStep;
	if (event.target.innerText === 'Next Step') {
		sidebarStepNumberIcons[activeStep].classList.add('active');
		sidebarStepNumberIcons[activeStep - 1].classList.remove('active');
	} else {
		sidebarStepNumberIcons[activeStep].classList.add('active');
		sidebarStepNumberIcons[activeStep + 1].classList.remove('active');
	}
};
// form fields length validation
[...formTextFields].forEach(input => {
	input.addEventListener('blur', event => {
		event.target.value.length <= 0
			? input.classList.add('input__textfield--error')
			: input.classList.remove('input__textfield--error');
	});
});

formTextFields[2].addEventListener('keydown', event => {
	if (!event.key.match(/^[0-9/ -+\s]+$/)) {
		event.preventDefault();
	}
});

nextStepButton.addEventListener('click', sidebarStepsActiveStateHandler);
