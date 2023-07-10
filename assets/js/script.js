// Quiz questions and answers
const quizData = [
    {
      question: "How many counties are on the island of Ireland (altogether)?",
      answers: ["12", "22", "32", "42"],
      correctAnswer: 2
    },
    {
      question: "Who is the Taoiseach?",
      answers: ["The president", "The head of Government", "The King", "The heir to the throne"],
      correctAnswer: 1
    },
    {
      question: "What is the longest river in Ireland?",
      answers: ["River Liffey", "River Shannon", "River Bann", "River Barrow"],
      correctAnswer: 1
    },
    {
        question: "Where did Bloody Sunday take place in 1972?",
        answers: ["Cork", "Belfast", "Dublin", "Derry"],
        correctAnswer: 3
      },
   
  ];
  
  // HTML elements
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");
  
  // Generate quiz questions
  function generateQuiz() {
    let output = "";
    quizData.forEach((questionData, questionIndex) => {
      const { question, answers } = questionData;
      output += `
        <div class="question">${question}</div>
        <div class="answers">
          ${answers
            .map(
              (answer, answerIndex) => `
                <label>
                  <input type="radio" name="question${questionIndex}" value="${answerIndex}">
                  ${answer}
                </label>
              `
            )
            .join("")}
        </div>
      `;
    });
    quizContainer.innerHTML = output;
  }
  
  // Calculate quiz score
  function calculateScore() {
    let score = 0;
    quizData.forEach((questionData, questionIndex) => {
      const selectedAnswer = document.querySelector(`input[name="question${questionIndex}"]:checked`);
      if (selectedAnswer) {
        const selectedAnswerIndex = parseInt(selectedAnswer.value);
        if (selectedAnswerIndex === questionData.correctAnswer) {
          score++;
        }
      }
    });
    return score;
  }
  
  // Submit quiz and display score
  function submitQuiz() {
    const score = calculateScore();
    alert(`Your score is: ${score}/${quizData.length}`);
  }
  
  // Event listeners
  generateQuiz();
  submitButton.addEventListener("click", submitQuiz);
  