$(function(){

    //main-slider
    $(".main-slider").slick({
            arrows:false,
            dots:true,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:false,

            
    });

    //상단탭
    $(".top-banner span").on("click",function(){
        $(".topwrap").toggleClass("on");
        $(this).toggleClass("on");
    })
    
    //골라먹는와츄원
    $(".val-slider").slick({
        arrows:false,
        dots:false,
        autoplay:true,
        fade:true,
    });
    
    $(".val-thum figure").on("click",sliderGo);
        function sliderGo(){
            var idx=$(this).index();
            $(".val-slider").slick("slickGoTo",idx);
        }
    
    $(".val-slider").on("afterChange",function(event,slick,currentSlider){
        $(".slider-num ").text(currentSlider+1)
    })
    
    //footer
    $(".link-btn a").on("click",linkShow);
    function linkShow(){
        $(".link").toggleClass("on");
        $(this).toggleClass("on");
        return false;
    }


    //totop
    $(".totop").on("click",toTop);
    function toTop(){
        $("html,body").animate({scrollTop:0},200) //1000이 1초이다..
    }
    $(".totop").hide();
    $(window).on("scroll",topShow);
    function topShow(){
        if($(window).scrollTop()>500){
           $(".totop").fadeIn();
           }
        else{
            $(".totop").fadeOut();
        }
        
    }




    //sub-slider
    $(".sub-slider").slick({
        arrows:false,
        dots:false,
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
