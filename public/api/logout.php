<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false,
];

//=============================================================
//  check if token exists - if yes, delete from database
//=============================================================
if(empty($_SESSION['user_data']['token'])) {
    $output['success'] = true;
    $output['message'] = 'User was not logged in';
} else {
    $token = $_SESSION['user_data']['token'];
    $output['username'] = $_SESSION['user_data']['name'];
    $output['token'] = $token;
    //=============================================================
    //  delete token record from database
    //=============================================================
    $delete_query = "DELETE FROM `user_connections` WHERE `token` = '$token'";
    $delete_result = mysqli_query($conn, $delete_query);
    if (!$delete_result) {
        throw new Exception(mysqli_error($conn));
    }
    if (mysqli_affected_rows($conn) !== 1) {
        throw new Exception('unable to delete - token not deleted');
    }
    $output['success'] = true;
}
//=============================================================
//  clear user session
//=============================================================
    unset($_SESSION['user_data']);

//    session_destroy();
//    echo '<h1>Session Cleared</h1>'

    $json_output = json_encode($output);
    print($json_output);

?>