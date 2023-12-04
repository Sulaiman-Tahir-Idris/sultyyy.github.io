<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "sulaymanti01@gmail.com";
    $subject = "New Form Submission from $name";
    $headers = "From: $email";

    // Create the email body
    $email_body = "Name: $name\n\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $email_body, $headers);
}
?>
