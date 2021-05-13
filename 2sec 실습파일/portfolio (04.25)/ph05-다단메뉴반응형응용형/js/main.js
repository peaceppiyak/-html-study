$(function(){
    //-------------
    $(".visual-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
    });


    //모바일 nav open
    $(".mopen").on("click", function(){
        $("nav").toggleClass("on")
    });


    // $("nav>ul>li").on("click", function(){
    //     if($("nav").hasClass("on")){
    //         $(this).toggleClass("on").siblings().removeClass("on");
    //     }
    // });

    $("nav>ul>li>a").on("click", function(){
        if($("nav").hasClass("on")){
            $(this).toggleClass("on");
            $(this).parent().siblings().find("a").removeClass("on");
        }
    });

    $(window).on("resize", function(){
        $("nav").removeClass("on");
        $("nav>ul>li>a").removeClass("on");
    });



    //------------
});