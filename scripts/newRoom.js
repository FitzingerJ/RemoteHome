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
      helper.innerHTML = "<a id='" + roomCount + "'><div id='" + roomCount + "' class='room'><h3 onclick='removeRoom(" + roomCount + ")' id='removeButton'>x</h3><p>" + roomName + "</p><div id='imgContainer'><img onclick='lightControl(" + roomCount + ")' id='lightIcon" + roomCount + "' src='images/LightIconOff.png'><img onclick='windowControl(" + roomCount + ")' id='windowIcon" + roomCount + "' src='images/WindowIconOpen.png'><img onclick='heaterControl(" + roomCount + ")' id='heaterIcon" + roomCount + "' src='images/HeaterIconOff.png'><img onclick='speakerControl(" + roomCount + ")' id='speakerIcon" + roomCount + "' src='images/SpeakerIconOff.png'></div></div></a>";
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


function lightControl(id){
  let lightArray = document.getElementById(`lightIcon${id}`).src.split("/");
  let light = lightArray[lightArray.length - 1];
  if(light == 'LightIconOff.png'){
    document.getElementById(`lightIcon${id}`).src = 'images/LightIconOn.png';
  } else {
    document.getElementById(`lightIcon${id}`).src = 'images/LightIconOff.png';
  }
}
function windowControl(id){
  let windowArray = document.getElementById(`windowIcon${id}`).src.split("/");
  let windowImg = windowArray[windowArray.length - 1];
  if(windowImg == 'WindowIconOpen.png'){
    document.getElementById(`windowIcon${id}`).src = 'images/WindowIconClosed.png';
  } else {
    document.getElementById(`windowIcon${id}`).src = 'images/WindowIconOpen.png';
  }
}
function heaterControl(id){
  let heaterArray = document.getElementById(`heaterIcon${id}`).src.split("/");
  let heater = heaterArray[heaterArray.length - 1];
  if(heater == 'HeaterIconOff.png'){
    document.getElementById(`heaterIcon${id}`).src = 'images/HeaterIconOn.png';
  } else {
    document.getElementById(`heaterIcon${id}`).src = 'images/HeaterIconOff.png';
  }
}
function speakerControl(id){
  let speakerArray = document.getElementById(`speakerIcon${id}`).src.split("/");
  let speaker = speakerArray[speakerArray.length - 1];
  if(speaker == "SpeakerIconOff.png"){
    document.getElementById(`speakerIcon${id}`).src = 'images/SpeakerIconOn.png';
  } else {
    document.getElementById(`speakerIcon${id}`).src = 'images/SpeakerIconOff.png';
  }
}

//Load Your Rooms
function loadRooms(roomName){
  if(roomName != ""){
      document.getElementsByClassName('newRoom')[0].style.display = "none";
      var add = document.getElementById("addRoom");
      var parent = add.parentNode;
      var helper = document.createElement('div');
      helper.innerHTML = "<a id='" + roomCount + "'><div id='" + roomCount + "' class='room'><h3 onclick='removeRoom(" + roomCount + ")' id='removeButton'>x</h3><p>" + roomName + "</p><div id='imgContainer'><img onclick='lightControl(" + roomCount + ")' id='lightIcon" + roomCount + "' src='images/LightIconOff.png'><img onclick='windowControl(" + roomCount + ")' id='windowIcon" + roomCount + "' src='images/WindowIconOpen.png'><img onclick='heaterControl(" + roomCount + ")' id='heaterIcon" + roomCount + "' src='images/HeaterIconOff.png'><img onclick='speakerControl(" + roomCount + ")' id='speakerIcon" + roomCount + "' src='images/SpeakerIconOff.png'></div></div></a>";
      roomCount++;
      while (helper.firstChild) {
      parent.insertBefore(helper.firstChild, add);
    }
  }
}
