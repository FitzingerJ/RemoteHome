<?php
$_db_host = "localhost";
$_db_database = "remotehome";
$_db_username = "web";
$_db_password = "web";

session_start();

$conn = new mysqli($_db_host, $_db_username, $_db_password, $_db_database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_GET["username"];
$password = $_GET["password"];

$stmt = $conn->prepare("SELECT * FROM `user` WHERE `user_name` = ? AND `user_password` = md5(?)");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();

$result = $stmt->get_result();

if(mysqli_stmt_num_rows($stmt) > 0){
  echo "true";
} else {
  echo "false";
}
/*
if ($_res = $stmt->get_result()) {
    if ($_res->num_rows > 0) {



    } else {

    }
}
*/

$conn->close();

?>
