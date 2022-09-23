//CODE from https://codepen.io/ollieRogers/pen/DPbRMz

//function is triggered at end of mouse.js
function scroll_gesture() {
    scroll = true;
    
    $(".scrolls").show(1000);
    
    $("body").css({
        "overflow-y": "visible"
    });

    var frameNumber = 0, // start scroll_video at frame 0
        // lower numbers = faster playback
        playbackConst = 500, 
        // get page height from scroll_video duration
        setHeight = document.getElementById("set-height"), 
        // select scroll_video element         
        scroll_vid = document.getElementById('v0'),
        // var scroll_vid = $('#v0')[0]; // jquery option
        scroll_vid_ended = 0;

    //Have to add this timeout/delay or else like 4/5 times 'loadedmetadata' never fires
    const myTimeout = setTimeout(getmetadata, 500);

    // dynamically set the page height according to scroll_video length
    scroll_vid.addEventListener('loadedmetadata', getmetadata);

    function getmetadata() {
      setHeight.style.height = Math.floor(scroll_vid.duration) * playbackConst + "px";

        console.log("Meta data for scroll_video loaded!!!");
    };

    // Use requestAnimationFrame for smooth playback
    function scrollPlay(){  
        
        //ADDING THIS IF CONDITION SO THAT scrollPlay() STOPS RUNNING IN TYPE MODULE
        if (scroll == true) {
            
            frameNumber  = window.pageYOffset/playbackConst;
            scroll_vid.currentTime  = frameNumber;
            window.requestAnimationFrame(scrollPlay);
        
            console.log("FRAME NUMBER IS" + frameNumber);
    //        console.log("VID DURATION IS" + scroll_vid.duration);
    //        console.log("CURRENT HEIGHT IS" + setHeight.style.height);
    //        console.log("CURRENT OFFSET IS" + window.pageYOffset);

            //???? THIS FRAMENUMBER VALUE IS PURELY BY TESTING / ARBITRARY PLS FIX!!!!!?????
            if (frameNumber >= 7.01) {
                scroll_vid_ended++;
                console.log("SCROLL VID ENDED!!!");
                window.scrollTo(0, 0);
            } 

            if (frameNumber >= 7.01 && scroll_vid_ended == 1) {

                $("#v0").removeClass("top");

                $("#v1").addClass("show top").removeClass("hide");

                scroll_vid = document.getElementById('v1');

            }
            else if (frameNumber >= 7.01 && scroll_vid_ended == 2) {

                $("#v1").removeClass("top");

                $("#v2").addClass("show top").removeClass("hide");

                scroll_vid = document.getElementById('v2');

            }
            else if (frameNumber >= 7.01 && scroll_vid_ended == 3) {

                $("#v2").removeClass("top");

                $("#v3").addClass("show top").removeClass("hide");

                scroll_vid = document.getElementById('v3');

            }
            else if (frameNumber >= 7.01 && scroll_vid_ended == 4) {

                
            //!! CALLS CODA PAGE!!
            window.location.href = "coda.html";
                
                //???TRYING TO GET THIS TO STOP SCROLLING WHEN TRANSITIONING TO TYPE GESTURE????
                $("body").css({
                    "overflow-y": "hidden"
                });

                //Fadeout effect
                $(".scrolls").css({
                    "opacity": 0,
                    "height": 0,
                    "overflow-y": "hidden",
                    "transition": "height 0s, overflow-y 0s"
                });

                $(".scrolls").delay(1000).hide(1000);
                scroll = false;

                console.log("CYCLED THROUGH SCROLLS!!");
            }
            
        }
        
    }

    window.requestAnimationFrame(scrollPlay);

    
}