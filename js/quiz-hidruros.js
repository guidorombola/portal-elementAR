

(function() {
    const myQuestions = [
      {
        question: "El NiH2 puede denominarse: ",
        answers: {
          a: "Trihidruro de níquel",
          b: "Hidruro niquélico",
          c: "Dihidruro de níquel (II)",
          d: "Hidruro de níquel"
        },
        correctAnswer: "c"
      },
      {
        question: "La fórmula del hidruro vanadioso es:",
        answers: {
          a: "VH3",
          b: "VH2",
          c: "VH4",
          d: "VH5"
        },
        correctAnswer: "a"
      },
      {
        question: "Otra forma de nombrar al hidruro cobaltoso es: ",
        answers: {
          a: "Hidruro de cobalto ",
          b: "Hidruro de cobalto (II)",
          c: "Trihidruro de cobalto",
          d: "Hidruro de dicobalto"
        },
        correctAnswer: "b"
      },
      {
        question: "La arsina cuya fórmula es AsH3 también puede llamarse: ",
        answers: {
          a: "Hidruro de arsénico",
          b: "Hidruro de triarsénico",
          c: "Hidruro arsénico",
          d: "Trihidruro de arsénico"
        },
        correctAnswer: "d"
      },
      {
        question: "Otra forma de nombrar al ácido bromhídrico es: ",
        answers: {
          a: "Bromuro (I) de hidrógeno",
          b: "Bromuro de hidrógeno",
          c: "Bromuro de hidrógeno (I)",
          d: "Bromuro de monohidrógeno"
        },
        correctAnswer: "b"
      },
      {
        question: "El trihidruro de níquel es el: ",
        answers: {
          a: "NiH3",
          b: "NiH",
          c: "Ni3H3",
          d: "Ni3H"
        },
        correctAnswer: "a"
      },
      {
        question: "El hidruro hipotitanioso es el: ",
        answers: {
          a: "TiH2",
          b: "VH4",
          c: "V3H",
          d: "VH3"
        },
        correctAnswer: "a"
      },
      {
        question: "La hidracina, cuya fórmula es N2H4 también puede llamarse: ",
        answers: {
          a: "Hidruro de dinitrógeno",
          b: "Tetrahidruro de nitrógeno",
          c: "Hidruro de nitrógeno",
          d: "Tetrahidruro de dinitrógeno"
        },
        correctAnswer: "d"
      },
      {
        question: "El P2H4 puede denominarse: ",
        answers: {
          a: "Hidruro de fósforo (II)",
          b: "Tetrahidruro de difósforo",
          c: "Tetrahidruro de fósforo",
          d: "Hidruro de difósforo"
        },
        correctAnswer: "b"
      },
      {
        question: "La disilano cuya fórmula es Si2H6 también puede llamarse: ",
        answers: {
          a: "Hexahidruro de silicio",
          b: "Hexahidruro de disilicio",
          c: "Hidruro silicico",
          d: "Trihidruro de arsénico"
        },
        correctAnswer: "d"
      }
  
    ];
      
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
          `<div class="slide not-active-slide">
             <div class="question"> ${formatearNomenclatura(currentQuestion.question)} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
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
      resultsContainer.innerHTML = `Preguntas respondidas correctamente: ${numCorrect} de ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[currentSlide].classList.remove("not-active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
  
    
    