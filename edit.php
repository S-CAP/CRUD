<?php
include("connection.php");
$id =$_POST['nid'];
$name =$_POST['Name'];
$number =$_POST['phone'];
$email =$_POST['emailid'];

$update = "UPDATE ajax SET name = '$name', email ='$email' , phone = '$number' WHERE id ='$id' " ;

$sql = mysqli_query($conn, $update);

if($sql){
    echo "user edited";
}
else{
    echo "not eddited";
}
?>