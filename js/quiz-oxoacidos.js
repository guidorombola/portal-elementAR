

(function() {
    const myQuestions = [
      {
        question: "La fórmula del tetraoxosulfato (VI) de hidrógeno es: ",
        answers: {
          a: "H2SO3",
          b: "HS04",
          c: "H2SO4",
          d: "HS03"
        },
        correctAnswer: "c"
      },
      {
        question: "El H3PO3 puede denominarse: ",
        answers: {
          a: "Trioxofosfato (V) de hidrógeno",
          b: "Trioxofosfato (III) de hidrógeno",
          c: "Dioxofosfato (III) de hidrógeno",
          d: "Tetraoxofosfato (III) de hidrógeno"
        },
        correctAnswer: "b"
      },
      {
        question: "La fórmula del ácido perbrómico es: ",
        answers: {
          a: "HBrO3",
          b: "HBrO",
          c: "HBrO2",
          d: "HBrO4"
        },
        correctAnswer: "d"
      },
      {
        question: "El ácido sulfuroso también puede denominarse: ",
        answers: {
          a: "Ácido tetraoxosufúrico (IV)",
          b: "Ácido trioxosufúrico (IV)",
          c: "Ácido tetraoxosufúrico (VI)",
          d: "Ácido trioxosufúrico (VI)"
        },
        correctAnswer: "b"
      },
      {
        question: "El ácido dioxobórico (III) es el: ",
        answers: {
          a: "H3BO3",
          b: "HBO3",
          c: "HBO2",
          d: "H2BO2"
        },
        correctAnswer: "c"
      },
      {
        question: "El H3TeO4 es el: ",
        answers: {
          a: "Tetraoxotelurato (VI) de trihidrógeno",
          b: "Tetraoxotelurato (IV) de hidrógeno",
          c: "Tetraoxotelurato (VI) de hidrógeno",
          d: "Tetraoxotelurato (IV) de trihidrógeno"
        },
        correctAnswer: "c"
      },
      {
        question: "El tetraoxomanganato (VII) de hidrógeno es el: ",
        answers: {
          a: "H2MnO4",
          b: "HMnO4",
          c: "H3MnO3",
          d: "HMnO2"
        },
        correctAnswer: "b"
      },
      {
        question: "El H2Cr2O7 es el: ",
        answers: {
          a: "Heptaoxodicromato (V) de hidrógeno",
          b: "Heptaoxodicromato (VII) de hidrógeno",
          c: "Heptaoxodicromato (IV) de hidrógeno",
          d: "Heptaoxodicromato (VI) de hidrógeno"
        },
        correctAnswer: "d"
      },
      {
        question: "El tetraoxoantimoniato(V) de hidrógeno es el: ",
        answers: {
          a: "H3SbO4",
          b: "H2SbO4",
          c: "HSbO4",
          d: "H3SbO4"
        },
        correctAnswer: "a"
      },
      {
        question: "La fórmula del dioxofosfato (III) de hidrógeno es: ",
        answers: {
          a: "H2PO2",
          b: "HPO2",
          c: "HPO3",
          d: "H3PO2"
        },
        correctAnswer: "b"
      },
      {
        question: "El H4SiO 4 es el: ",
        answers: {
          a: "Óxido triaúrico",
          b: "Ácido Óxido dedioro",
          c: "Ácido silícico (IV)",
          d: "Ácido tetraoxosilícico(IV)"
        },
        correctAnswer: "d"
      },
      {
        question: "La fórmula del trióxido de dioxonitrato (III) de hidrógeno es: ",
        answers: {
          a: "HN03",
          b: "HN02",
          c: "H2N02",
          d: "H3N03"
        },
        correctAnswer: "b"
      },
      {
        question: "El ácido arsenico es el: ",
        answers: {
          a: "H2AsO3",
          b: "HAsO3",
          c: "H3AsO4",
          d: "H2AsO4"
        },
        correctAnswer: "c"
      },
      {
        question: "El ácido yódico también puede nombrarse como: ",
        answers: {
          a: "Tetraoxoyodato (VII) de hidrógeno",
          b: "Ácido tetraoxoyódico (V)",
          c: "Trioxoyodato (V) de hidrógeno",
          d: "Trioxoyodato (VII) de hidrógeno"
        },
        correctAnswer: "c"
      },
      {
        question: "El trioxocarbonato (IV) de hidrógeno es el: ",
        answers: {
          a: "HC03",
          b: "H3C03",
          c: "H4C03",
          d: "H2C03"
        },
        correctAnswer: "d"
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
        question: "El H3PO4 es el: ",
        answers: {
          a: "Ácido fosforoso",
          b: "Ácido perfosfórico",
          c: "Ácido fosfórico",
          d: "Ácido hipofosfórico"
        },
        correctAnswer: "c"
      },
      {
        question: "¿De qué manera puede denominarse al H2SeO4?",
        answers: {
          a: "Ácido tetraoxoselenico (VI)",
          b: "Ácido tetraoxoselenico (IV)",
          c: "Tetraoxoseleniato (VI) de dihidrógeno",
          d: "Ácido selenioso"
        },
        correctAnswer: "a"
      },
      {
        question: "El ácido trioxoarsénico (III) es el: ",
        answers: {
          a: "H3AsO3",
          b: "HAsO3",
          c: "H2AsO3",
          d: "H4AsO4"
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
        question: "El dioxoclorato (III) de hidrógeno es el: ",
        answers: {
          a: "HClO3",
          b: "HClO2",
          c: "HClO",
          d: "HClO4"
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
  
  
    
    