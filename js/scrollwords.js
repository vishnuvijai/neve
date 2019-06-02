$(document).ready(function(){
let selectorOne = "section.words > .words-container .row:last-child .words-svg-cols:first-child > .pie li svg:last-child path";
let selectorTwo = "section.words > .words-container .row:last-child .words-svg-cols:nth-child(2) > .pie li svg:last-child path";
let selectorThree = "section.words > .words-container .row:last-child .words-svg-cols:nth-child(3) > .pie li svg:last-child path";
let selectorFour = "section.words > .words-container .row:last-child .words-svg-cols:nth-child(4) > .pie li svg:last-child path";
    $(document).scroll(function(){
        let val = $(window).scrollTop();
        
        if (val> 3500 ) {
            startAnimation(selectorOne,"load 2s","628");
            startAnimation(selectorTwo,"load 2s","610");
            startAnimation(selectorThree,"load 2s","628");
            startAnimation(selectorFour,"load 2s","610");
            
        } 
    });
});

function startAnimation(element,action,value)
{
    
    if (action != "none") {
        $(element).attr("stroke-dashoffset",value);
    }
    $(element).css("-webkit-animation", action);
    $(element).css("-moz-animation", action);
    $(element).css("-ms-animation", action);
    $(element).css("animation", action);
}