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



    //------------
});