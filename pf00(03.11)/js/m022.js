$(function(){
   
//    $("h1").on("click", leedd);
//    function leedd(){
//        $(this).hide();
//    }

$(".mopen").on("click",mOpen);
    function mOpen(){
        //$("nav").addClass("on")
        $("nav").toggleClass("on");
        $(this).toggleClass("on");
    }
});
