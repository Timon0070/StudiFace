// window.studenten = [
//     {name: "Bart", bild: "bart.png"},
//     {name: "Homer", bild: "homer.png"},
//     {name: "Maggie", bild: "maggie.png"},
//     {name: "Marge", bild: "marge.png"},
//     {name: "Lisa", bild: "lisa.png"},
//   ];

//  window.zufaellig = function(array) {
//     var index = Math.floor(Math.random() * array.length);
//     return array[index];
//   }

// lädt 4 zufällige studenten
function loadRandomized(){
    var remaining = [...studenten]; // kopiere das Array in ein neues Array
    html = "";
    // pick random number from 0-3 for the correct answer
    var correct = Math.floor(Math.random() * 4);

    // get one random student in each iteration
    for (let i = 0; i < 4; i++) {
        curr = zufaellig(remaining);
        remaining.splice(remaining.indexOf(curr), 1); // entfernt den auserwählten Studenten aus dem Array
        if (i == correct) {
            ret = `
            <div class="question">
            <p>Wie sieht ${curr.name} aus?</p>
            </div>
            <div class="images">`

            html += `<div class="image">
            <img src="img/${curr.bild}" alt="${curr.name}" data-answer="correct"> 
         </div>`;
        }
        else {
            html += `<div class="image">
            <img src="img/${curr.bild}" alt="${curr.name}" data-answer="false"> 
         </div>`;
        }
    }

    ret = ret + html + `</div>`;

    return ret;
}

window.onload = function() {
// Hier kannst du den JavaScript-Code für die Logik deines Quiz schreiben
// Zuerst holst du dir die Referenzen zu den HTML-Elementen, die du brauchst
    const images = document.querySelectorAll(".image img"); // Alle Bilder
    // images[0].src = "img/lisa.png";
    // images[1].src = "img/homer.png";
    // images[2].src = "img/maggie.png";
    // images[3].src = "img/bart.png";
    const feedback = document.querySelector(".feedback"); // Das Feedback-Element
    const feedbackText = document.querySelector(".feedback p"); // Der Text im Feedback-Element
    const next = document.querySelector(".next"); // Das Next-Element
    const nextButton = document.querySelector(".next button"); // Der Button im Next-Element

    // Dann definierst du eine Funktion, die aufgerufen wird, wenn ein Bild angeklickt wird
    function handleImageClick(event) {
        // Du holst dir das angeklickte Bild und seine Antwort
        const image = event.target;
        const answer = image.dataset.answer;

        // Du überprüfst, ob die Antwort richtig oder falsch ist
        if (answer === "correct") {
            // Wenn die Antwort richtig ist, änderst du den Rand des Bildes zu grün
            image.classList.add("correct");
            // Du zeigst das Feedback-Element mit einer positiven Nachricht an
            feedback.classList.add("correct");
            feedbackText.textContent = "Richtig!";
            feedback.style.display = "block";
        } else {
            // Wenn die Antwort falsch ist, änderst du den Rand des Bildes zu rot
            image.classList.add("wrong");
            // Du zeigst das Feedback-Element mit einer negativen Nachricht an
            feedback.classList.add("wrong");
            feedbackText.textContent = "Falsch!";
            feedback.style.display = "block";
        }

    
        // Du deaktivierst die Klickbarkeit aller Bilder, damit der Benutzer nicht mehrmals klicken kann
    // images.forEach(image => {
    //     image.style.pointerEvents = "none";
    // });

        // Du zeigst das Next-Element an, damit der Benutzer zum nächsten Quiz weitergehen kann
        next.style.display = "block";
    }

    // Dann fügst du einen Event-Listener für jedes Bild hinzu, der die Funktion aufruft, wenn das Bild angeklickt wird
    images.forEach(image => {
        image.addEventListener("click", handleImageClick);
    });

    function resetQuiz() {
    location.reload();
    window.scrollTo(0,0);
        // Verstecke alle Bilder, Feedback und Next-Elemente
    // images.forEach(image => {
    //     image.style.display = "none";
    // });
    // feedback.style.display = "none";
    // next.style.display = "none";

    // // Entferne die Klassen der Bilder
    // images.forEach(image => {
    //     image.classList.remove("correct");
    //     image.classList.remove("wrong");
    // });
    }
    // Dann definierst du eine Funktion, die aufgerufen wird, wenn der Next-Button angeklickt wird
    function handleNextClick(event) {
        resetQuiz();
    }

    // Dann fügst du einen Event-Listener für den Next-Button hinzu, der die Funktion aufruft, wenn der Button angeklickt wird
    nextButton.addEventListener("click", handleNextClick);
}