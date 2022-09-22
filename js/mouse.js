//This js controls the mouse movement, linking changing of videos (opacity) with mouse speed

//function is triggered at end of click.js
function mouse_gesture() {
    
    $(".mouses").show();
    

    var opacity_is_1 = 0,
        mouse3;

    //code from https://codepen.io/zFunx/pen/WjVzWo
    var prevEvent, currentEvent;
    document.documentElement.onmousemove=function(event){
      currentEvent=event;
    }

    var maxSpeed=0,prevSpeed=0,maxPositiveAcc=0,maxNegativeAcc=0;

    setInterval(function(){
      if(prevEvent && currentEvent){
        var movementX=Math.abs(currentEvent.screenX-prevEvent.screenX);
        var movementY=Math.abs(currentEvent.screenY-prevEvent.screenY);
        var movement=Math.sqrt(movementX*movementX+movementY*movementY);

        //speed=movement/100ms= movement/0.1s= 10*movement/s
        var speed=movement/38;//current speed

    //    console.log("movement is " + movement);

          var opacity_mouse=movement/300;

    //      console.log("opacity_mouse is " + opacity_mouse);
    //    document.getElementById("speed").innerText=Math.round(speed);

      };

      prevEvent=currentEvent;
      prevSpeed=speed;

    //    console.log(speed);


    // ??? querySelectorAll doesn't work for some reason??? have to narrow down selector to just 1 element???? but moving this in here also doesn't work, the speed and mouse3.playbackRate eventually delinks anyways???
        //??right now what happens is, the video that is set from fadein to show (i think) ends up going at the speed it was set to when it was fadein — so its speed is no longer linked to the mouse??
     mouse3 = document.querySelector('.mouse3.show');

    // Loading the video after setting 
    //mouse3.load();

        $(".mouse3.fadein").css({
            "opacity": opacity_mouse
        });

        if (speed < 0.0625) {
            mouse3.playbackRate = 0;
        }
        else if (speed > 16) {
            mouse3.playbackRate = 16;
        }
        else {
            mouse3.playbackRate = speed;
        }

    //        console.log("playback rate is" + mouse3.playbackRate);


        if (opacity_mouse >= 1) {
            opacity_is_1++;
    //        console.log("opacity_is_1 is" + opacity_is_1);
        };

        if (opacity_is_1 == 1) {
            $(".mouse3[data-index='0']").addClass("hide").removeClass("show");

            $(".mouse3[data-index='1']").addClass("show").removeClass("hide fadein");

            $(".mouse3[data-index='2']").addClass("fadein");
        }
        else if (opacity_is_1 == 2) {
            $(".mouse3[data-index='1']").addClass("hide").removeClass("show");

            $(".mouse3[data-index='2']").addClass("show").removeClass("hide fadein");

            $(".mouse3[data-index='3']").addClass("fadein"); 
        }
        else if (opacity_is_1 == 3) {
            $(".mouse3[data-index='2']").addClass("hide").removeClass("show");

            $(".mouse3[data-index='3']").addClass("show").removeClass("hide fadein");

            $(".mouse3[data-index='4']").addClass("fadein"); 
        }
        else if (opacity_is_1 == 4) {
            $(".mouse3[data-index='3']").addClass("hide").removeClass("show");

            $(".mouse3[data-index='4']").addClass("show").removeClass("hide fadein");

            $(".mouse3[data-index='0']").addClass("fadein"); 
        }
        else if (opacity_is_1 == 5) {

            opacity_is_1 = 0;
            
            //!! CALLS SCROLL GESTURE!!
            $(".mouses").hide(scroll_gesture);

            console.log("CYCLED THROUGH MOUSES!!");
        }
        else {
    //             console.log("this shouldn't be happening ... or should it?");
                 }

    },200);
    
}
