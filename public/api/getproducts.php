<?php

    //phpinfo();
    //file_get_contents('./data/getproducts.json');  //this does not show any data
    //readfile('./data/getproducts.json');
    // include     include_once     require

    require_once('config.php');
    require_once('functions.php');
    set_exception_handler('handleError');

    require_once('mysqlconnect.php');

    $query = "SELECT p.`id`, p.`name`, p.`price`, i.`url` as image
      FROM `products` AS p
      JOIN `images` AS i
          ON p.`id` = i.`product_id`
      ORDER BY p.`id`
    ";

    /* procedural */
    $result = mysqli_query($conn, $query);

    if(!$result){
        throw new Exception('invalid query: '. mysqli_error($conn));
    }

    $data = [];

    while($row = mysqli_fetch_assoc($result)){
        $currentID = $row['id'];
        $currentID = intval($currentID);
        $image = $row['image'];
        if( isset($data[$currentID])) {
            //$data[$row[`id`]][`images`][] = [$row[`images`]];
            $data[$currentID]['image'][] = $image;
        } else {
            //initialize new array of image in $row
            unset($row['image']);
            $row['image'] = [];
            $row['image'][] = $image;
            $row['price'] = intval($row['price']);
            //$data[$row[`id`]][`images`] = [$row[`images`]];
            $data[$currentID] = $row;
        }
    }

    $pureData=[];
    foreach($data as $value){
        $pureData[]=$value;
    }


    $output = [
        'success'=>true,
        'products'=> $pureData
    ];

    //php JSON stringify
    $json_output = json_encode($output);

    print($json_output);

?>
