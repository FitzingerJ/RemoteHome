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

error_reporting(E_ALL ^ E_NOTICE);
$roomName = $_GET["username"];

$stmt = $conn->prepare("INSERT INTO room (room_name, light, window, heater, speaker) VALUES ('$roomName', '0', '0', '0', '0')");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();

$result = $stmt->get_result();
while ($row = $result->fetch_array(MYSQLI_NUM)) {
    foreach ($row as $r){
        print "$r;";
    }
}

if ($_res = $stmt->get_result()) {
    if ($_res->num_rows > 0) {

        print "true";

    } else {
        echo "false";
    }
}

$conn->close();

?>
