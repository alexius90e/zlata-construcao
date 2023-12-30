<?php
  if (! empty($_POST["send"])) {
      $name = $_POST["name"];
      $phone = $_POST["phone"];
      $email = $_POST["email"];
      $subject = $_POST["subject"];
      $message = $_POST["message"];

      $toEmail = "zlataconstrucao@gmail.com";

      $mailHeaders = "From: " . $email . "<" . $name . ">\r\n";
      if (mail($toEmail, $name, $phone, $email, $subject, $message, $mailHeaders)) {
          $message = "Your contact information is received successfully.";
          $type = "success";
      }

  }
?>