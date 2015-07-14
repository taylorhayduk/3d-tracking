window.addEventListener("deviceorientation", handleOrientation, true);

var alphaInRadians = 0;

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  alphaInRadians = alpha/(Math.PI*2);

  document.getElementById("absolute").innerHTML = absolute;
  document.getElementById("alpha").innerHTML = alpha;
  document.getElementById("beta").innerHTML = beta;
  document.getElementById("gamma").innerHTML = gamma;
  document.getElementById("alphaInRadians").innerHTML = alphaInRadians;
  // Do stuff with the new orientation data
}
