import stepsJson from './mocks/steps.json' assert { type: 'json' };

const sidebar = document.querySelector('.main__sidebar--svg');

window.onload = () => {
	stepsJson.data.map((step, index) => {
		console.log(index);
		let divContainer = document.createElement('div');
		divContainer.classList.add('sidebar__steps__container');
		let divStepNumber = document.createElement('div');
		divStepNumber.classList.add('sidebar__step__number');
		let titleParagraph = document.createElement('p');
		titleParagraph.classList.add('sidebar__step__title');
		let stepParagraph = document.createElement('p');
		stepParagraph.classList.add('sidebar__step__paragraph__number');
		sidebar.appendChild(divContainer);
		divContainer.appendChild(divStepNumber);
		divContainer.appendChild(stepParagraph);
		divContainer.appendChild(titleParagraph);
		divStepNumber.textContent = index + 1;
		stepParagraph.textContent = `step ${index + 1}`;
		titleParagraph.textContent = step.stepTitle;
	});
};
