let roomCount = 1;

//Start the onload functions
function start(){
  getAJAX();
}

//AJAX Read CSV
let myRequest;
let roomName;

function getAJAX(){
  myRequest = new XMLHttpRequest();
  myRequest.open("GET", "php/index.php");
  myRequest.onreadystatechange = checkData;
  myRequest.send(null);
}
function checkData(){
  if (myRequest.readyState == 4 && myRequest.status == 200) {
      let line = myRequest.responseText.split(';');
      for(i = 0; i < line.length; i++){
        loadRooms(line[i]);
      }
      loadStorage();
  }
}

//Load Rooms from Localstorage
function loadStorage(){
  let roomCount = localStorage.getItem("roomCount");
  for (var i = 1 + 4; i <= roomCount; i++) {
    loadRooms(localStorage.getItem(""+i));
  }
  roomCount = 1;
}


//Add Room Button
function newRoom(){
  let element = document.getElementsByClassName('newRoom')[0];
  element.setAttribute('style', 'display:flex !important');
  document.getElementById('roomNameInput').focus();
}

//Create New Room
function createRoom(){
  roomName = document.getElementById('roomNameInput').value;
  document.getElementById('roomNameInput').value = "";
  if(roomName != ""){
      document.getElementsByClassName('newRoom')[0].style.display = "none";
      var add = document.getElementById("addRoom");
      var parent = add.parentNode;
      var helper = document.createElement('div');
      helper.innerHTML = "<a id='" + roomCount + "'><div id='" + roomCount + "' class='room'><h3 onclick='removeRoom(" + roomCount + ")' id='removeButton'>x</h3><p>" + roomName + "</p></div></a>";
      localStorage.setItem("roomCount", roomCount);
      localStorage.setItem(""+roomCount, roomName);
      roomCount++;
      while (helper.firstChild) {
      parent.insertBefore(helper.firstChild, add);
    }
  }
}

//Create Room on ENTER
function tableInputKeyPress(e){
  e=e||window.event;
  var key = e.keyCode;
  if(key==13)
  {
     createRoom();
     return false;
  }
}

//Hide Create Room Box
function hideBox(){
  var target = event.target || event.srcElement;

  if (event.currentTarget == target) {
    document.getElementsByClassName('newRoom')[0].style.display = "none";
  }
}

//Load Your Rooms
function loadRooms(roomName){
  if(roomName != ""){
      document.getElementsByClassName('newRoom')[0].style.display = "none";
      var add = document.getElementById("addRoom");
      var parent = add.parentNode;
      var helper = document.createElement('div');
      helper.innerHTML = "<a id='" + roomCount + "'><div id='" + roomCount + "' class='room'><h3 onclick='removeRoom(" + roomCount + ")' id='removeButton'>x</h3><p>" + roomName + "</p></div></a>";
      roomCount++;
      while (helper.firstChild) {
      parent.insertBefore(helper.firstChild, add);
    }
  }
}
