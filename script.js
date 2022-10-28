'use strict';

const btnRandom = document.querySelector('.button');
const characterEl = document.querySelector('.character-img');
const characterElement = document.querySelector('.character-element');

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

const displayResult = function (text) {
	document.querySelector('.text-result').textContent = text;
};

const genshinNames = new Map([
	[0, 'Shenhe'],
	[1, 'Eula'],
	[2, 'Ganyu'],
	[3, 'Ayaka'],
	[4, 'Yae Miko'],
	[5, 'Raiden Shogun'],
	[6, 'Yelan'],
	[7, 'Yoimiya'],
	[8, 'Hu Tao'],
	[9, 'Nilou'],
	[10, 'Layla'],
	[11, 'Kujou Sara'],
]);

const genshinElements = new Map([
	[0, 'cryo.png'],
	[1, 'cryo.png'],
	[2, 'cryo.png'],
	[3, 'cryo.png'],
	[4, 'electro.png'],
	[5, 'electro.png'],
	[6, 'hydro.png'],
	[7, 'pyro.webp'],
	[8, 'pyro.webp'],
	[9, 'hydro.png'],
	[10, 'hydro.png'],
	[11, 'electro.png'],
]);

let last;
btnRandom.addEventListener('click', function () {
	let numRandom;
	while ((numRandom = Math.trunc(Math.random() * 12)) === last) {
		// console.log('will randomize again');
	}
	// console.log(numRandom);
	last = numRandom;
	characterEl.src = `img/genshin_characters/card-${numRandom}.webp`;

	for (const [key, value] of genshinNames) {
		if (numRandom === key) {
			displayResult(`You got ${value}!`);
		}
	}
	for (const [key, value] of genshinElements) {
		if (numRandom === key) {
			characterElement.src = `img/elements/${value}`;
		}
	}
	if (numRandom >= 10) {
		characterEl.classList.remove('character-img');
		characterEl.classList.add('four-star');
	} else if (numRandom < 10) {
		characterEl.classList.remove('four-star');
		characterEl.classList.add('character-img');
	}
});
