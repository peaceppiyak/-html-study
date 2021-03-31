$(function(){

$(".main-slide").slick({
    arrows:false,
     autoplay:true,
    dots:true,
    });
 
    $(".main-prev").on("click",function(){
        $(".main-slide").slick("slickPrev");
    });
    $(".main-next").on("click",function(){
        $(".main-slide").slick("slickNext");
    });
});
