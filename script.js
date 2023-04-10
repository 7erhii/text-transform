const textForm = document.getElementById('form');
const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
// const text = textForm.value;
const outputData = document.getElementById('output-data');

textForm.addEventListener('keydown', function (e) {
	if (e.key === 'Enter') {
		e.preventDefault();
	}
});

button1.addEventListener('click', function (e) {
	const text = textForm.value;

	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 11; j++) {
			const spaces = j > 5 ? 10 - j : j;
			outputData.innerHTML += '&nbsp;'.repeat(spaces) + text + '<br>';
		}
	}
});

// for (let i = 0; i < 4; i++) {
// 	for (let j = 0; j < 11; j++) {
// 		const spaces = j > 5 ? 10 - j : j;
// 		outputData.innerHTML += '&nbsp;'.repeat(spaces) + text + '<br>';
// 	}
// }
