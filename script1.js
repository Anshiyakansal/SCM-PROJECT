const quizzes = {
  geography: [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which continent is the Sahara Desert located in?",
      options: ["Asia", "Africa", "Europe", "South America"],
      answer: "Africa",
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Ganges"],
      answer: "Nile",
    },
    {
      question: "Which country is the Great Barrier Reef located in?",
      options: ["USA", "Australia", "South Africa", "India"],
      answer: "Australia",
    },
    {
      question: "Mount Everest is located in which country?",
      options: ["China", "Nepal", "India", "Pakistan"],
      answer: "Nepal",
    },
  ],
  maths: [
    {
      question: "What is the value of Pi to two decimal places?",
      options: ["3.12", "3.14", "3.16", "3.18"],
      answer: "3.14",
    },
    {
      question: "What is 12 x 12?",
      options: ["144", "132", "124", "116"],
      answer: "144",
    },
    {
      question: "What is the square root of 144?",
      options: ["12", "14", "16", "10"],
      answer: "12",
    },
    {
      question: "What is 25 + 30?",
      options: ["50", "55", "60", "45"],
      answer: "55",
    },
    {
      question: "What is 50 / 5?",
      options: ["10", "15", "5", "25"],
      answer: "10",
    },
  ],
  physics: [
    {
      question: "What is the speed of light?",
      options: ["300,000 km/s", "150,000 km/s", "250,000 km/s", "200,000 km/s"],
      answer: "300,000 km/s",
    },
    {
      question: "Who discovered gravity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      answer: "Isaac Newton",
    },
    {
      question: "What is the unit of force?",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      answer: "Newton",
    },
    {
      question: "Which particle has a positive charge?",
      options: ["Proton", "Neutron", "Electron", "Photon"],
      answer: "Proton",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "H2"],
      answer: "H2O",
    },
  ],
};

let currentQuiz = "geography"; // Default quiz is geography
let currentQuestion = 0;
let score = 0;
let quizData = quizzes[currentQuiz];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreText = document.getElementById("scoreText");
const moreQuizzesEl = document.getElementById("moreQuizzes");

function loadQuiz(name) {
  currentQuiz = name;
  quizData = quizzes[currentQuiz];
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add("hidden");
  moreQuizzesEl.classList.add("hidden");
  questionEl.style.display = "";
  optionsEl.style.display = "";
  loadQuestion();
}

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => handleAnswer(opt);
    optionsEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function handleAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) score++;

  Array.from(optionsEl.children).forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.style.backgroundColor = "#c8e6c9";
    else if (btn.textContent === selected) btn.style.backgroundColor = "#ffcdd2";
  });

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.classList.remove("hidden");
  moreQuizzesEl.classList.remove("hidden");
  scoreText.textContent = `You scored ${score} out of ${quizData.length}!`;
}

function restartQuiz() {
  loadQuiz(currentQuiz);
}

loadQuiz(currentQuiz);

scoreText.textContent = `You scored ${score} out of ${quizData.length}!`;
