//TIMED CODA (UPWARD) COUNTDOWN CREEP

var pointer = $(".pointer"),
    timer = document.getElementById("timer");

var encroaching = setInterval(function() {
//    var height = pointer.height(),
//        new_height = height + 1,
//        window_height = $(window).height() * 2,
//        width = pointer.width(),
//        new_width = width + 1,
//        window_width = $(window).width() * 2;
//    
//    pointer.css({
//        "height": new_height + 'px',
//        "width": new_width + 'px'
//    });
//    
//    // If the screen is covered, write some text 
//    if (height >= window_height && width >= window_width) {
//        clearInterval(encroaching);
//        
////       console.log("covered!!");
//      }
    
    //https://stackoverflow.com/questions/10507296/get-line-height-of-element-without-px
    //parseInt gets rid of the px at end of retrieved font-size
    var size = parseInt($("#timer").css("font-size"), 10),
        new_size = size + 1;
    
    console.log("font size is" + new_size);
    
    $("#timer").css({
        "font-size": new_size + 'px'
    });
    
}, 1000);





$(document).mousemove(function(e) {
         $('.pointer').css({left:e.pageX,top:e.pageY});

        });



//TIMER JS
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();


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
    
  // Output the result in an element with id="timer"
//  document.getElementById("timer").innerHTML = days + "deadlines " + hours + "holding on " + minutes + "making believe " + seconds + "suffering ";
    
    timer.innerHTML = seconds + "seconds left to click";
    
    timer.innerHTML = seconds + "seconds left to move mouse";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    timer.innerHTML = "EXPIRED";
  }
}, 1000);
