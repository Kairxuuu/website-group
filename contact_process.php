<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs du formulaire
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['textarea']);

    // Destinataire
    $to = 'klsyalex495@gmail.com';
    // Sujet de l'e-mail
    $subject = 'Nouveau message de contact';
    // Corps de l'e-mail
    $body = "E-mail: $email\n\nMessage:\n$message";
    // En-têtes de l'e-mail
    $headers = "From: $email";

    // Envoi de l'e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Échec de l'envoi du message.";
    }
}
// fiveserver.config.js
module.exports = {
        php: "/Applications/MAMP/bin/php/php{version}/bin/php" // Remplacez {version} par votre version PHP
      }
?>