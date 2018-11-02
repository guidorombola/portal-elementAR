

(function() {
    const myQuestions = [
      {
        question: "El Ni(OH)2 puede denominarse: ",
        answers: {
          a: "Hidróxido de níquel (III)",
          b: "Hidróxido niquélico",
          c: "Hidróxido de níquel (II)",
          d: "Hidróxido de níquel"
        },
        correctAnswer: "c"
      },
      {
        question: "La fórmula del trihidróxido de hierro es: ",
        answers: {
          a: "Fe(OH)3",
          b: "Fe3(OH)3",
          c: "Fe3(OH)",
          d: "Fe2(OH)3"
        },
        correctAnswer: "a"
      },
      {
        question: "Otra forma de nombrar al hidróxido cobaltoso es:",
        answers: {
          a: "Hidróxido de cobalto (III)",
          b: "Hidróxido de cobalto (II)",
          c: "Hidróxido de tricobalto",
          d: "Hidróxido de cobalto"
        },
        correctAnswer: "b"
      },
      {
        question: "El ácido hidróxido cuproso es el: ",
        answers: {
          a: "Cu(OH)3",
          b: "Cu2(OH)",
          c: "Cu(OH)2",
          d: "CuOH"
        },
        correctAnswer: "d"
      },
      {
        question: "Otra forma de nombrar al hidróxido de wolframio (VI) es:",
        answers: {
          a: "Hidróxido wolframioso",
          b: "Hexahidróxido de wolframio ",
          c: "Hidróxido de wolframio",
          d: "Hidróxido de hexawolframio"
        },
        correctAnswer: "b"
      },
      {
        question: "El trihidróxido de praseodimio es el: ",
        answers: {
          a: "Pr(OH)3",
          b: "Pr3(OH)",
          c: "Pr3(OH)3",
          d: "Pr2(OH)3"
        },
        correctAnswer: "c"
      },
      {
        question: "Otra forma de nombrar al hidróxido hipocirconioso es",
        answers: {
          a: "Hidróxido de circonio (II)",
          b: "Hidróxido de circonio (IV)",
          c: "Hidróxido de circonio (III)",
          d: "Hidróxido de circonio"
        },
        correctAnswer: "a"
      },
      {
        question: "El hidróxido pervanádico es el: ",
        answers: {
          a: "V(OH)4",
          b: "V(OH)3",
          c: "V(OH)2",
          d: "V(OH)5"
        },
        correctAnswer: "d"
      },
      {
        question: "El Be(OH)2 puede denominarse: ",
        answers: {
          a: "Hidróxido de berilio (II)",
          b: "Hidróxido de berilio",
          c: "Hidróxido de berilioso",
          d: "Hidróxido de berilico"
        },
        correctAnswer: "b"
      },
      {
        question: "El tetrahidróxido de estaño también puede denominarse: ",
        answers: {
          a: "Hidróxido de estaño (II)",
          b: "Hidróxido de estaño (IV)",
          c: "Hidróxido de estaño ",
          d: "Hidróxido de estannoso"
        },
        correctAnswer: "b"
      },
      {
        question: "El Mg(OH)2 puede denominarse: ",
        answers: {
          a: "Hidróxido magnésico",
          b: "Hidróxido magnesioso",
          c: "Hidróxido de magnesio (I)",
          d: "Hidróxido de dimagnesio"
        },
        correctAnswer: "a"
      },
      {
        question: "El hidróxido de platino (IV) es el: ",
        answers: {
          a: "Pt(OH)2",
          b: "Pt(OH)3",
          c: "Pt(OH)4",
          d: "Pt(OH)5"
        },
        correctAnswer: "c"
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
  
  
    
    