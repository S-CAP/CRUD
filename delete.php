<?php

include("connection.php");

$id = $_POST['uid'];

$del = "UPDATE ajax SET status = '0' where id = '$id' ";

$result = mysqli_query($conn, $del);
$json = array();
    if($result){
        $json = array('status'=>true);
    }else{
        $json = array('status'=>false);
    }

    echo json_encode($json);
    
