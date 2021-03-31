$(function(){
    $(".main-slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $(".slider-btn.prev").on("click",function(){
        $(".main-slider").slick("slickPrev");
    });

    $(".top-banner span").on("click",function(){
        $(".topwrap").toggleClass("on");
        $(this).toggleClass("on");
    })


    $(".event-slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        // pauseOnHover: false,
        // pauseOnFocus: false,
        slidesToShow:4,
    });

    var mot=$("#main-slogan").offset().top;
    console.log(mot);
    //메인 스크롤 이벤트
    $(window).on("scroll", scEvent);
    function scEvent(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>mot-500){
            $("#main-slogan").addClass("on")
        }else{
            $("#main-slogan").removeClass("on")
        }
    }




});