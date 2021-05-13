$(function(){
    //jquery start
        
    $(".main-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
    });
    
    
    $(".groble-link li").on("click", mapTab);
    function mapTab(){
        let idx=$(this).index();
        //$(".groble-map dd").hide();
        $(".groble-map dd").eq(idx).fadeIn().siblings().fadeOut();
    }
    
    
    $(window).on("scroll", function(){
        let sct=$(window).scrollTop();
        $("section").each(function(idx){
            let ht=$(this).offset().top;    
            if(sct>ht-200){
                $(this).addClass("on").siblings().removeClass("on");
                console.log(idx);
                $("nav a").eq(idx+1).addClass("on").siblings().removeClass("on");
            }else if(sct==0){
                $("nav a").removeClass("on");
            }
        })
    });
    
    $(".link dt").on("click", function(){
        $(".link dd").slideToggle();
        $(".link i").toggleClass("on");
    });
    
    $(".link").on("mouseleave", function(){
        $(".link dd").slideUp();
    });
    
    //jquery end
    });