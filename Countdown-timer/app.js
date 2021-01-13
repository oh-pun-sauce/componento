
// Set the date and time as required
var countDownDate = new Date("December 31 2021 23:59").getTime();


// Update the count down every 1 second
var x = setInterval(function() {


  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  // Display the result in the HTML file
  document.getElementById("day").innerText = days;
  document.getElementById("hr").innerText = hours;
  document.getElementById("min").innerText = minutes;
  document.getElementById("sec").innerText = seconds;


}, 1000);
