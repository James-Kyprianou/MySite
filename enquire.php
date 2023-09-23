<?php
// Check for form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Get the form data and sanitize it
  $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $subject = filter_var(trim($_POST["subject"]), FILTER_SANITIZE_STRING);
  $message = strip_tags(trim($_POST["message"]));

  // Check that all required fields are filled out
  if (empty($name) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Please fill out all fields and provide a valid email address.";
    exit;
  }

  // Set the email recipient and subject line
  $recipient = "jameskyprianou@gmail.com";
  $subjectLine = "New message from $name: $subject";

  // Build the email message
  $emailMessage = "$name\n\n";
  $emailMessage .= "$message\n\n";
  $emailMessage .= "From: $email\n";

  // Set the email headers
  $headers = "From: $name <$email>";

  // Send the email
  if (mail($recipient, $subjectLine, $emailMessage, $headers)) {
    http_response_code(200);

    header("Location: http://jameskyprianou.000webhostapp.com/Contact.html");
    exit();

  } else {
    http_response_code(500);
    echo "Oops! Something went wrong and we couldn't send your message.";
  }

} else {
  http_response_code(403);
  echo "There was a problem with your submission. Please try again.";
}
?>