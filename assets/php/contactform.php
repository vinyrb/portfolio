<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mobilenumber = $_POST['mobilenumber'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "vinyrbe@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n"$message;

    mail($mailTo, $subject, $txt, $mobilenumber, $headers);
    header("Location: index.html?mailsend");
}


?>