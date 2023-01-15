let words = [
	'компьютер',
	'диван',
	'красота',
	'привелегия',
	'программа',
	'крематорий',
	'персона',
	'автомобиль',
	'скамья',
	'резиденция',
	'зеркало',
	'кружка',
	'крем',
	'бутылка',
	'коробка',
	'книга',
	'тетрадь',
	'концерт',
	'майонез',
	'конфета',
	'батон',
	'телевизор'
];

let word = words[Math.floor(Math.random() * words.length)];
let attempt = document.querySelector('.attempt');
let pWord = document.querySelector('.word');
let image = document.querySelector('.img');
let description = document.querySelector('.description');
let classImg;
let usedLetters = [];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
	answerArray[i] = '_';
}

let remainingLetters = word.length;
let attempts = 9;
attempt.textContent = attempts;
pWord.textContent = answerArray.join(' ');

function submitForm() {
	console.log("нажали на кнопку, remainingLetters = " + remainingLetters + " attempts = " + attempts);
	
	let guess = document.getElementById('guess').value;

	if (guess.replace(/\s/g, '').length === 0 || guess.replace(/^[а-яА-Я]/g, '').length !==0) {
	alert('Пожалуйста, введите букву на русском языке, а затем нажмите "Готово"'); 
	document.getElementById('guess').value = ''; 
	return; 
	} else {
		let isGuessed = false;
		guess = guess.toLowerCase();
						
		for (let j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				if (answerArray[j] === '_') {
					answerArray[j] = guess;
						remainingLetters--;
				}
			isGuessed = true;
			} 
		}

		for (let j = 0; j < usedLetters.length; j++) {
			if (usedLetters[j] == guess) {
				alert("Вы уже вводили данную букву");
				return;
			} 
		}
		usedLetters.push(guess);
		if (!isGuessed) attempts--;
		image.classList.remove(classImg);
		classImg = 'number' + attempts;
		image.classList.add(classImg);
	}

	pWord.textContent = answerArray.join(' ');
	document.getElementById('guess').value = '';
	attempt.textContent = attempts;

	if (remainingLetters === 0) {
		attempt.textContent = '';
		description.textContent = 'Отлично, вы победили! Было загадано слово ' + word;
	} else if (attempts === 0 ) {
		description.textContent = 'К сожалению, вы проиграли... Было загадано слово ' + word;
	}	
	
	console.log("код закончисля, remainingLetters = " + remainingLetters + " attempts = " + attempts);

};	

function cancelGame() {
	location.reload();	
}