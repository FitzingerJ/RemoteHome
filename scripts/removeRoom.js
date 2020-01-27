//Remove Room
function removeRoom(divID){
  document.getElementById(divID).remove();
  if(localStorage.getItem(""+divID) != null){
    localStorage.removeItem(""+divID);
    localStorage.setItem("roomCount", localStorage.getItem("roomCount") - 1);
  }
}
