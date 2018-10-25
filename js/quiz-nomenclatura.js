

(function() {
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
        h: "La d y c son verdaderas"
      },
      correctAnswer: "f"
    },
    {
      question: "El Cl2O7 es el:",
      answers: {
        a: "Óxido hipocloroso",
        b: "Óxido clórico",
        c: "Óxido perclórico",
        d: "Óxido cloroso"
      },
      correctAnswer: "c"
    },
    {
      question: "¿Cuál es la fórmula del óxido de fósforo (V)?",
      answers: {
        a: "PO5",
        b: "P2O5",
        c: "P3O5",
        d: "P5O2",
        e: "P5O"
      },
      correctAnswer: "b"
    },
    {
      question: "El Ni2O3 es el:",
      answers: {
        a: "Monóxido de diniquel",
        b: "El trióxido de níquel",
        c: "Óxido de níquel",
        d: "Trióxido de diniquel"
      },
      correctAnswer: "d"
    },
    {
      question: "La fórmula del pentóxido de diyodo es: ",
      answers: {
        a: "I2O5",
        b: "I5O2",
        c: "I5O",
        d: "IO5"
      },
      correctAnswer: "a"
    },
    {
      question: "El Br2O3 es el:",
      answers: {
        a: "Óxido hipobromoso",
        b: "Óxido brómico",
        c: "Óxido perbrómico",
        d: "Óxido bromoso"
      },
      correctAnswer: "d"
    },
    {
      question: "La fórmula del trióxido de dialuminio es:",
      answers: {
        a: "Al2O3",
        b: "Al3O2",
        c: "AlO3",
        d: "Al3O"
      },
      correctAnswer: "a"
    },
    {
      question: "El Au2O3 es:",
      answers: {
        a: "Óxido triaúrico",
        b: "Óxido de dioro",
        c: "Trióxido de oro",
        d: "Trióxido dioro"
      },
      correctAnswer: "d"
    },
    {
      question: "La fórmula del trióxido de dimanganeso es:",
      answers: {
        a: "Mn2O3",
        b: "MnO2",
        c: "Mn2O",
        d: "Mn3O"
      },
      correctAnswer: "a"
    },
    {
      question: "El óxido estannoso también se puede denominar:",
      answers: {
        a: "Óxido de estaño (IV)",
        b: "Óxido de estaño (II)",
        c: "Dióxido de estaño",
        d: "Óxido de diestaño"
      },
      correctAnswer: "b"
    },
    {
      question: "El óxido de dimercurio también se puede denominar:",
      answers: {
        a: "Óxido de mercurio (II)",
        b: "Óxido mercúrico",
        c: "Óxido de mercurio (I)",
        d: "Dióxido de dimercurio"
      },
      correctAnswer: "c"
    },
    {
      question: "El óxido hipocloroso también se puede denominar:",
      answers: {
        a: "Trióxido de dicloro",
        b: "Óxido de cloro (I)",
        c: "Pentóxido de dicloro",
        d: "Trióxido de dicloro"
      },
      correctAnswer: "b"
    },
    {
      question: "El óxido de selenio (VI) también se puede denominar:",
      answers: {
        a: "Dióxido de selenio",
        b: "Monóxido de selenio",
        c: "Óxido de selenio",
        d: "Trióxido de selenio" 
      },
      correctAnswer: "d"
    },
    {
      question: "El monóxido de dinitrógeno también se puede denominar:",
      answers: {
        a: "Óxido de nitrógeno (III)",
        b: "Óxido nítrico",
        c: "Óxido de nitrógeno (I)",
        d: "Óxido nitroso"
      },
      correctAnswer: "c"
    },
    {
      question: "¿De qué manera puede denominarse al SO3?",
      answers: {
        a: "Dióxido de azufre",
        b: "Óxido de azufre (VI)",
        c: "Óxido de azufre (IV)",
        d: "Trióxido de azufre",
        e: "a y b son correctas",
        f: "a y d son correctas",
        g: "b y d son correctas",
        h: "c y d son correctas"
      },
      correctAnswer: "g"
    },
    {
      question: "El Cr2O3 es el:",
      answers: {
        a: "Óxido de cromo (III)",
        b: "Trióxido de cromo",
        c: "Óxido de cromo (II)",
        d: "Óxido de cromo (VI)"
      },
      correctAnswer: "a"
    },
    {
      question: "El As2O5 es el:",
      answers: {
        b: "Trióxido de diarsénico",
        a: "Óxido arsenioso",
        c: "Pentóxido de arsénico",
        d: "Pentóxido de arsénico"
      },
      correctAnswer: "d"
    },
    {
      question: "El Tl2O es el:",
      answers: {
        a: "Óxido de talio (II)",
        b: "Óxido de talio (I)",
        c: "Dióxido de talio",
        d: "Óxido de talio"
      },
      correctAnswer: "b"
    },
    {
      question: "La fórmula del óxido de telurio (VI) es:",
      answers: {
        a: "Te3O2",
        b: "Te3O",
        c: "TeO3",
        d: "TeO2"
      },
      correctAnswer: "c"
    },
    {
      question: "La fórmula del trióxido de dicobalto es:",
      answers: {
        a: "Co3O2",
        b: "CoO3",
        c: "Co2O2",
        d: "Co2O3"
      },
      correctAnswer: "d"
    },
    {
      question: "El PbO2 es el:",
      answers: {
        a: "Dióxido de plomo",
        b: "Óxido de plomo (II)",
        c: "Óxido plumboso",
        d: "Dióxido de diplomo"
      },
      correctAnswer: "a"
    },
    {
      question: "La fórmula del óxido cuproso es:",
      answers: {
        a: "CuO3",
        b: "Cu2O",
        c: "CuO",
        d: "CuO2"
      },
      correctAnswer: "b"
    },
    {
      question: "El V2O3 es el:",
      answers: {
        a: "Trióxido de vanadio",
        b: "Dióxido de trivanadio",
        c: "Óxido de vanadio",
        d: "Trióxido de divanadio"
      },
      correctAnswer: "d"
    },
    {
      question: "El óxido de bismuto (V) también se puede denominar: ",
      answers: {
        a: "Pentóxido de dibismuto",
        b: "Tetróxido de dibismuto",
        c: "Óxido bismutoso",
        d: "Pentóxido de bismuto"
      },
      correctAnswer: "a"
    },
    {
      question: "El OsO2 es el:",
      answers: {
        a: "Tetróxido de osmio",
        b: "Óxido de osmio (VIII)",
        c: "Óxido de osmio (IV)",
        d: "Monóxido de diosmio"
      },
      correctAnswer: "c"
    },
    {
      question: "El Rh2O3 puede denominarse:",
      answers: {
        a: "Óxido de rodio (II)",
        b: "Dióxido de rodio",
        c: "Tióxido de rodio",
        d: "Óxido de rodio (III)"
      },
      correctAnswer: "d"
    },
    {
      question: "El heptóxido de direnio es el:",
      answers: {
        a: "ReO7",
        b: "Re2O7",
        c: "Re7O",
        d: "Re3O7"
      },
      correctAnswer: "b"
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
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
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


  
  