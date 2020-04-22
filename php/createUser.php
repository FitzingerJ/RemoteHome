<?php
$_db_host = "localhost";
$_db_database = "remotehome";
$_db_username = "web";
$_db_password = "web";

session_start();

$conn = new mysqli($_db_host,$_db_username,$_db_password,$_db_database);
if ($conn->connect_error){
    die("Connection failed, ". $conn->connect_error);
}

if (!empty($_POST['submit'])) {
    $_username = $conn->real_escape_string($_POST['username']);
    $_password = $conn->real_escape_string($_POST['password']);

    if (strcmp($_password, $conn->real_escape_string($_POST['password_2'])) != 0) {
        include("../pages/createUser.html");
        exit;
    }

    $_password = "saver". $_password;

    $insertStatement = "INSERT INTO user (Name, Password) VALUES ('$_username', md5('$_password'))";
    if ($res = $conn->query($insertStatement)) {
        include("../pages/login.html");
    } else {
        // No insertion. User could not be added. Maybe user $_username already exists.
        include("../pages/createUser.html");
    }
} else {
    include("../pages/createUser.html");
}

$conn->close();
