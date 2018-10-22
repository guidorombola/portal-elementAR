(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${formatearNomenclatura(currentQuestion.answers[letter])}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${formatearNomenclatura(currentQuestion.question)} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }

    function formatearNomenclatura(entrada){
      let aux = "";
      for(let i=0; i<entrada.length; i++){
        if(i!=0 && entrada[i].match("[0-9]") && entrada[i-1].match("[A-z]")){
          aux += entrada[i].sub();
        } else {
          aux += entrada[i];
        }
      }
      return aux;
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "La fórmula del óxido de nitrógeno (V) es:",
        answers: {
          a: "N5O",
          b: "N2O5",
          c: "N5O2",
          d: "Ninguna de las anteriores"
        },
        correctAnswer: "b"
      },
      {
        question: "La fórmula del óxido cúprico es: ",
        answers: {
          a: "CuO3",
          b: "Cu2O",
          c: "CuO2",
          d: "CuO"
        },
        correctAnswer: "d"
      },
      {
        question: "El Mn2O7 es el:",
        answers: {
          a: "Ácido permangánico",
          b: "Óxido permanganoso",
          c: "Óxido hipopermanganoso",
          d: "Óxido permangánico"
        },
        correctAnswer: "d"
      },
      {
        question: "El Fe2O3 puede denominarse el:",
        answers: {
          a: "Óxido ferroso",
          b: "Óxido de hierro (III)",
          c: "Óxido férrico",
          d: "Óxido de hierro (II)",
          e: "La a y d son verdaderas",
          f: "La b y c son verdaderas",
          g: "La b y a son verdaderas",
          h: "La d y c son verdaderas",
        },
        correctAnswer: "f"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
  
  