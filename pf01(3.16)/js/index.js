$(function(){
    //top banner
    $(".top-banner i").on("click",topBhide);
    function topBhide(){
        $(".top-banner").addClass("on");
    }
    
    
    
    //main-slider
    $(".main-slider").slick({
            arrows:false,
            dots:true,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:false,
    });
    $(".main-slider figure").eq(1).addClass("on");
    $(".main-slider").on("afterChange",mainMovie);
    function mainMovie(event,slick,currentSlider){
        $(".main-slider figure").eq(currentSlider+1).addClass("on").siblings().removeClass("on");
        }
    
    $(".main-slider-prev").on("click",function(){
        $(".main-slider").slick("slickPrev");
    });
    $(".main-slider-next").on("click",function(){
        $(".main-slider").slick("slickNext");
    });
    $("#main .xi-pause").on("click",function(){
        $(".main-slider").slick("slickPause");
    });
    $("#main .xi-play").on("click",function(){
        $(".main-slider").slick("slickPlay");
    });
    
    
    
    
    
    //tab
    $(".tab-menu li").on("click",tabMove);
    
    function tabMove(){
        var idx=$(this).index();//0,1,2,3
        $(".tab-con>div").eq(idx).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    }
    
    //sub-slider
    $(".sub-slider").slick({
            arrows:false,
            dots:true,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:false,
            centerMode:true,
            centerPadding:"150px",
            slidesToShow:3,
    });
        $("#sub .xi-arrow-left").on("click",function(){
        $(".sub-slider").slick("slickPrev");
    });
    $("#sub .xi-arrow-right").on("click",function(){
        $(".sub-slider").slick("slickNext");
    });
})

