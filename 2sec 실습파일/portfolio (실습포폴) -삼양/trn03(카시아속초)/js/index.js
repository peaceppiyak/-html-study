$(function(){

    $(".main-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        fade:true,
        dots:true,
    });



    $(window).on("scroll",function(){
        var sct=$(window).scrollTop();
        // if (sct>0) $("header").addClass("on") 아래식은 if//else 연산식임 편하게 사용가능!
        sct>0 ? $("header").addClass("on") : $("header").removeClass("on");
    })

});