var startButton = document.querySelector("#startButton");
var settingsButton = document.querySelector("#settingsButton");
var settingsWindow = document.querySelector("#settings");
var closeSettings = document.querySelector("#closeSettings")

settingsWindow.style.display = "none"

function start() {
    console.log("Starting...")
    window.location.replace("4638187231.html")
}

function openSettings(element) {
    console.log("Opening settings...")
    element.style.display = "block"
}

function hideElement(element) {
    element.style.display = "none"
}

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
  var maxX = 100
  var maxY = 100

  if (document.getElementById(element.id + "Header")) {
    document.getElementById(element.id + "Header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";

    //console.log("currentX: " + element.style.left + " currentY: " + element.style.top)
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("settings"));

startButton.addEventListener("click", function() {
    start()
});

settingsButton.addEventListener("click", function() {
    openSettings(settingsWindow)
});

closeSettings.addEventListener("click", function() {
    hideElement(settingsWindow)
});