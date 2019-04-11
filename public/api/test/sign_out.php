<?php
session_start();

unset($_SESSION['user']);  //redundant, if you want to use session_destroy

session_destroy();

print(json_encode(['success' => true]));

?>