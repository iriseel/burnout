//MOUSE COUNTDOWN TIMER

//POINTER JS
//makes timer fontsize enlarge
var encroaching = setInterval(function() {
    //https://stackoverflow.com/questions/10507296/get-line-height-of-element-without-px
    //parsefloat gets rid of the px at end of retrieved font-size
    var size = parseFloat($("#timer").css("font-size")),
        new_size = size + 0.1;
    
//    console.log("font size is" + new_size);
    
    $("#timer").css({
        "font-size": new_size + 'px'
    });
    
}, 100);

//makes .pointer follow mouse cursor (illusion of being the mouse)
$(document).mousemove(function(e) {
     $('.pointer').css({left:e.pageX,top:e.pageY});

});



//TIMER JS
var timer = document.getElementById("timer"),
    minutes_left = 5,
    //need to define rounded values at first or else they show up as "undefined"
    minutes_left_rounded = 5,
    seconds_left = 300,
    seconds_left_rounded = 300,
    milliseconds_left = 300000,
    milliseconds_left_rounded = 300000,
    
    //countdown_interval value can't be too small, or else the function ends up running and updating faster than the browser can actually register / make the corresponding changes, so the countdown lags as a result
    countdown_interval = 5;

var milliseconds_timer = setInterval(function(){
    
  if(milliseconds_left_rounded <= 0){
    clearInterval(milliseconds_timer);
      
      //!! CALLS ABOUT PAGE!!
      window.location.href = "about.html";
  }
    
    milliseconds_left -= countdown_interval;
    
    //Use Math.floor instead of Math.round bc .round will round it up or down, while .floor is always down, so more consistent
    milliseconds_left_rounded = Math.floor(milliseconds_left);
    
    seconds_left -= countdown_interval / 1000;
    
    seconds_left_rounded = Math.floor(seconds_left);
      
    minutes_left -= countdown_interval / 60000;
    
    minutes_left_rounded = Math.floor(minutes_left);
    
    
    if (click == true) {
        timer.innerHTML = minutes_left_rounded + "m " + seconds_left_rounded + "s " + milliseconds_left_rounded + "ms <br /> left to click";
    }
    else if (mouse == true) {
        timer.innerHTML = minutes_left_rounded + "m " + seconds_left_rounded + "s " + milliseconds_left_rounded + "ms <br /> left to move mouse";
    }
    else if (scroll == true) {
        timer.innerHTML = minutes_left_rounded + "m " + seconds_left_rounded + "s " + milliseconds_left_rounded + "ms <br /> left to scroll";
    }
    else if (type == true) {
        timer.innerHTML = minutes_left_rounded + "m " + seconds_left_rounded + "s " + milliseconds_left_rounded + "ms <br /> left to type";
    }
    
}, countdown_interval);






//  document.getElementById("timer").innerHTML = days + "deadlines " + hours + "holding on " + minutes + "making believe " + seconds + "suffering ";
    
