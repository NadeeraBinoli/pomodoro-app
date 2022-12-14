var focusSessionSeconds = document.getElementById("focus_seconds");
var focusSessionMinutes =   document.getElementById("focus_minutes");
var shortBreakSessionSeconds = document.getElementById("short_break_seconds");
var shortBreakSessionMinutes = document.getElementById("short_break_minutes");
var longBreakSessionSeconds = document.getElementById("long_break_seconds");
var longBreakSessionMinutes = document.getElementById("long_break_minutes");

const progressBar = document.querySelector(".progress-bar") // progress - bar

const messageDiv = document.querySelector(".message")
const closeButton = document.querySelector(".close-button");

var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

function stopInterval(){
  clearInterval(startTimer);
}

var startTimer;

// onload function
function template() {
  focusSessionSeconds.innerText = "00";
  focusSessionMinutes.innerText = 25;
  shortBreakSessionSeconds.innerText = "00";
  shortBreakSessionMinutes.innerText = 5;
  longBreakSessionSeconds.innerText = "00";
  longBreakSessionMinutes.innerText = 15;
 }
 
// start button
start.addEventListener('click', function(){
  var sound1 = new Audio('sounds/sound-1.mp3');
  sound1.play();
  if(startTimer === undefined){
      startTimer = setInterval(timer, 1000)
  } else {
      alert("Timer is already running");
  }
})

// reset button
reset.addEventListener('click', function(){
  var sound1 = new Audio('sounds/sound-1.mp3');
  sound1.play();

})

// stop button
stop.addEventListener('click', function(){
  var sound1 = new Audio('sounds/sound-1.mp3');
  sound1.play();
  stopInterval()
  startTimer = undefined;
})

function timer(){
  //Focus Countdown
  if(focusSessionSeconds.innerText != 0){
      focusSessionSeconds.innerText--;
  } else if(focusSessionMinutes.innerText != 0 && focusSessionSeconds.innerText == 0){
      focusSessionSeconds.innerText = 59;
      focusSessionMinutes.innerText--;
      progressBar.style.width = focusSessionMinutes.innerText*4 + "%"; // progress - bar
  }
  
  //Short Break Timer Countdown
  if(focusSessionMinutes.innerText == 0 && focusSessionSeconds.innerText == 0 && document.getElementById("pomoNumber").innerText<=2){
      if(shortBreakSessionSeconds.innerText != 0){
          shortBreakSessionSeconds.innerText--;
      } else if(shortBreakSessionMinutes.innerText != 0 && shortBreakSessionSeconds.innerText == 0){
          shortBreakSessionSeconds.innerText = 59;
          shortBreakSessionMinutes.innerText--;
      }
  }

  //Increment Counter by one if one full cycle is completed
  if(focusSessionMinutes.innerText == 0 && focusSessionSeconds.innerText == 0 && shortBreakSessionMinutes.innerText == 0 && shortBreakSessionSeconds.innerText == 0 && document.getElementById("pomoNumber").innerText < 3){
      focusSessionMinutes.innerText = 25;
      focusSessionSeconds.innerText = "00";

      shortBreakSessionMinutes.innerText = 5;
      shortBreakSessionSeconds.innerText = "00";

      document.getElementById("pomoNumber").innerText++;
  }
  
 //long Break Timer Countdown
  if (document.getElementById("pomoNumber").innerText == 3 && focusSessionMinutes.innerText == 0 && focusSessionSeconds.innerText == 0 ) {
      shortBreakSessionMinutes.innerText = 0;
      shortBreakSessionSeconds.innerText = 0;
    if(longBreakSessionSeconds.innerText != 0){
      longBreakSessionSeconds.innerText--;
  } else if(longBreakSessionMinutes.innerText != 0 && longBreakSessionSeconds.innerText == 0){
      longBreakSessionSeconds.innerText = 59;
      longBreakSessionMinutes.innerText--;
      
  }
  if(longBreakSessionMinutes.innerText == 0 && longBreakSessionSeconds.innerText == 0 && document.getElementById("pomoNumber").innerText < 4){
    var sound2 = new Audio('sounds/sound-2.mp3');
    sound2.play();
    document.getElementById("pomoNumber").innerText++;
  }  
  }
  if (document.getElementById("pomoNumber").innerText == 4) {
      messageDiv.setAttribute("data-visible", true);  
  }
}

function  closeButtonFunction() {
  messageDiv.setAttribute("display-visible" , false);
}
 
