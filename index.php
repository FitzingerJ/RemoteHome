<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>RemoteHome</title>
    <link href="styles/style.css" type="text/css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans&display=swap" rel="stylesheet">
    <script src="scripts/loading.js" type="text/javascript"></script>
    <script src="scripts/newRoom.js" type="text/javascript"></script>
  </head>
  <body>
    <div id="load_screen"><div id="loading">loading document</div></div>
    <div id="header">
      <h1>RemoteHome<h1>
    </div>
    <div class="content">
      <a href="pages/wohnzimmer.php"><div class="room"><p>Wohnzimmer</p></div></a>
      <a href="pages/kueche.php"><div class="room"><p>Küche</p></div></a>
      <a href="pages/bad.php"><div class="room"><p>Bad</p></div></a>
      <a href="pages/mein_zimmer.php"><div class="room"><p>Mein Zimmer</p></div></a>
      <div id="addRoom" onclick="newRoom()">+</div>
    </div>
    <div class="newRoom">
        <div id="newRoomBox">
          <h1>New Room</h1>
          <form autocomplete="off">
            <input type="text" name="roomName" autofocus placeholder="Room Name"><br>
            <input id="createButton" type="button" onclick="roomName()" value="Create">
        </div>
    </div>
  </body>
</html>
