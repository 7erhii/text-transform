const textForm = document.getElementById('form');
const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const button4 = document.getElementById('btn-4');

// const text = textForm.value;
const outputData = document.getElementById('output-data');
const copyButton = document.getElementById('copy');
copyButton.addEventListener('click', copyText);

textForm.addEventListener('keydown', function (e) {
	if (e.key === 'Enter') {
		e.preventDefault();
	}
});

button1.addEventListener('click', function (e) {
	// outputData.innerHTML = '';

	const text = textForm.value;

	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 20; j++) {
			const spaces = j > 10 ? 20 - j : j;
			outputData.innerHTML += '&nbsp;'.repeat(spaces) + text + '<br>';
		}
	}
});

button2.addEventListener('click', function (e) {
	// outputData.innerHTML = '';

	const text = textForm.value;

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 20; j++) {
			const spaces = j > 10 ? 40 - j : j;
			outputData.innerHTML += '&nbsp;'.repeat(spaces) + text + '<br>';
		}
	}
});

button3.addEventListener('click', function (e) {
	// outputData.innerHTML = '';

	const text = textForm.value;
	const emojis = [
		'😀',
		'😁',
		'😂',
		'🤣',
		'😃',
		'😄',
		'😅',
		'😆',
		'😉',
		'😊',
		'😋',
		'😎',
		'😍',
		'😘',
		'😜',
		'😝',
		'😛',
		'🤑',
		'🤗',
		'🤔',
	];

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 20; j++) {
			const spaces = j > 10 ? 20 - j : j;
			const randomIndex = Math.floor(Math.random() * emojis.length);
			const randomEmoji = emojis[randomIndex];
			outputData.innerHTML += '&nbsp;'.repeat(spaces) + randomEmoji + text + '<br>';
		}
	}
});

button4.addEventListener('click', function (e) {
	outputData.innerHTML = '';

	const text = textForm.value;
	const textArr = text.split('');
	console.log(textArr);

	const combinations = [];

	outputData.innerHTML = combinations.join('<br>');
});

//copy text
function copyText() {
	const range = document.createRange();

	range.selectNodeContents(outputData);

	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);

	document.execCommand('copy');

	selection.removeAllRanges();

	console.log('Текст скопирован');

	outputData.innerHTML = '';
}
//================================================================
