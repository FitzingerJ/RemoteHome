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

if ((isset($_POST["submit"])) && !empty($_POST["submit"])) {
    $_username = $conn->real_escape_string($_POST["username"]);
    $_password = $conn->real_escape_string($_POST["password"]);

    $_password = "saver" . $_password;
    $_sql = "SELECT * FROM user WHERE Name='$_username' AND Password=md5('$_password')";

    if ($_res = $conn->query($_sql)) {
        if($_res->num_rows > 0){
          echo "Success";
        }
    } else {
        include("../pages/login.html");
        exit;
    }
} else {
    include("../pages/login.html");
}

$conn->close();
