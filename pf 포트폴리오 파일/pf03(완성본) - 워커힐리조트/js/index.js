$(function(){
    

    $('#full-wrpa').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    afterLoad: function(origin,destination){
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        }
    });



    $(".main-slider").slick({
        arrows:false,
        dots:false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $(".main-slider-text").slick({
        arrows:false,
        dots:false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });



    $(".info01-word").slick({
        arrows: false,
        dots:false,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
      });


    $(".xi-angle-left").on("click",function(){
        $(".main-slider").slick("slickPrev");
        $(".main-slider-text").slick("slickPrev");
        $(".info01-word").slick("slickPrev");

    });


    $(".xi-angle-right").on("click",function(){
        $(".main-slider").slick("slickNext");
        $(".main-slider-text").slick("slickNext");
        $(".info01-word").slick("slickNext");

    });
//   
    
    $(".offers-text").on("click", function(){
        $(".friend-bg").addClass("on");
    });


   
});