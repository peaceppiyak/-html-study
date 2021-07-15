$(function(){



    $(".m-open").on("click",function(){
        $("nav").toggleClass("on"); 
        $(this).toggleClass("on"); 
        
        });




    $(".main-slider").slick({
        arrows:false,
        dots:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,  
        fade:true,
    });

    $(".notice-text").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,  
    });



    $("#event01 .tab-btn li").eq(0).addClass("on"); 
    $("#event01 .tab-con .tc").eq(0).addClass("on"); 
    
    $(".tab-btn li").on("click",function(){
       var i=$(this).index(); 
        $(".tab-con .tc").eq(i).addClass("on").siblings().removeClass("on"); $(this).addClass("on").siblings().removeClass("on");
    });



    $(".news-num li").on("click",tabMenu)
    function tabMenu(){
        var idx=$(this).index();
        console.log(idx);
        $(".ku-news").removeClass("on");
        $(".ku-news").eq(idx).addClass("on");
        
        $(".news-num li").removeClass("on");
        $(this).addClass("on");
    }



    $(window).on("scroll",function(){
        var sct=$(window).scrollTop();
        var this_top=$("#news").offset().top;
        console.log(sct);
        console.log(this_top);
        if(sct>this_top-200){
            $("#news").addClass("on"); 
        }else{
            $("#news").removeClass("on"); 
        }
    }); 

    $(".k-bg-s").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });   
    $(".pause02").on("click",function(){
        $(".k-bg-s").slick("slickPause")
    });    
    $(".prev").on("click",function(){
        $(".k-bg-s").slick("slickPrev")
    });    
    $(".next").on("click",function(){
        $(".k-bg-s").slick("slickNext")
    });  
    $(".close").on("click",function(){
        $("#k-bg").addClass("on");
    });  


    $(".menu nav>ul>li>a").on("click", function(){
        if($("nav").hasClass("on")){
            $(this).parent().siblings().find("ul").stop().slideUp();
            $(this).next().stop().slideToggle();
        }
       
    })



    $(window).on("scroll", scrollB);
    function scrollB(){
        var thisY=$(window).scrollTop();      $("#follow").stop().animate({top:300+thisY},500,"linear");  
    }

    $(".topsc").on("click",function(){
        $("html,body").animate({scrollTop:0},500); 
        });
    
    
});