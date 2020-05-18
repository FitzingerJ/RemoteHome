let username = "";
let password = "";
let myRequest = new XMLHttpRequest();
function login(){
  username = document.getElementById("username_field").value;
  password = document.getElementById("password_field").value;


  myRequest.open("GET", "../php/login.php?username=" + username
                + "&password=" + password);
  myRequest.onreadystatechange = checkData;
  myRequest.send(null);
}

function checkData(){

 if (myRequest.readyState == 4 && myRequest.status == 200) {
   var split = myRequest.responseText.split(";");
   var loggedIn = split[0];
   console.log(loggedIn);
   loggedInfos = loggedIn.split(";");
   console.log(loggedInfos[0]);
 if (loggedInfos.length > 0) {
   console.log(loggedIn);
   sessionStorage.setItem("userId", split[1])
   sessionStorage.setItem("loggedIn", true);
   sessionStorage.setItem("currentUsername", username);
   window.location.assign("http://localhost/uebungen/Webprojekt/Remotehome/index.html");
   alert("Logged In successfully!");

   document.getElementById("loginText").innerHTML = sessionStorage.getItem(currentUsername);

 } else {
   alert("Username or password wrong");
   sessionStorage.setItem("loggedIn", false);
   sessionStorage.setItem("loggedUser", null);
 }

 }
}

let roomRequest = new XMLHttpRequest();
function loggedIn(){
  if(sessionStorage.getItem(loggedIn) == true){
  document.getElementById("loginText").innerHTML = sessionStorage.getItem("currentUsername");
  user_id = sessionStorage.getItem(userId);


  myRequest.open("GET", "../php/getRoom.php?user_id=" + user_id);
  myRequest.onreadystatechange = checkData2;
  myRequest.send(null);
  }
}
function checkData2(){

 if (roomRequest.readyState == 4 && roomRequest.status == 200) {
   var split = roomRequest.responseText.split(";");
   var loggedIn = split[0];
   console.log(loggedIn);
   loggedInfos = loggedIn.split(";");
   console.log(loggedInfos[0]);
 if (loggedInfos.length > 0) {
   console.log(loggedIn);
   sessionStorage.setItem("userId", split[1])
   sessionStorage.setItem("loggedIn", true);
   sessionStorage.setItem("currentUsername", username);
   window.location.assign("http://localhost/uebungen/Webprojekt/Remotehome/index.html");
   alert("Logged In successfully!");

   document.getElementById("loginText").innerHTML = sessionStorage.getItem(currentUsername);

 } else {
   alert("Username or password wrong");
   sessionStorage.setItem("loggedIn", false);
   sessionStorage.setItem("loggedUser", null);
 }

 }
}
