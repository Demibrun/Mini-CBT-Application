const questions = document.querySelectorAll('.question');
let currentQuestion = 0;

function showQuestion(index) {
    questions.forEach((q, i) => q.classList.toggle('active', i === index));
    document.getElementById('prev').style.display = index > 0 ? 'inline-block' : 'none';
    document.getElementById('next').style.display = index < questions.length - 1 ? 'inline-block' : 'none';
    document.getElementById('submit').style.display = index === questions.length - 1 ? 'inline-block' : 'none';
}

function showNextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

function showPrevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function submitQuiz() {
    let score = 0;
    let results = '';

    questions.forEach((q, index) => {
        const correctAnswer = q.getAttribute('data-correct');
        const selectedAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);
      
        if (selectedAnswer && selectedAnswer.value === correctAnswer) {
            score += 20;
        }

        results += `Question ${index + 1}: Your answer: ${selectedAnswer ? selectedAnswer.value.toUpperCase() : 'Not done'} | Correct answer: ${correctAnswer.toUpperCase()}<br>`;
    });

    document.getElementById('result').innerHTML = `
        <h2>Quiz Results</h2>
        <p>Your score: ${score} / 100</p>
        ${results}
    `;

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('prev').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
}

showQuestion(currentQuestion);