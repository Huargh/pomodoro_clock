$('button').click(function() {
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
  } else if (currentClick === "play") {
    $("#playtime").html(currTime);
  }
});

// // Set the date we're counting down to
// var countDownDate = new Date();
// countDownDate = countDownDate.setMinutes(countDownDate.getMinutes() + 30);
//
// // Update the count down every 1 second
// var x = setInterval(function() {
//
//   // Get todays date and time
//   var now = new Date().getTime();
//
//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;
//
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
//
//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
