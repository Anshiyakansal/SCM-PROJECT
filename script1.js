const quizzes = {
    general: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Indian", "Pacific", "Atlantic", "Arctic"],
        answer: "Pacific",
      },
      {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Elephant", "Lion", "Tiger", "Giraffe"],
        answer: "Lion",
      },
      {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Europe", "South America"],
        answer: "Africa",
      },
    ],
    science: [
      {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
        answer: "Carbon Dioxide",
      },
      {
        question: "What is H2O commonly known as?",
        options: ["Salt", "Water", "Hydrogen", "Oxygen"],
        answer: "Water",
      },
      {
        question: "How many bones are in the human body?",
        options: ["206", "210", "195", "220"],
        answer: "206",
      },
      {
        question: "What planet is closest to the sun?",
        options: ["Venus", "Mars", "Mercury", "Earth"],
        answer: "Mercury",
      },
      {
        question: "What part of the cell contains DNA?",
        options: ["Cytoplasm", "Membrane", "Nucleus", "Ribosome"],
        answer: "Nucleus",
      },
    ],
    history: [
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
        answer: "George Washington",
      },
      {
        question: "In which year did World War II end?",
        options: ["1945", "1939", "1950", "1942"],
        answer: "1945",
      },
      {
        question: "What ancient civilization built the pyramids?",
        options: ["Romans", "Greeks", "Egyptians", "Mayans"],
        answer: "Egyptians",
      },
      {
        question: "The Great Wall of China was built to protect from which group?",
        options: ["Mongols", "Romans", "Vikings", "Samurai"],
        answer: "Mongols",
      },
      {
        question: "Who discovered America?",
        options: ["Christopher Columbus", "Marco Polo", "Amerigo Vespucci", "Leif Erikson"],
        answer: "Christopher Columbus",
      },
    ],
  };
  
  let currentQuiz = 'general';
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
