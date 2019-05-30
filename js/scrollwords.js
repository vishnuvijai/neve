$(document).ready(function(){
    stopAnimation(".pie svg:nth-child(2) path","none");
    $("#panel").stop();
    $(document).scroll(function(){
        let val = $(window).scrollTop();
        
        if (val> 3756 ) {
            stopAnimation(".pie svg:nth-child(2) path","load 2s");
        } else{
            
        }
            
        
    });
});

function stopAnimation(element,action)
{
    $(element).css("-webkit-animation", action);
    $(element).css("-moz-animation", action);
    $(element).css("-ms-animation", action);
    $(element).css("animation", action);
}