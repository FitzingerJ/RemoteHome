if(localStorage.getItem("roomCount") > 0){
  var roomCount = localStorage.getItem("roomCount");
} else{
  var roomCount = 0;
  localStorage.setItem("roomCount", roomCount);
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
  if(roomName != "" && roomName.length < 14){
      document.getElementsByClassName('newRoom')[0].style.display = "none";
      var add = document.getElementById("addRoom");
      var parent = add.parentNode;
      var helper = document.createElement('div');
      helper.innerHTML = "<a id='" + roomCount + "'><div id='" + roomCount + "' class='room'><h3 onclick='removeRoom(" + roomCount + ")' id='removeButton'>x</h3><p>" + roomName + "</p><div id='imgContainer'><img onclick='lightControl(" + roomCount + ")' id='lightIcon" + roomCount + "' src='images/LightIconOff.png'><img onclick='windowControl(" + roomCount + ")' id='windowIcon" + roomCount + "' src='images/WindowIconOpen.png'><img onclick='heaterControl(" + roomCount + ")' id='heaterIcon" + roomCount + "' src='images/HeaterIconOff.png'><img onclick='speakerControl(" + roomCount + ")' id='speakerIcon" + roomCount + "' src='images/SpeakerIconOff.png'></div></div></a>";
      localStorage.setItem("room"+localStorage.getItem("roomCount"), sessionStorage.getItem("currentUsername")+";"+roomName);
      roomCount++;
      localStorage.setItem("roomCount", roomCount);

      myRequest = new XMLHttpRequest();
      myRequest.open("GET", "../php/login.php?username=" + username
                    + "&password=" + password);
      myRequest.onreadystatechange = checkData;
      myRequest.send(null);

      while (helper.firstChild) {
        parent.insertBefore(helper.firstChild, add);
      }
      document.getElementById("newRoomHeader").innerHTML = "New Room"
      document.getElementById("newRoomHeader").style.color = "white";
  } else if(roomName.length > 14){
    document.getElementById("newRoomHeader").innerHTML = "Name has to be < 14 Letters"
    document.getElementById("newRoomHeader").style.color = "red";
  } else if(roomName == ""){
    document.getElementById("newRoomHeader").innerHTML = "Name has to be at least 1 Letter"
    document.getElementById("newRoomHeader").style.color = "red";
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
    document.getElementById(`lightIcon${id}`).style.border = "1px solid orange";
  } else {
    document.getElementById(`lightIcon${id}`).src = 'images/LightIconOff.png';
    document.getElementById(`lightIcon${id}`).style.border = "1px solid black";
  }
}
function windowControl(id){
  let windowArray = document.getElementById(`windowIcon${id}`).src.split("/");
  let windowImg = windowArray[windowArray.length - 1];
  if(windowImg == 'WindowIconOpen.png'){
    document.getElementById(`windowIcon${id}`).src = 'images/WindowIconClosed.png';
    document.getElementById(`windowIcon${id}`).style.border = "1px solid orange";
  } else {
    document.getElementById(`windowIcon${id}`).src = 'images/WindowIconOpen.png';
    document.getElementById(`windowIcon${id}`).style.border = "1px solid black";
  }
}
function heaterControl(id){
  let heaterArray = document.getElementById(`heaterIcon${id}`).src.split("/");
  let heater = heaterArray[heaterArray.length - 1];
  if(heater == 'HeaterIconOff.png'){
    document.getElementById(`heaterIcon${id}`).src = 'images/HeaterIconOn.png';
    document.getElementById(`heaterIcon${id}`).style.border = "1px solid orange";
  } else {
    document.getElementById(`heaterIcon${id}`).src = 'images/HeaterIconOff.png';
    document.getElementById(`heaterIcon${id}`).style.border = "1px solid black";
  }
}
function speakerControl(id){
  let speakerArray = document.getElementById(`speakerIcon${id}`).src.split("/");
  let speaker = speakerArray[speakerArray.length - 1];
  if(speaker == "SpeakerIconOff.png"){
    document.getElementById(`speakerIcon${id}`).src = 'images/SpeakerIconOn.png';
    document.getElementById(`speakerIcon${id}`).style.border = "1px solid orange";
  } else {
    document.getElementById(`speakerIcon${id}`).src = 'images/SpeakerIconOff.png';
    document.getElementById(`speakerIcon${id}`).style.border = "1px solid black";
  }
}

//Load Your Rooms
function loadRooms(){
  let roomCountAll = localStorage.getItem("roomCount");
  for (var i = 0; i <= roomCountAll; i++) {
    let roomSplit = localStorage.getItem(`room${i}`).split(";");
    if(roomSplit[0] == sessionStorage.getItem("currentUsername")){
      document.getElementsByClassName('newRoom')[0].style.display = "none";
      var add = document.getElementById("addRoom");
      var parent = add.parentNode;
      var helper = document.createElement('div');
      helper.innerHTML = "<a id='" + roomCount + "'><div id='" + roomCount + "' class='room'><h3 onclick='removeRoom(" + roomCount + ")' id='removeButton'>x</h3><p>" + roomSplit[1] + "</p><div id='imgContainer'><img onclick='lightControl(" + roomCount + ")' id='lightIcon" + roomCount + "' src='images/LightIconOff.png'><img onclick='windowControl(" + roomCount + ")' id='windowIcon" + roomCount + "' src='images/WindowIconOpen.png'><img onclick='heaterControl(" + roomCount + ")' id='heaterIcon" + roomCount + "' src='images/HeaterIconOff.png'><img onclick='speakerControl(" + roomCount + ")' id='speakerIcon" + roomCount + "' src='images/SpeakerIconOff.png'></div></div></a>";
      roomCount++;
      while (helper.firstChild) {
        parent.insertBefore(helper.firstChild, add);
      }
    }
  }
}
