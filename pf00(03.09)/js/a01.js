$(function(){
   // 탑 베너
   $(".top-banner span").on("click",topBopen)
    function topBopen(){
        $(".top-banner").toggleClass("on")
    }
    
    //메인 슬라이드
    $(".main-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        pauseOnHover:false,
        pauseOnFocus:false,
    });
    
    $("#main .xi-arrow-left").on("click",function(){
        $(".main-slider").slick("slickPrev");
    })
    $("#main .xi-arrow-right").on("click",function(){
        $(".main-slider").slick("slickNext");
    })
    
    
    //텝메뉴
    $(".tab-menu li").on("click",tabMenu);
    function tabMenu(){
        var idx=$(this).index()
        console.log(idx);
        $(".tab-contents>div").hide();
        $(".tab-contents>div").eq(idx).show();
        $(".tab-menu li").removeClass("on");
        $(this).addClass("on");
    }
    
        //컨텐츠 슬라이드
    $(".content-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        slidesToShow:4,
    });
    
    $("#contents .xi-arrow-left").on("click",function(){
        $(".content-slider").slick("slickPrev");
    });
    $("#contents .xi-arrow-right").on("click",function(){
        $(".content-slider").slick("slickNext");
    });
    
    //totop
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
    
});


