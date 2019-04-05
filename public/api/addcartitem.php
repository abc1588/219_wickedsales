<?php

require_once('config.php');
require_once('functions.php');
set_exception_handler('handleError');
require_once('mysqlconnect.php');

$product_id = 1;
$product_quantity = 1;

$query = "SELECT `price` FROM `products` WHERE `id` = `product_id`;

/*procedural*/
$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception('invalid query: '. mysqli_error($conn));
}

if(mysqli_num_rows(!$result) === 0){
    throw new Exception('no product matches product id $product_id');
}

$product_data = mysqli_fetch_assoc($result);

$product_price = (int)$product_data['price'];

$product_total =


if (empty($cart_id)){
    $cart_create_query = "INSERT INT 
}

    
?>