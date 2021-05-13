$(function(){

    
    //main
    $(".main-slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnDotsHover:false,
        fade:true,
    });


    $(".main-slider figure").eq(1).addClass("on");
    $(".main-slider").on("afterChange",mainMovie);
    function mainMovie(event,slick,currentSlider){
        $(".main-slider figure").eq(currentSlider+1).addClass("on").siblings().removeClass("on");
        }




    //search
    $(".search-btn").click(function(){
        $("#search-page").toggleClass("on");
        $(this).toggleClass("on");
        return false;
    });


    //map
    $(".xi-map-o").click(function () {
        $("#map").addClass("on");
        $(this).toggleClass("on");
        $(".xi-map-o").addClass("on");
    });

    $(".xi-close-thin").click(function () {
        $("#map").removeClass("on");
        $(this).toggleClass("on");
        $(".xi-close-thin").removeClass("on");
    });




    $(".notice-slider").slick({
        slidesToShow: 4,
        infinite: true,
        arrows:false,
        dots:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnDotsHover:false,
    });

    $(".xi-angle-left-thin").on("click",function(){
        $(".notice-slider").slick("slickPrev")
    })

    $(".xi-angle-right-thin").on("click",function(){
        $(".notice-slider").slick("slickNext")
    })



    //totop
    $(".totop").on("click",toTop);
    function toTop(){
        $("html, body").animate({scrollTop:0},1000);
    }





    
    
    

    
   
    
    
    
});