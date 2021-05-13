$(function(){
    //jquery start
        $("nav>ul>li").on("click", function(){
            $(this).toggleClass("on").siblings().removeClass("on")
        });
        $(".mopen").on("click", function(){
            $(this).toggleClass("on");
            $("nav").toggleClass("on");
        })
    
    
    //jquery end
    });