const textForm = document.getElementById('form');
const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
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
	const text = textForm.value;

	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 20; j++) {
			const spaces = j > 10 ? 20 - j : j;
			outputData.innerHTML += '&nbsp;'.repeat(spaces) + text + '<br>';
		}
	}
});

function copyText() {
	// Создаем новый объект Range
	const range = document.createRange();

	// Выбираем содержимое блока output-data
	range.selectNodeContents(outputData);

	// Выбираем содержимое объекта Range
	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);

	// Копируем содержимое в буфер обмена
	document.execCommand('copy');

	// Отменяем выбор
	selection.removeAllRanges();

	console.log('Текст скопирован');

	outputData.innerHTML = '';
}
