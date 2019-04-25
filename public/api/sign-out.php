<?php

session_start();

unset($_SESSION['user']);

$output = [
    'success' => true
];

print json_encode($output);




?>