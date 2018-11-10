var preguntasIncluidas = [];

(function() {
    
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
    
    function construirQuiz() {
      const output = [];
      for(questionNumber=0; questionNumber<10; questionNumber++){
        const answers = []
        let preguntaAleatoria = obtenerPreguntaAleatoria();
        for(letter in myQuestions[preguntaAleatoria].answers){
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${formatearNomenclatura(myQuestions[preguntaAleatoria].answers[letter])}
             </label>`
          );
        }
        output.push(
          `<div class="slide">
              <div class="question"> ${formatearNomenclatura(myQuestions[preguntaAleatoria].question)} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
        );
      }
      quizContainer.innerHTML = output.join("");
    }

    function obtenerPreguntaAleatoria() {
      let preguntaAleatoria = Math.trunc(Math.random() * myQuestions.length-1);
      while(preguntasIncluidas.indexOf(preguntaAleatoria) != -1){
        preguntaAleatoria = Math.trunc(Math.random() * myQuestions.length-1);
      }
      preguntasIncluidas.push(preguntaAleatoria);
      return preguntaAleatoria;
    }

    function mostrarResultados(){
      const answerContainers = quizContainer.querySelectorAll(".answers");
      let numCorrect = 0;
      for(currentQuestion = 0; currentQuestion < preguntasIncluidas.length; currentQuestion++){
        
        const answerContainer = answerContainers[currentQuestion];
        const selector = `input[name=question${currentQuestion}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        if (userAnswer === myQuestions[currentQuestion].correctAnswer) {
          numCorrect++;
          answerContainers[currentQuestion].style.color = "lightgreen";
        } else {
          answerContainers[currentQuestion].style.color = "red";
        }
      }
      resultsContainer.innerHTML = `Preguntas respondidas correctamente: ${numCorrect} de ${preguntasIncluidas.length}`;
      alert("¡Gracias por participar! Podes ver tus resultados en la parte inferior, y recorrer las preguntas para ver tus aciertos (en verde), y errores (en rojo).");
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
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
    //buildQuiz();
    construirQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    //submitButton.addEventListener("click", showResults);
    submitButton.addEventListener("click", mostrarResultados);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();