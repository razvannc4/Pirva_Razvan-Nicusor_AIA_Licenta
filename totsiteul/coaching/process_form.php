<?php

            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "contact";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$stmt = $conn->prepare("INSERT INTO contact (username, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $message);


$username = $_POST["username"];
$email = $_POST["email"];
$message = $_POST["message"];

if ($stmt->execute()) {
    echo "Thank you for contacting us! We will get back to you shortly.";
} else {
    echo "Oops! An error occurred while submitting the form.";
}


$stmt->close();
$conn->close();
?>