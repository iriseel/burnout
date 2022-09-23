//This js controls the clicking, linking changing of videos (opacity) with number of clicks

$(".mouses").hide();
$(".scrolls").hide();
$(".types").hide();

var click = true,
    mouse = false,
    scroll = false,
    type = false;

//PLAY AUDIO(S)
$(window).click(function() {
    var audio_music = document.getElementById("audio_music");
      audio_music.play();
        audio_music.volume = .5;
    var audio_text = document.getElementById("audio_text");
      audio_text.play();
});


var click1 = document.querySelector('.click1.top'),
    clicks = 0,
    clicks_reset = 0,
    changeimage_clicks;

    // Chrome clamps video playback rate to a range of 0.0625 - 16.0.
//    click1.playbackRate = 0.0625;

$(document).click(function() {
    //ADDING THIS IF CONDITION SO THAT click() STOPS RUNNING IN OTHER MODULES
        if (click == true) {
            
    clicks++;
    clicks_reset++;
    changeimage_clicks = clicks/20,
    click1 = document.querySelector('.click1.top');
    
//    this code is for syncing the video frame (not playback rate) with mouse click
    click1.currentTime  = clicks_reset/10;
 
    if (changeimage_clicks == 1) {
        
        clicks_reset = 0;
        
        $(".click1[data-index='0']").removeClass("top");
        
        $(".click1[data-index='1']").addClass("show top").removeClass("hide");
        
        console.log("CHANGED CLICK VID");
        
    }
    else if (changeimage_clicks == 2) {
        
        clicks_reset = 0;
        
        $(".click1[data-index='1']").removeClass("top");
        
        $(".click1[data-index='2']").addClass("show top").removeClass("hide");
        
        console.log("CHANGED CLICK VID");
        
    }
    else if (changeimage_clicks == 3) {
        
        clicks_reset = 0;
        
        $(".click1[data-index='2']").removeClass("top");
        
        $(".click1[data-index='3']").addClass("show top").removeClass("hide");
        
        console.log("CHANGED CLICK VID");
        
    }
    else if (changeimage_clicks >= 4) {
        
        clicks_reset = 0;
        
        //!! CALLS MOUSE GESTURE!!
        mouse_gesture();
        
        //Fadeout effect
        $(".clicks").css({
            "opacity": 0
        });
        
        $(".clicks").delay(1000).hide(1000);
        click = false;
        
        console.log("CYCLED THROUGH CLICKS!!");
    }
    

//    click1.playbackRate = clicks/2.5;
    
//    $(".click1.fadein").css({
//        "opacity": opacity_clicks
//    });
    
    
//    console.log("clicks:" + clicks);
//    console.log("changeimage_clicks:" + changeimage_clicks);
//    console.log("opacity_clicks:" + opacity_clicks);
    
//    console.log("playback rate is" + click1.playbackRate);

        }
});


