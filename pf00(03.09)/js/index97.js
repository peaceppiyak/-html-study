$(function(){

    //main-slider
    $(".main-slider").slick({
            arrows:false,
            dots:true,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:false,
    });
    
    $("#main .xi-angle-left").on("click",function(){
        $(".main-slider").slick("slickPrev");
    })
    $("#main .xi-angle-right").on("click",function(){
        $(".main-slider").slick("slickNext");
        })
//   
    
})
