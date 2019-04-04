//getproductdetails.php

<?php

require_once('functions.php');

set_exception_handler('handleError');

require_once('mysqlconnect.php');

$query = "SELECT p.id, p.name, p.price, p.`misc_details` as `miscDetails`, 
     GROUP_CONCAT(i.url) as `images`
      FROM `products` AS p
      JOIN `images` AS i
          ON p.`id` = i.`products_id`
      WHERE p.`id` = 3
      GROUP BY p.id
    ";

$result = mysqli_query($conn, $query);

if (!$result){
    throw new Exception( mysqli_error($conn));
}

if ((mysqli_num_rows($result)) === 0){
    throw new Exception( 'no data available for product id');
}

$data = mysqli_fetch_assoc($result);

$output = [
    'success'=>true,
    'products'=> $data
];

//php JSON stringify
$json_output = json_encode($output);

print($json_output);

?>
