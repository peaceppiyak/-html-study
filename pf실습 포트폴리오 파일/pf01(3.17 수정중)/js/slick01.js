$(function(){
    
    //slider1
    $(".main-slider").slick({
        autoplay:true,
        arrows:false,
    });
    
    
    $(".main-slider figure").eq(1).addClass("on");
    $(".main-slider-bar li").eq(0).addClass("on");
    $(".main-slider").on("afterChange",function(event,slick,currentSlider){
        $(".main-slider figure").eq(currentSlider+1).addClass("on").siblings().removeClass("on");
        $(".main-slider-bar li").eq(currentSlider).addClass("on").siblings().removeClass("on");
    });
   
    //slider2
    $(".kimbab-slider figure").eq(2).addClass("on");
    $(".kimbab-slider").slick({
        autoplay:true,
        arrows:false,
        slidesToShow:5,
    });
    $(".kimbab-slider").on("afterChange",function(event,slick,currentSlider){
        $(".kimbab-slider figure").eq(currentSlider+7).addClass("on").siblings().removeClass("on");
    });

    //slider3
    $(".kimbab-slider02").slick({
        autoplay:true,
        autoplaySpeed:2000,
        speed:0,
        arrows:false,
        fade:true,
    });
        $(".kimbab-menu li").eq(0).addClass("on")
        $(".kimbab-slider02").on("afterChange",function(event,slick,currentSlider){
        $(".kimbab-slider02 figure").eq(currentSlider).addClass("on").siblings().removeClass("on");
        $(".kimbab-menu li").eq(currentSlider).addClass("on").siblings().removeClass("on");
        
        var inTxt=$(".kimbab-slider02 figure").eq(currentSlider).find("img").attr("alt");
        $("#kb02 h3").text(inTxt);
    });
    
    $(".kimbab-menu li").on("click",slideGoto);
    function slideGoto(){
        var idx=$(this).index();
        console.log(idx);
        $(".kimbab-slider02").slick("slickGoTo",idx);
    }
    
});