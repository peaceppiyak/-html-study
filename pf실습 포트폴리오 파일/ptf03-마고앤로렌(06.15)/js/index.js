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


    $(".xi-apps").on("click",function(){ 
        $("nav").toggleClass("on");
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
         $(this).addClass("on").siblings().removeClass("on");
         $(".series-con").eq($(this).index()).show().siblings().hide();
     });




      //ratan
      var mot=$("#ratan").offset().top;
      $(window).on("scroll",scEvent03);
      function scEvent03(){
          var sct=$(window).scrollTop();
          if(sct>mot-1700){
              $("#ratan").addClass("on");
          }else{
              $("#ratan").removeClass("on");
          }
      };
  
  
  
      //프로모션
      var mot=$(".promotion01-text").offset().top;
      $(window).on("scroll",scEvent01);
      function scEvent01(){
          var sct=$(window).scrollTop();
          if(sct>mot-1200){
              $(".promotion01-text").addClass("on");
          }else{
              $(".promotion01-text").removeClass("on");
          }
      };
  
      var mot=$(".promotion02-text").offset().top;
      $(window).on("scroll",scEvent02);
      function scEvent02(){
          var sct=$(window).scrollTop();
          if(sct>mot-700){
              $(".promotion02-text").addClass("on");
          }else{
              $(".promotion02-text").removeClass("on");
          }
      };









    //menu
    $(".xi-bars").click(function () {
        $("#menupage").addClass("on");
        $(this).toggleClass("on");
        $(".xi-bars").addClass("on");
    });

    $(".xi-close").click(function () {
        $("#menupage").removeClass("on");
        $(this).toggleClass("on");
        $(".xi-close").removeClass("on");
    });





    //video
    $(".videoslide").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnDotsHover:false,
    })




    //sns
    $(".sns-slider").slick({
        arrows:false,
        autoplaySpeed:2000,
       pauseOnHover:false,
       pauseOnFocus:false,
       slidesToShow:8,
    });

    $(".sns-slider").on("mousemove",moMove);
    function moMove(e){

        if(e.pageX < $(this).width()/2){
            $(".sns-slider").slick("slickPrev");
        }else{
            $(".sns-slider").slick("slickNext");
        }


    }



    //팝업

    if(!$.cookie("popup")){
        $(".popup").show();
    }else{
        $(".popup").hide();
    }

    $(".pop02").on("click",function(){
        $(".popup").hide();
    })

    $(".pop01").on("click",function(){
        $.cookie('popup', 'Y', { expires: 1 });
        $(".popup").hide();
    });

    //탑 버튼
    $(".to-top").on("click", function(){
        $("html,body").animate({scrollTop:0},1000)
    });

    $(window).on("scroll", function(){
        let wct=$(window).scrollTop();
        const tTop=$(".to-top")
        wct > 500 ? tTop.fadeIn() : tTop.fadeOut();
    })

    //모바일
    $(".mopen").on("click", function(){
        $(this).toggleClass("on");
        $("header nav").toggleClass("on");
        $(".mopen02").toggleClass("on");
    })















    
    
    

    
   
    
    
    
});