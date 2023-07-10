// Quiz questions and answers
const quizData = [
    {
      question: "What does HTML stand for?",
      answers: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "None of the above"
      ],
      correctAnswer: 0
    },
    {
      question: "What does CSS stand for?",
      answers: [
        "Cascading Style Sheet",
        "Creative Style Sheet",
        "Computer Style Sheet",
        "None of the above"
      ],
      correctAnswer: 0
    },
    // Add more questions here...
  ];
  
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");
  
  // Generate quiz questions
  function generateQuiz() {
    let output = "";
    quizData.forEach((questionData, questionIndex) => {
      const { question, answers } = questionData;
      output += `<div class="question">${question}</div>`;
      answers.forEach((answer, answerIndex) => {
        output += `
          <div class="answers">
            <label>
              <input type="radio" name="question${questionIndex}" value="${answerIndex}">
              ${answer}
            </label>
          </div>
        `;
      });
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
  
  generateQuiz();
  submitButton.addEventListener("click", submitQuiz);
  