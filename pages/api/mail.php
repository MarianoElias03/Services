<?php

$name = $_POST["name"];
$email = $_POST["mail"];
$message = $_POST["message"];
$subject = "you've got mail";

$mailheader = "From: ".$name."<".$email."> \r\n";

$recipient = "mariolovo76@hotmail.com";


mail($recipient, $subject, $message, $mailheader)
or die("Error!");

echo'Thank you!';
?>