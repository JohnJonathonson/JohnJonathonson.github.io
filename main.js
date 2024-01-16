dragElement(document.getElementById("marker-red1"));
dragElement(document.getElementById("marker-red2"));
dragElement(document.getElementById("marker-red3"));
dragElement(document.getElementById("marker-red4"));
dragElement(document.getElementById("marker-red5"));
dragElement(document.getElementById("marker-blue1"));
dragElement(document.getElementById("marker-blue2"));
dragElement(document.getElementById("marker-blue3"));
dragElement(document.getElementById("marker-blue4"));
dragElement(document.getElementById("marker-blue5"));
const garrison_div = document.getElementById("garrison");
const newalden_div = document.getElementById("newalden");
const moshpit_div = document.getElementById("moshpit");
const contra_div = document.getElementById("contra");
const steedie_div = document.getElementById("steedie");
var img = document.getElementById('map_id');


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function closeDragElement() {
  // stop moving when mouse button is released:
  document.onmouseup = null;
  document.onmousemove = null;
}

placeArrow();

function placeArrow() {

  img.onmousedown= moveArrow;

}
var e;
var rect;
var lastpositiony = 0;
var lastpositionx = 0;
var x = 40;
var y = 40;

function moveArrow() {

  e = window.event;
  e.preventDefault();
  rect = e.target.getBoundingClientRect();
  document.onmouseup = closeDragElement;
  document.onmousemove = drawArrow;

}

function drawArrow() {
        console.log("Left? : " + x + " ; Top? : " + y + ".  " + lastpositionx + "  " + lastpositiony);

  e = window.event;
  e.preventDefault();

  x = e.clientX - rect.left;
  y = e.clientY - rect.top;

    if (Math.sqrt(Math.pow((x - lastpositionx),2) + Math.pow((y - lastpositiony),2) > 500)) {

      console.log("clicky clicky!");


      const dot = document.createElement("div");
      dot.innerHTML = "<img src = dot.png width = '10px' height = '10px'>";
      dot.id = "line"
      dot.style.top = y+5;
      dot.style.left = x+2;
      dot.style.position = "absolute";
      document.getElementById("lines").appendChild(dot);
      lastpositionx = x;
      lastpositiony = y;

    }




}

selectMap();

function selectMap() {

  garrison_div.addEventListener('click', function() {changeMap("garrison.jpg")})
  newalden_div.addEventListener('click', function() {changeMap("newalden.jpg")})
  moshpit_div.addEventListener('click', function() {changeMap("moshpit.jpg")})
  contra_div.addEventListener('click', function() {changeMap("contra.jpg")})
  steedie_div.addEventListener('click', function() {changeMap("steedie_moshpit.jpg")})


}

function changeMap(map) {

  img.innerHTML = "<img src='" + map + "'>";

  console.log("map change " + map);

}

document.addEventListener("keydown", function(){erase()})

function erase() {

  if (event.keyCode == 88) {
    console.log("HEYEYEYEYEYE");

    var line = document.getElementById("line");

    while (line != null) {

    line = document.getElementById("line");

    if (line !== null) {
    line.remove();
  }
}
  }

}
