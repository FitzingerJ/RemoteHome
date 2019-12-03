window.addEventListener("load", () => {



  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "./index.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("req=dataRequest");
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(xhttp.responseText));


      }
    }
});

function newRoom(){
  let element = document.getElementsByClassName('newRoom')[0];
  element.setAttribute('style', 'display:flex !important');
}
function createRoom(){
  let roomName = document.getElementById('roomNameInput').value;
  document.getElementById('roomNameInput').value = "";
  if(roomName != ""){
    document.getElementsByClassName('newRoom')[0].style.display = "none";
    var add = document.getElementById("addRoom");
    var parent = add.parentNode;
    var helper = document.createElement('div');
    helper.innerHTML = "<a><div class='room'><p>" + roomName + "</p></div></a>";
    while (helper.firstChild) {
    parent.insertBefore(helper.firstChild, add);
}
  }
}
function hideBox(){
  var target = event.target || event.srcElement;

  if (event.currentTarget == target) {
    document.getElementsByClassName('newRoom')[0].style.display = "none";
  }
}
