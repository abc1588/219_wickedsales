<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$product_quantity = 1;

if(!empty($_GET['quantity'])){
	$product_quantity = $_GET['quantity'];
}

if (empty($_GET['product_id'])){
	throw new Exception('You must select a product');
}

$product_id = intval($_GET['product_id']);
$cart_quantity = $product_quantity;
$user_id = 1;

$query = "SELECT `price` FROM `products` WHERE id = $product_id";
$result = mysqli_query($conn, $query);

if(!$result){
	throw new Exception(mysqli_error($conn));
}
if( mysqli_num_rows($result) === 0){
	throw new Exception("no product matches product id $product_id");
}

$product_data = mysqli_fetch_assoc($result);
$product_price = (int)$product_data['price'];
$product_total = $product_price * $product_quantity;

if(empty($_SESSION['cart_id'])){
	$cart_create_query = "INSERT INTO `carts` SET 
		`item_count` = $product_quantity,
		`total_price` = $product_total,
		`created` = NOW(),
		`users_id` = $user_id,
		`changed` = NOW()
	";
//	print($cart_create_query);
	$cart_result = mysqli_query($conn, $cart_create_query);
	if (!$cart_result){
		throw new Exception(mysqli_error($conn));
	}

	if(mysqli_affected_rows($conn) === 0){
		throw new Exception('data was not added to cart table');
	}

	$cart_id = mysqli_insert_id($conn);
	$_SESSION['cart_id']=$cart_id;
} else {
		$cart_id = $_SESSION['cart_id'];

		$update_cart_query = "UPDATE `carts` SET 
		`item_count` = `item_count` + $product_quantity,
		`total_price` = `total_price` + $product_total 
		WHERE `id` = $cart_id";

//		print($update_cart_query);

	$update_result = mysqli_query($conn, $update_cart_query);

	if(!$update_result){
		throw new Exception (mysqli_error($conn));
	}
	if(mysqli_affected_rows($conn) === 0){
		throw new Exception('Cart data was not updated');
	}
}

	$cart_item_query = "INSERT INTO `cart_items` SET 
		`products_id` = $product_id,
		`quantity` = $product_quantity,
		`carts_id` = $cart_id
		ON DUPLICATE KEY UPDATE
		`quantity` = `quantity` + $product_quantity 
	";
	//print($cart_item_query);

	$cart_item_result = mysqli_query($conn, $cart_item_query);
	if (!$cart_item_result){
		throw new Exception(mysqli_error($conn));
	}

	if(mysqli_affected_rows($conn) === 0){
		throw new Exception('failed to insert into cart items');
	}

	$output = [
		'success'=>true,
		'cartCount'=>$cart_quantity,
		'cartTotal'=>$product_total,
	];

	print (json_encode($output));

?>















