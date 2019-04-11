<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

$json_input = file_get_contents("php://input");

$input = json_decode($json_input, true);  //true-convert all objects to associative arrays, as opposed to standard class object

if(empty($input['email'])){
    throw new Exception('email is a required value');
}
if(empty($input['password'])){
    throw new Exception('password is a required value');
}
$email = $input['email'];
$password = $input['password'];

//if(empty($_POST['email'])){
//    throw new Exception('email is a required value');
//}
//if(empty($_POST['password'])){
//    throw new Exception('password is a required value');
//}
//$email = $_POST['email'];
//$password = $_POST['password'];

$hashedPassword = sha1($password);

unset($_POST['password']);

$query = "SELECT `id`, `name` FROM `users`
    WHERE `email` = '$email' and `password` = '$hashedPassword'
";

$result = mysqli_query($conn, $query);  //$result is the reference to the mysqli result object, return false if query did not succeed

if (!$result){
    throw new Exception(mysqli_error($conn));
}
if (mysqli_num_rows($result) !== 1){
    throw new Exception('invalid username or password');
}

$data = mysqli_fetch_assoc($result);

$token = $email . $data['id'] . microtime();
$token = sha1($token);

$connect_query = "INSERT INTO `user_connections` SET 
    `token` = '$token',
    `users_id` = {$data['id']},
    `created` = NOW(),
    `ip_address` = '{$_SERVER['REMOTE_ADDR']}',            
";

$connect_result = mysqli_query($conn, $connect_query);
if (!$connect_result){
    throw new Exception(mysqli_error($conn));
}
if (mysqli_affected_rows($conn) !== 1){         //num_rows==>result object, affected_rows==>connection object
    throw new Exception('unable to login: connection not saved');
}

$_SESSION['user_data'] = [
    'id'=>$data['id'],
    'username'=>$data['name'],
    'token'=>$token
];

$output['success'] = true;
$output['username'] = $data['name'];
$output['token'] = $token;

$json_output = json_encode($output);

print($json_output);

?>