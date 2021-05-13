$(function(){
    //jquery start
        
    $(".mopen").on("click", function(){
        $("nav").toggleClass("on")
    });
    
    $("nav>ul>li").on("click", function(){
        $(this).toggleClass("on").siblings().removeClass("on");
    })
    
    //jquery end
    });