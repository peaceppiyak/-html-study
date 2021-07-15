$(function(){
   



    
    $(window).on("scroll",function(){
        let sct=$(window).scrollTop();
        $(".section").each(function(){
            let this_top=$(this).offset().top;
            if(sct > this_top -400) {
                $(this).addClass("on");//.siblings().removeClass("on")
            }
            if(sct < 200) { $(".section").removeClass("on")}
        });
    });

    $("#intro h1").on("click", function(){
        $("#intro").addClass("on");
        $("#main .main-text").addClass("on");
    });
    
    $(".shop-silder").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        slidesToShow:4,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow:2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 2,
              }
            }
          ]

    });


    $("#intro").delay(7000).fadeOut();

    function tIN(){
        $("#main .main-text").delay(7000).addClass("on");
    }
    //tIN(); 
    setTimeout(tIN,8000);


    $(".mini-fade").slick({
        arrows:false,
        dots:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        fade:true,

    });


    
    $(".totop").on("click", toTop);
    function toTop(){
        $("html,body").animate({scrollTop:0},200)
    }
    
    $(".totop").hide();
    $(window).on("scroll", topShow);
    function topShow(){
        if($(window).scrollTop()*500){
        $(".totop").fadeIn();
        }else{
            $(".totop").fadeOut();
        }
    };

    $(".mobile-menu").on("click", function(){
        $(this).toggleClass("on");
        $("header nav").toggleClass("on");
    });





});