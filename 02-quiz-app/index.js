const quizData = [
  {
    question: 'What is the most used programming language in 2021?',
    a: 'Javascript',
    b: 'C',
    c: 'Python',
    d: 'Java',
    correct: 'a',
  },
  {
    question:
      'Which one of the following is the correct way for calling the JavaScript code?',
    a: 'Preprocessor',
    b: 'Triggering Event',
    c: 'RMI',
    d: 'Function/Method',
    correct: 'd',
  },
  {
    question:
      'In the JavaScript, which one of the following is not considered as an error?',
    a: 'Syntax error',
    b: 'Missing of semicolons',
    c: 'Division by zero',
    d: 'Missing of Bracket',
    correct: 'c',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
  {
    question:
      'Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL"',
    a: 'if(a!==null)',
    b: 'if (a!)',
    c: 'if(a!null)',
    d: 'if(a!=null)',
    correct: 'a',
  },
];

const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answersEls = document.querySelectorAll('.answer');
const submitBtn = document.getElementById('submit');

let currentQuestionIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuestion = quizData[currentQuestionIndex];
  question.innerText = currentQuestion.question;
  a_text.innerText = currentQuestion.a;
  b_text.innerText = currentQuestion.b;
  c_text.innerText = currentQuestion.c;
  d_text.innerText = currentQuestion.d;
}

function getSelectedAnswer() {
  let ansID = undefined;
  answersEls.forEach((ans) => {
    if (ans.checked) {
      ansID = ans.id;
    }
  });
  return ansID;
}

function deselectAnswers() {
  answersEls.forEach((ans) => {
    ans.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const selectedAnsIndex = getSelectedAnswer();
  if (selectedAnsIndex) {
    if (quizData[currentQuestionIndex].correct === selectedAnsIndex) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuiz();
    } else {
      document.getElementById('quiz').innerHTML = `
        <h2>You are finished with score of ${score} / ${quizData.length} ${
        score === 4 ? '💪🏻' : '👍🏻'
      }</h2>
        <button onclick="location.reload()">Reload Quiz</button>
      `;
    }
  } else {
    alert('Please select an option to continue');
  }
});
