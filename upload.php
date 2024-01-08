<?php
// Die Daten aus dem Formular abrufen
$name = $_POST["name"];
$image = $_POST["image"];

// Die Daten in einer Datenbank speichern
$conn = mysqli_connect("localhost", "username", "password", "database");
$sql = "INSERT INTO students (name, image) VALUES ('$name', '$image')";
mysqli_query($conn, $sql);

// Eine Bestätigungsnachricht anzeigen
echo "Danke, $name. Dein Bild wurde erfolgreich hochgeladen.";
?>
