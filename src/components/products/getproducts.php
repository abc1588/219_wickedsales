//getproducts.php

<?php

//phpinfo();

//file_get_contents('./data/getproducts.json');  //this does not show any data
//readfile('./data/getproducts.json');

// include     include_once     require
require_once('mysqlconnect.php');

// query stmt: SELECT * FROM `products`
//$query = 'SELECT * FROM `products`';

$query = "SELECT p.id, p.name, p.price, i.url as image
      FROM `products` AS p
      JOIN `images` AS i
          ON p.`id` = i.`products_id`
      ORDER BY p.id
    ";

$result = mysqli_query($conn, $query);

$data = [];

while($row = mysqli_fetch_assoc($result)){
    $data[] = $row;
}

$output = [
    'success'=>true,
    'products'=> $data
];

//php JSON stringify
$json_output = json_encode($output);

print($json_output);

?>
