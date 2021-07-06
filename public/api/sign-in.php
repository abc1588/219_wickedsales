<?php

session_start();

$postData = json_decode(file_get_contents('php://input'), true);
//print(json_encode($postData));

$_SESSION['user'] = $postData['email'];

$output = [
    'success' => true,
    'email' => $postData['email'],
    'message' => 'Signed in'
];

print(json_encode($output));

?>