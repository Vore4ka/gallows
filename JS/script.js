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
let classImg;

let answerArray = [];
for (let i = 0; i < word.length; i++) {
	answerArray[i] = '_';
}

let remainingLetters = word.length;
let attempts = 9;
attempt.textContent = attempts;
pWord.textContent = answerArray.join(' ');

function submitForm() {

	if (remainingLetters > 0 && attempts > 0) {

		let guess = document.getElementById('guess').value;
		if (guess.replace(/\s/g, '').length === 0 || !isNaN(guess)) {
			alert('Введите букву'); 
			document.getElementById('guess').value = ''; 
			return false; 

		} else if (guess.length > 1) {
			alert('Вы можете ввести только одну букву.');
			document.getElementById('guess').value = ''; 
			return false; 

		} else {
			guess = guess.toLowerCase();
			let guessedLetters = 0;
			for (let j = 0; j < word.length; j++) {
				if (word[j] === guess) {
					if (answerArray[j] === '_') {
						answerArray[j] = guess;
						remainingLetters--;
						guessedLetters++;
					}
					//attempts++;
				} 
			}
			if (guessedLetters === 0) {
				attempts--;
			}
			classImg = 'number' + attempts;
			console.log(classImg);
			image.classList.add(classImg);
			//attempts--;
		}

		pWord.textContent = answerArray.join(' ');
		document.getElementById('guess').value = '';
		attempt.textContent = attempts;

	} else if (remainingLetters === 0) {
		alert('Отлично, вы победили! Было загадано слово ' + word);
		} else if (attempts === 0 ) {
			alert('К сожалению, вы проиграли... Было загадано слово ' + word);
			}	

};	

function cancelGame() {
	location.reload();	
}