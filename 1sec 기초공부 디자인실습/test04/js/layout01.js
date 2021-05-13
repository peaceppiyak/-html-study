$(function(){
    $(".val-slider").slick({
        arrows:false,
//        dots:true,
        autoplay:true,
//        vertical:true,
        fade:true,
//        cssEase:"linear",
    });
    
    $(".val-thum figure").on("click",sliderGo);
        function sliderGo(){
            var idx=$(this).index();
            $(".val-slider").slick("slickGoTo",idx);
        }
    
    $(".val-slider").on("afterChange",function(event,slick,currentSlider){
        $(".slider-num ").text(currentSlider+1)
    })
});