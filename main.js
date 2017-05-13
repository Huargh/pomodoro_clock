var timeHandler;
var timerRunning = false;

$( document ).ready($("#timeType").html("Work"));

$('.settime').click(function() {
  var currentClick = "";
  if (timerRunning) {
    clearInterval(timeHandler);
    timerRunning = false;
  }
  if (($(this).parent().parent().attr("class")).indexOf("work") !== -1) {
    var currTime = parseInt($('#worktime').text().trim());
    currentClick = "work";
  } else if (($(this).parent().parent().attr("class")).indexOf("play") !== -1) {
    var currTime = parseInt($('#playtime').text().trim());
    currentClick = "play"
  }

  if ($(this).attr("class").indexOf("minus") !== -1) {
    currTime--;
  } else if ($(this).attr("class").indexOf("plus") !== -1) {
    currTime++;
  };
  if (currTime < 0) {
    currTime = 60;
  } else if (currTime > 60) {
    currTime = 0;
  }

  // Update current timer field
  if (currentClick === "work") {
    $("#worktime").html(currTime);
    if (currTime < 10) {
      $("#time").html("0" + currTime + ":00");
    } else {
    $("#time").html(currTime + ":00");
  }
  } else if (currentClick === "play") {
    $("#playtime").html(currTime);
  }
});

$('#time').click(function() {
  var display;
  if (timerRunning) {
    clearInterval(timeHandler);
    timerRunning = false;
  } else {
    var duration = parseInt($('#time').text().substring(0, 2)) * 60 + parseInt($('#time').text().substring(3, 5));
    display = document.querySelector('#time');
    startTimer(duration, display);
    timerRunning = true;
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

        if (minutes === '00' && seconds < '00') {
          toggleTime();
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    timeHandler = setInterval(timer, 1000);
}

function toggleTime() {
  var timeType = $('#timeType').text();
  var duration;
  var display = document.querySelector('#time');
  clearInterval(timeHandler);
  if (timeType === "Work") {
    $("#timeType").html("Play");
    duration = parseInt($("#playtime").text()) * 60;

    startTimer(duration, display)
  }
  else if (timeType ==="Play") {
    $("#timeType").html("Work");
    duration = parseInt($("#worktime").text()) * 60;
    startTimer(duration, display)
  }
}
