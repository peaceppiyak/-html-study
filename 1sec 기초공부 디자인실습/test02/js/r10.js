$(function(){
   $(".mopen").on("click",navOpen);
    function navOpen(){
        $("nav").toggleClass("on");
        $(this).toggleClass("on");
    }
})

