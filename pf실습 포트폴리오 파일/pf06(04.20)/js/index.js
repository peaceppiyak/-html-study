$(function(){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 0) {
            $("header").addClass("on");
        }else{
            $("header").removeClass("on");
        }
        
    });
    
    
    
    
    $("nav .xi-search").on("click",function(){ 
        $("nav form").toggleClass("on");
    });
    

    
    //main-slider
    $(".main-slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnDotsHover:false,
        fade: true,
    })



    
         //tabmenu
     $(".series-tab li").eq(0).addClass("on");
     $(".series-tab li").on("click",function(){
         $(".series-wrap>div").hide();
         $(".series-tab li").removeClass("on")
         $(this).addClass("on");
         $(".series-wrap>div").eq($(this).index()).show();
     });
    
    
    

    
   
    
    
    
});