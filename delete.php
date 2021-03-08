<?php

include("connection.php");

$id = $_POST['uid'];

$del = "UPDATE ajax SET status = '0' where id = '$id' ";

$result = mysqli_query($conn, $del);
if ($result) {
    echo "user delete";
}
