function newRoom(){
  document.getElementsByClassName('newRoom')[0].style.zIndex = "10000";
}
function createRoom(){
  let roomName = document.getElementById('roomNameInput').value;
  if(roomName != ""){
    document.getElementsByClassName('newRoom')[0].style.zIndex = "-10000";
  }
}
