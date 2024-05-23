<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$subject = $data['subject'];
$message = $data['message'];

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

$to = 'your-email@example.com'; // Replace with your email address
$headers = "From: $name <$email>" . "\r\n" .
           "Reply-To: $email" . "\r\n" .
           "Content-Type: text/plain; charset=UTF-8";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
}
?>
