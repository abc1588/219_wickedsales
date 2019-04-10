<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');


$output = [
  'success' => false
];

//if(empty($_SESSION['cart_id'])){
//    throw new Exception('Missing cart id');
//}

$cart_id = $_SESSION['cart_id'];

    $cart_item_query = "
    SELECT c1.`id` AS `carts_id`, c1.`created`, c1.`total_price`, 
    c2.`carts_id`, c2.`id`, c2.`name`, c2.`price`, c2.`image`, c2.`quantity`
    FROM `carts` c1,
    (SELECT c.`carts_id`, p.`id`, p.`name`, p.`price`, i.`url` as `image`, c.`quantity`
     FROM `cart_items` as c, 
          `products` as p,
          `images` as i
     WHERE c.`products_id` = p.`id`
       AND c.`products_id` = i.`products_id`) c2
     WHERE c1.`id` = $cart_id 
       AND c1.`id` = c2.`carts_id`   
    ";
    //print($cart_item_query);

$cart_data = mysqli_query($conn, $cart_item_query);

if(!$cart_data){
    throw new Exception('invalid query: '. mysqli_error($conn));
}
if( mysqli_num_rows($cart_data) === 0){
    throw new Exception("Unable to retrieve cart data");
}

$output['cartItems'] = [];
$output['cartMetaData'] = [];


$data = [];

while($row = mysqli_fetch_assoc($cart_data)){

    $output['cartItems'][] = [
        'name' => $row['name'],
        'price' => $row['price'],
        'image' => $row['image'],
        'quantity' => $row['quantity'],
        'id' => $row['id'],
    ];

    //$output['cartMetaData']['created'] = date('M jS, Y', strtotime($row['created']));
    $output['cartMetaData']['created'] = $row['created'];
    $output['cartMetaData']['total_price'] = (int)$row['total_price'];

    }

    $output['success'] = true;

//print_r($row);

$json_output = json_encode( $output );

print( $json_output );


?>
