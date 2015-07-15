window.addEventListener("deviceorientation", handleOrientation, true);

var alphaInRadians = false;
var betaInRadians = false;

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;//0 - 360
  var beta     = event.beta; //0 (stright down) - 180 (straight up)
  var gamma    = event.gamma;//
  alphaInRadians = 3.1415926535*(alpha/(180));
  betaInRadians = 3.1415926535*(beta/180);

  document.getElementById("absolute").innerHTML = absolute;
  document.getElementById("alpha").innerHTML = alpha;
  document.getElementById("beta").innerHTML = beta;
  document.getElementById("gamma").innerHTML = gamma;
  document.getElementById("alphaInRadians").innerHTML = alphaInRadians;
  // Do stuff with the new orientation data
}
