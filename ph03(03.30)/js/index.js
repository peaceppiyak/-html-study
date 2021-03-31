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
        autoplay:false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $(".main-slider-text").slick({
        arrows:false,
        dots:false,
        autoplay:false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });


    $(".xi-angle-left").on("click",function(){
        $(".main-slider").slick("slickPrev");
        $(".main-slider-text").slick("slickPrev");

    })


    $(".xi-angle-right").on("click",function(){
        $(".main-slider").slick("slickNext");
        $(".main-slider-text").slick("slickNext");

    })
//   
    



   
});