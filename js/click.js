//This js controls the clicking, linking changing of videos (opacity) with number of clicks

$(".mouses").hide();
$(".scrolls").hide();
$(".types").hide();

$(window).click(function() {
    var audio = document.getElementById("audio");
      audio.play();
});


//???? Again, issues with selecting the right video and setting playback on the right one????
var click1 = document.querySelector('.click1.show'),
    clicks = 0,
    opacity_clicks,
    changeimage_clicks;

    // Chrome clamps video playback rate to a range of 0.0625 - 16.0.
    click1.playbackRate = 0.0625;

$( ".click1" ).click(function() {
    clicks++;
    changeimage_clicks = clicks/10,
    click1 = document.querySelector('.click1.show');
    
//    this code is for syncing the video frame (not playback rate) with mouse click
//    click1.currentTime  = clicks/10;

    
    //??? SOMETHING IS WRONG HERE, AT TURNING POINT WHEN changeimage_clicks == 2 for example, opacity of fadein is 1 before switching back to 0.1???
    if (changeimage_clicks < 1) {
        opacity_clicks = changeimage_clicks; 
//        click1.playbackRate = changeimage_clicks * 2;
    }
    else if (changeimage_clicks == 1) {
        opacity_clicks = 0;
        
        $(".click1[data-index='0']").addClass("hide").removeClass("show");
        
        $(".click1[data-index='1']").addClass("show").removeClass("hide fadein");
        
        $(".click1[data-index='2']").addClass("fadein");
        
        console.log("CHANGED CLICK VID");
        
    }
    else if (changeimage_clicks < 2) {
        opacity_clicks = changeimage_clicks - 1;  
//        click1.playbackRate = (changeimage_clicks - 1) * 2;
    }
    else if (changeimage_clicks == 2) {
        opacity_clicks = 0;
        
        $(".click1[data-index='1']").addClass("hide").removeClass("show");
        
        $(".click1[data-index='2']").addClass("show").removeClass("hide fadein");
        
        $(".click1[data-index='3']").addClass("fadein"); 
        
        console.log("CHANGED CLICK VID");
        
    }
    else if (changeimage_clicks < 3) {
        opacity_clicks = changeimage_clicks - 2;  
//        click1.playbackRate = (changeimage_clicks - 2) * 2;  
    }
    else if (changeimage_clicks == 3) {
        opacity_clicks = 0;
        
        $(".click1[data-index='2']").addClass("hide").removeClass("show");
        
        $(".click1[data-index='3']").addClass("show").removeClass("hide fadein");
        
        $(".click1[data-index='0']").addClass("fadein"); 
        
        console.log("CHANGED CLICK VID");
        
    }
    else if (changeimage_clicks < 4) {
        opacity_clicks = changeimage_clicks - 3;  
//        click1.playbackRate = (changeimage_clicks - 3) * 2;  
    }
    else if (changeimage_clicks >= 4) {
        opacity_clicks = 0;
        
        //!! CALLS MOUSE GESTURE!!
        $(".clicks").hide(mouse_gesture);
        
        changeimage_clicks = 0;
        clicks = 0;
        
        console.log("CYCLED THROUGH CLICKS!!");
    }
    else {
    }
    

    click1.playbackRate = clicks/2.5;
    
    $(".click1.fadein").css({
        "opacity": opacity_clicks
    });
    
    
//    console.log("clicks:" + clicks);
//    console.log("changeimage_clicks:" + changeimage_clicks);
    console.log("opacity_clicks:" + opacity_clicks);
    
    console.log("playback rate is" + click1.playbackRate);

});


