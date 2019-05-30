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

/*
$(document).ready(function(){
    $(document).scroll(function(){
        let val = $(window).scrollTop();
        $("section.display").html(val);

        if (val> 3756 ) {
            $(".navbar").css("background" , "rgba(255,255,255,0)");
            
        } else{
            $(".navbar").css("background" , "rgba(22, 95, 155, 1)");
            
        }
            
        
    });
});

*/