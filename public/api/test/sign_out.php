<?php
session_start();

unset($_SESSION['user']);  //redundant

session_destroy();

print(json_encode(['success' => true]));

?>