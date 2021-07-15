$(function(){


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
    
    
    
});