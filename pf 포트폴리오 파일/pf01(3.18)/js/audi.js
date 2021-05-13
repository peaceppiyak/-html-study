$(function(){
    $(".main-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });
    
    
    
    
    $(".best-slider figure").eq(1).addClass("on");
    $(".best-slider").slick({
        autoplay:true,
        arrows:false,
        slidesToShow:3,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
    });
    $(".best-slider").on("afterChange",function(event,slick,currentSlider){
        $(".best-slider figure").eq(currentSlider+4).addClass("on").siblings().removeClass("on");
    });
});
