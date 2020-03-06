<?php 
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_mail'];
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail -> CharSet = 'UTF-8';
$mail -> Encoding = 'base64';
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = "musica.mailer@gmail.com";
$mail->Password = "Ovegin67";
$mail->SetFrom("wo.tank2015@gmail.com");
$mail->Subject = "Оставлена заявка";
$mail->Body = '
	<h4> Пользователь оставил свои данные: </h4><br> 
	<h5>Имя:</h5> ' . $name . ' <br>
	<h5>Почта:</h5> ' . $email . ' <br>
	<h5>Телефон:</h5> ' . $phone . '';
$mail->AddAddress("wo.tank2015@gmail.com");
if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message has been sent";
}
header ('location: ../index.html');
?>