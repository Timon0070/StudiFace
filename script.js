// structs für statistiken
if (typeof window.quiz === 'undefined'){
  window.quiz = {
    correct: 0,
    total: 0
  }  
}

// unused
// window.vokabeltrainer = {
//   correct: 0,
//   total: 0   
// }

window.studenten = [
    {name: "Bart", bild: "bart.png"},
    {name: "Homer", bild: "homer.png"},
    {name: "Maggie", bild: "maggie.png"},
    {name: "Marge", bild: "marge.png"},
    {name: "Lisa", bild: "lisa.png"},
  ];

 window.zufaellig = function(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
  }

window.onload = function() {
  // Load data from localStorage
  getStorage()
  document.querySelector('.stats').innerHTML += loadStatistics();

  // var correctPercentage = (window.quiz.correct / window.quiz.total) * 100;
  // document.querySelector('.bar').style.width = correctPercentage + '%';

    // Check if window.quiz is defined and window.quiz.total is not 0
    if (window.quiz && window.quiz.total !== 0) {
      var correctPercentage = (window.quiz.correct / window.quiz.total) * 100;
      document.querySelector('.bar').style.width = correctPercentage + '%';
    }
  
}

// also checks existance
function getStorage() {
  if(localStorage.getItem('quiz')) {
    window.quiz = JSON.parse(localStorage.getItem('quiz'));
  }
}

function setStorage() {
  localStorage.setItem('quiz', JSON.stringify(window.quiz));
}

function loadStatistics () {
  return `Quiz: ${quiz.correct}/${quiz.total} Antworten korrekt`;
}

  function bildWechseln() {
    var student = zufaellig(studenten);
    var img = document.getElementById("bild");
    img.src = "img/" + student.bild;
    // Speichere den Namen in dem p-Element
    var p = document.getElementById("name");
    p.textContent = student.name;
    // Verstecke das p-Element
    p.style.display = "none";
  }
  
  function goToIndex() 
  {
    window.location.href = "index.html";
  }

  function goToDatenErfassen()
  {
    window.location.href = "datenErfassen.html";
  }

  function goToVokabeltrainer()
  {
    window.location.href = "vokabeltrainer.html";
  }

  function goToQuiz()
  {
    window.location.href = "quiz.html";
  }

  function nameAnzeigen() {
    // Zeige das p-Element an
    var p = document.getElementById("name");
    p.style.display = "block";
  }
