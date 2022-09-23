//This js controls the mouse movement, linking changing of videos (opacity) with mouse speed

//function is triggered at end of click.js
function mouse_gesture() {
    mouse = true;
    
    $(".mouses").show(1000);
    
    var changeimage_mouse = 0,
        mouse3 = document.querySelector('.mouse3.top');
    
    //Set this at start or else first vid autoplays
    mouse3.playbackRate = 0;

    //code from https://codepen.io/zFunx/pen/WjVzWo
    var prevEvent, currentEvent;
    document.documentElement.onmousemove=function(event){
      currentEvent=event;
    }

    var maxSpeed=0,prevSpeed=0,maxPositiveAcc=0,maxNegativeAcc=0;
        
 var checking_mouse = setInterval(function(){
      if(prevEvent && currentEvent){
        var movementX=Math.abs(currentEvent.screenX-prevEvent.screenX);
        var movementY=Math.abs(currentEvent.screenY-prevEvent.screenY);
        var movement=Math.sqrt(movementX*movementX+movementY*movementY);

        //speed=movement/100ms= movement/0.1s= 10*movement/s
        var speed=movement/900;
          var mouse_speed=movement/100;

    //    console.log("movement is " + movement);
    //    document.getElementById("speed").innerText=Math.round(speed);

      };

      prevEvent=currentEvent;
      prevSpeed=speed;

        console.log("SPEED IS" + speed);


    // ??? querySelectorAll doesn't work for some reason??? have to narrow down selector to just 1 element???? but moving this in here also doesn't work, the speed and mouse3.playbackRate eventually delinks anyways???
        //??right now what happens is, the video that is set from fadein to show (i think) ends up going at the speed it was set to when it was fadein — so its speed is no longer linked to the mouse??
     mouse3 = document.querySelector('.mouse3.top');

    // Loading the video after setting 
    //mouse3.load();

//        $(".mouse3.fadein").css({
//            "opacity": opacity_mouse
//        });

        if (speed < 0.0625) {
            mouse3.playbackRate = 0;
        }
        else if (speed > 16) {
            mouse3.playbackRate = 16;
        }
        else {
            mouse3.playbackRate = mouse_speed;
        }

    //        console.log("playback rate is" + mouse3.playbackRate);


        if (speed >= 1) {
            changeimage_mouse++;
    //        console.log("changeimage_mouse is" + changeimage_mouse);
        };

        if (changeimage_mouse == 1) {
               
            $(".mouse3[data-index='0']").removeClass("top");

            $(".mouse3[data-index='1']").addClass("show top").removeClass("hide");
            
        }
        else if (changeimage_mouse == 2) {
               
            $(".mouse3[data-index='1']").removeClass("top");

            $(".mouse3[data-index='2']").addClass("show top").removeClass("hide");
            
        }
        else if (changeimage_mouse == 3) {
               
            $(".mouse3[data-index='2']").removeClass("top");

            $(".mouse3[data-index='3']").addClass("show top").removeClass("hide");
            
        }
        else if (changeimage_mouse == 4) {
               
            $(".mouse3[data-index='3']").removeClass("top");

            $(".mouse3[data-index='4']").addClass("show top").removeClass("hide");
            
        }
        else if (changeimage_mouse == 5) {

            changeimage_mouse = 0;
            clearInterval(checking_mouse);
            
            //!! CALLS TYPE GESTURE!!
            type_gesture();
            
            //Fadeout effect
            $(".mouses").css({
                "opacity": 0
            });

            $(".mouses").delay(1000).hide(1000);
            mouse = false;

            console.log("CYCLED THROUGH MOUSES!!");
        }
        else {
    //             console.log("this shouldn't be happening ... or should it?");
                 }

    },200);
    
}
