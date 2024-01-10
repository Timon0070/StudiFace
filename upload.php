<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if name is set
    if (isset($_POST["name"])) {
        $name = $_POST["name"];
        // Do something with $name
    }

    // Check if file was uploaded without errors
    if (isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
        $allowed = ["jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png"];
        $filename = $_FILES["image"]["name"];
        $filetype = $_FILES["image"]["type"];
        $filesize = $_FILES["image"]["size"];

        // Verify file extension
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        if (!array_key_exists($ext, $allowed)) die("Fehler: Wähle das richtige Dateiformat.");

        // Verify file size - 5MB maximum
        $maxsize = 5 * 1024 * 1024;
        if ($filesize > $maxsize) die("Fehler: Deine Datei ist zu groß.");

        // Verify MYME type of the file
        if (in_array($filetype, $allowed)) {
            // Define the upload directory
            $upload_dir = "C:\Users\schneiti\Desktop\Fallstudie - StudiFace\StudiFace\img";
        
            // Check whether file exists before uploading it
            if (file_exists($upload_dir . $filename)) {
                echo $filename . " existiert bereits.";
            } else {
                move_uploaded_file($_FILES["image"]["tmp_name"], $upload_dir . $filename);
                echo "Deine Datei wurde erfolgreich hochgeladen.";
            } 
        }
        } else {
            echo "Fehler: Es gab einen Fehler beim Hochladen, versuch es nochmal."; 
        }
    } else {
        echo "Fehler: " . $_FILES["image"]["error"];
    }
}


?>