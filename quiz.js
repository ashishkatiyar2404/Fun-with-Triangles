const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const scoreDiv = document.querySelector('.output');

const correctAnswers = ['90°', 'right angled'];

function calculateScore(e) {
	e.preventDefault();
	const data = new FormData(quizForm);
   // console.log(data);
	let index = 0;
	let	score = 0;
	for (let entry of data.values()) {
        //console.log(entry);
        //console.log(value);
		if (entry === correctAnswers[index]) {
			score++;
		}
		index++;
	}
   //console.log(score);
	scoreDiv.innerText = `Your score is ${score}`;
}

submitBtn.addEventListener('click', calculateScore);