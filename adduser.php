<?php

include("connection.php");

if ($_SERVER["REQUEST_METHOD"] == 'POST') {



    $name = $_POST['name'];
    $email = $_POST['emailid'];
    $password = $_POST['password'];
    $number = $_POST['phone'];

    $sql =  "INSERT INTO ajax(name,email,password,phone) values('$name', '$email','$password','$number')";



    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo "A NEW ENTRY IS ADDED";
    }
}
