<?php
include("connection.php");


$query = "SELECT * FROM ajax where email != '' AND status = '1'";

$sql = mysqli_query($conn, $query);

$json = array();

while ($data = mysqli_fetch_assoc($sql)) {
    $json[] = $data;
}
$record["userdata"] = $json;

echo json_encode($record);
