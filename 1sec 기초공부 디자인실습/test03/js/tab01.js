$(function(){
   
    //tab01
    $(".tab-m01-menu li").on("click",tabM01)
    function tabM01(){
        var idx=$(this).index();
        $(".tab-m01-contents>div").hide();
        $(".tab-m01-contents>div").eq(idx).show();
        $(this).addClass("on").siblings().removeClass("on");
    }
    
    //tab02
    $(".tab-m02-menu li").on("click",tabM02)
    function tabM02(){
        var idx=$(this).index();
        $(".tab-m02-contents>div").css({visibility:"hidden"})
        $(".tab-m02-contents>div").eq(idx).css({visibility:"visible"})
        $(this).addClass("on").siblings().removeClass("on");
    }
});


