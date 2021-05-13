$(function(){
    $(".main-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });
    
    $(".link-btn a").on("click",linkShow);
    function linkShow(){
        $(".link").toggleClass("on");
        $(this).toggleClass("on");
        return false;
    }
});