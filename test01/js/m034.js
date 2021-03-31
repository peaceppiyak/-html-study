$(function(){
//제이쿼리 시작
   
    $(".top-banner a").on("click",topBclose);
    function topBclose(){
        $(".top-banner").hide();
    }
    
    $(".main-slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
    });
    
    $("#visual i.xi-long-arrow-left").on("click",function(){
        $(".main-slider").slick("slickPrev")
    })
    
    //탭메뉴
    $(".customer-tab li").on("click", tabMc);
    function tabMc(){
        //$(this)는 클릭한거
        //$(this).index()는 클릭한 것의 번호
        console.log($(this).index());
        var i=$(this).index();
        $("customer-tab-contents>div").hide();
        $("customer-tab-contents>div").eq(i).show();
        $(".customer-tab li").removeClass("on");
        $(this).addClass("on");
    }
    
    $(".totop").on("click",toTop);
    function toTop(){
        $("html, body").animate({scrollTop:0},1000);
    }
    
//제이쿼리 끝
});
