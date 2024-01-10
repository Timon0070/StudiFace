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
  
  function bildWechseln() {
    // Wähle ein zufälliges Student:in-Objekt aus
    var student = zufaellig(studenten);
    // Ersetze das Bild in dem img-Element
    //var img = document.getElementById("bild");
   // img.src = student.bild;
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

