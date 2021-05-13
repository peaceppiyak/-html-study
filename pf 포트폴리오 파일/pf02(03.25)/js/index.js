$(function(){

    //main-slider
    $(".main-slider").slick({
            arrows:false,
            dots:true,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:false,

            
    });

    //상단탭
    $(".top-banner span").on("click",function(){
        $(".topwrap").toggleClass("on");
        $(this).toggleClass("on");
    })
    



    //인스타
    $(".sub-slider").slick({
        arrows:false,
        dots:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        centerMode:true,
        centerPadding:"150px",
        slidesToShow:3,
});
    $("#sub .xi-arrow-left").on("click",function(){
    $(".sub-slider").slick("slickPrev");
});
$("#sub .xi-arrow-right").on("click",function(){
    $(".sub-slider").slick("slickNext");
});



// 텝메뉴
$(".tab-menu li").on("click",tabMenu)
function tabMenu(){
    var idx=$(this).index();
    console.log(idx);
    $(".tab-contents>div").removeClass("on");
    $(".tab-contents>div").eq(idx).addClass("on");
    
    $(".tab-menu li").removeClass("on");
    $(this).addClass("on");
}
 
// 패밀리사이트
$("#family select").on("change",gaLink);
    function gaLink(){
        var lnk=$(this).val();
        if(lnk){
            window.open(lnk);
        }
        
}



// 클릭
$(".totop").on("click",toTop);
function toTop(){
    $("html,body").animate({scrollTop:0},200) //1000이 1초이다..
}
$(".totop").hide();
$(window).on("scroll",topShow);
function topShow(){
    if($(window).scrollTop()>500){
       $(".totop").fadeIn();
       }
    else{
        $(".totop").fadeOut();
    }
    
}


})
