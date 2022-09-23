//TIMED CODA (UPWARD) COUNTDOWN CREEP

//POINTER JS
var pointer = $(".pointer"),
    timer = document.getElementById("timer");

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


$(document).mousemove(function(e) {
     $('.pointer').css({left:e.pageX,top:e.pageY});

});



//TIMER JS

var minutes_left = 5,
    //need to define rounded values at first or else they show up as "undefined"
    minutes_left_rounded = 5,
    seconds_left = 300,
    seconds_left_rounded = 300,
    milliseconds_left = 300000,
    milliseconds_left_rounded = 300000;

var milliseconds_timer = setInterval(function(){
    
  if(milliseconds_left_rounded <= 0){
    clearInterval(milliseconds_timer);
    clearInterval(seconds_timer);
    clearInterval(minutes_timer);
      
      //!! CALLS CODA PAGE!!
      window.location.href = "about.html";
  }
    
    //??WHY IS THIS COUNTDOWN NOT LINING UP WITH SECONDS AND MINUTES????
    milliseconds_left -= 1;
    
    milliseconds_left_rounded = Math.round(milliseconds_left);
    
    
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
    
}, 1);

var seconds_timer = setInterval(function(){
    
    seconds_left -= 1;
    
    seconds_left_rounded = Math.round(seconds_left);
    
}, 1000);

var minutes_timer = setInterval(function(){
    
    minutes_left -= 1;
    
    minutes_left_rounded = Math.round(minutes_left);
    
}, 60000);







//  document.getElementById("timer").innerHTML = days + "deadlines " + hours + "holding on " + minutes + "making believe " + seconds + "suffering ";
    
