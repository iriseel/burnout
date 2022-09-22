//This js controls the mouse movement, linking changing of videos (opacity) with mouse speed

//function is triggered at end of click.js
function type_gesture() {
    $(".types").show();
    
    var type1 = document.querySelector('.type1.show'),
    types = 0,
    changeimage_types;
    
    type1.currentTime = 0;
    
    $(document).keydown(function(){
        types++;
        type1.currentTime  = types/20;
    });
    
    
}