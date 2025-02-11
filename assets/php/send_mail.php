<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "karol.polak.work@gmail.com";
    $subject = "Nowa wiadomość z formularza kontaktowego";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    $body = "Imię: $name\nEmail: $email\n\nWiadomość:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Wiadomość wysłana!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Błąd podczas wysyłania wiadomości.'); window.history.back();</script>";
    }
}
?>
