<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Send email or perform any other desired actions with the form data

  // Redirect to a thank you page
  header("Location: thank-you.html");
  exit;
}
?>
54444