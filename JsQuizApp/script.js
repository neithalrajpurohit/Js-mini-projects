const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.querySelector("#question");

const answerEls = document.querySelectorAll(".answer");
// const questionEl;
const a_text = document.querySelector("#a_text");

const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  quiz.textContent = quizData[currentQuiz].question;
  a_text.textContent = quizData[currentQuiz].a;
  b_text.textContent = quizData[currentQuiz].b;
  c_text.textContent = quizData[currentQuiz].c;
  d_text.textContent = quizData[currentQuiz].d;
}

function deselectAnswers() {}

function getSelected() {}

submitBtn.addEventListener("click", () => {
  answerEls.forEach((item) => {
    let selectedId = item.getAttribute("id");
    let store = quizData[currentQuiz].correct;
    if (selectedId === store && item.checked) {
      score++;
      console.log("hello");
    }
  });
  if (currentQuiz >= quizData.length - 1) {
    alert(score);
    currentQuiz = 0;
    loadQuiz();
  } else {
    currentQuiz++;
    loadQuiz();
  }
});
