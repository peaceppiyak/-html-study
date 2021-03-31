$(function(){
    $("#contnets ul li").on("click",meBc);
    function meBc(){
        $(this).addClass("on").siblings().removeClass("on");
    }
   
})

