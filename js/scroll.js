$(document).ready(function() {
    window.onscroll = function() {scrollFunction()};

});

function scrollFunction(){
    if ($(window).scrollTop> 300 ) {
        $(".navbar").css("background" , "rgba(255,255,255,1)");
    } else {
        $(".navbar").css("background" , "rgba(255,255,255,0)");
    	
    }
}