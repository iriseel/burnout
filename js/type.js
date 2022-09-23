//This js controls the mouse movement, linking changing of videos (opacity) with mouse speed

//function is triggered at end of click.js
function type_gesture() {
    type = true;
    
    $(".types").css({
        "opacity": 1
    });
    
    $(".types").show(1000);
    
    
    var type1 = document.querySelector('.type1.top'),
        types = 0,
        types_reset = 0,
        change_image;
    
    type1.currentTime = 0;
    
    $(document).keydown(function(){
        types++;
        types_reset++;
        type1 = document.querySelector('.type1.top');
        change_image = types/50;
        type1.currentTime  = types_reset/10;
        
        if (change_image == 1) {
            types_reset = 0;
             
            $(".type1[data-index='0']").removeClass("top");

            $(".type1[data-index='1']").addClass("show top").removeClass("hide");
            
        }
        else if (change_image == 2) {
            types_reset = 0;
             
            $(".type1[data-index='1']").removeClass("top");

            $(".type1[data-index='2']").addClass("show top").removeClass("hide");
            
        }
        else if (change_image == 3) {
            types_reset = 0;
             
            $(".type1[data-index='2']").removeClass("top");

            $(".type1[data-index='3']").addClass("show top").removeClass("hide");
            
        }
        else if (change_image == 4) {
            types_reset = 0;
             
            $(".type1[data-index='3']").removeClass("top");

            $(".type1[data-index='4']").addClass("show top").removeClass("hide");
            
        }
        else if (change_image == 5) {
            types_reset = 0;
             
            $(".type1[data-index='4']").removeClass("top");

            $(".type1[data-index='5']").addClass("show top").removeClass("hide");
            
        }
        else if (change_image == 6) {
            types_reset = 0;

            change_image = 0;

            //!! CALLS SCROLL GESTURE!!
            scroll_gesture();
            
            $(".types").hide(1000);
            type = false;

            console.log("CYCLED THROUGH TYPES!!");
            
            
        }
    });
    
    
}