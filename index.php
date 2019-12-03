<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>RemoteHome</title>
    <link href="styles/style.css" type="text/css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans&display=swap" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="57x57" href="images/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="images/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="images/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="images/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="images/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
    <link rel="manifest" href="images/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="images/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <script src="scripts/loading.js" type="text/javascript"></script>
    <script src="scripts/newRoom.js" type="text/javascript"></script>
  </head>
  <body>
    <div id="load_screen"><div id="loading">loading document</div></div>
    <div id="header">
      <h1>RemoteHome<h1>
    </div>
    <div class="content">

      <div id="addRoom" onclick="newRoom()">+</div>
    </div>
    <div class="newRoom" onclick="hideBox()">
        <div id="newRoomBox">
          <h1>New Room</h1>
          <form id="newRoomForm" autocomplete="off">
            <input id="roomNameInput" onkeypress="return tableInputKeyPress(event)" type="text" name="roomName" autofocus placeholder="Room Name"><br>
            <input id="createButton" type="button" onclick="createRoom()" value="Create">
          </form>
        </div>
    </div>
    <?php
    $req = $_POST["req"];
    $datei = fopen("rooms.csv", "r");

    if ($req === 'dataRequest') {
      $file = fopen("rooms.csv", "r") or die("Unable to open file!");
      $content = [];

      while (!feof($file)) {
        $content[] = fgets($file);
      }

      echo json_encode($content);
    }
    ?>
  </body>
</html>
