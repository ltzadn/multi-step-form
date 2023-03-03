import stepsJson from './mocks/steps.json' assert { type: 'json' };
import isNotEmpty from './validation/isNotEmptyValidator.js' assert { type: 'js' };

const sidebar = document.querySelector('.main__sidebar--container');
const nextStepButton = document.querySelector('#next-step');
const sidebarStepNumberIcons = sidebar.getElementsByClassName('sidebar__step__number');
const nameTextField = document.getElementById('#name-textfield').value;
const emailAdressTextField = document.getElementById('#email-textfield').value;
const phoneTextField = document.getElementById('#phone-textfield').value;

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

nextStepButton.addEventListener('click', sidebarStepsActiveStateHandler);
