$(function(){
    
    
    $(".contents-slide").slick({
        autoplay:true,
        autoplaySpeed:1000,
        infinite: true,
        slidesToShow: 3,
        arrow:false,
        dots:true,
    });
    
    $("#contents .xi-arrow-left").on("click", function(){
        $(".contents-slide").slick("slickPrev");
    });
    
    
    $("#contents .xi-arrow-right").on("click", function(){
        $(".contents-slide").slick("slickNext");
    });

});
