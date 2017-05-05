$( document ).ready($("#timeType").html("Work"));

$('.settime').click(function() {
  var currentClick = ""
  if (($(this).parent().parent().attr("class")).indexOf("work") !== -1) {
    var currTime = parseInt($('#worktime').text().trim());
    currentClick = "work";
  } else if (($(this).parent().parent().attr("class")).indexOf("play") !== -1) {
    var currTime = parseInt($('#playtime').text().trim());
    currentClick = "play"
  }
  // alert($(this).parent().parent().attr("class"));


  if ($(this).attr("class").indexOf("minus") !== -1) {
    currTime--;
  } else if ($(this).attr("class").indexOf("plus") !== -1) {
    currTime++;
  };
  if (currTime < 0) {
    currTime = 59;
  } else if (currTime > 59) {
    currTime = 0;
  }

  // Update current timer field
  if (currentClick === "work") {
    $("#worktime").html(currTime);
    $("#time").html(currTime + ":00");
  } else if (currentClick === "play") {
    $("#playtime").html(currTime);
  }
});

var timerRunning = false;

$('#time').click(function() {
  var display;
  if (timerRunning) {
    
  } else { //timer is stopped
    timerRunning = true;
    var duration = parseInt($('#time').text().substring(0, 2)) * 60 + parseInt($('#time').text().substring(3, 5));
    display = document.querySelector('#time');
    startTimer(duration, display);
  }
});

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}
