const questions = [
    {
        question: 'Which is largest animal in the world? ',
        answer: [
            { text: 'Shark', correct: false },
            { text: 'Blue whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false },
        ]
    },
    {
        question: 'Which is smallest country in the world? ',
        answer: [
            { text: 'Vatican City', correct: true },
            { text: 'Bhutan', correct: true },
            { text: 'Nepal', correct: false },
            { text: 'Sri Lanka', correct: false },
        ]
    },
    {
        question: 'Which is largest desert in the world? ',
        answer: [
            { text: 'Kalahari', correct: false },
            { text: 'Gobi', correct: false },
            { text: 'Sahara', correct: false },
            { text: 'Antarctica', correct: true },
        ]
    },
    {
        question: 'Which is smallest continent in the world? ',
        answer: [
            { text: 'Asia', correct: false },
            { text: 'Arctic', correct: false },
            { text: 'Australia', correct: true },
            { text: 'Africa', correct: false },
        ]
    },
]

const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answer-button')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)

    });
}
function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(){
    const 
}
startQuiz();