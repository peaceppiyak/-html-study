$(function(){

    $(".main-slider").slick({
        arrows:false,
        dots:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
            });

           
            $("#main .xi-angle-left-min").on("click", function(){
                $(".main-slider").slick("slickPrev")
                
            });
            
            $("#main .xi-angle-right-min").on("click", function(){
                $(".main-slider").slick("slickNext")
                
            });    
        
        $(".main-slider figure").eq(1).addClass("on");
        $(".main-slider").on("afterChange", mainMovie);
        function mainMovie(event,slick,currentSlider) {
           $(".main-slider figure").eq(currentSlider+1).addClass("on").siblings().removeClass("on") 
        }

        $(window).on("scroll", function(){
            var wct=$(window).scrollTop();
            $(".sect").each(function(){
                var this_top=$(this).offset().top;
                if(wct>this_top-600) {
                    $(this).addClass("on");
                }
            });
            if(wct<500) {
                $(".sect").removeClass("on");
            }

        });

        $(".search-r").on("click",function(){
            $(this).toggleClass("on");
            $(".nav-search").slideToggle("on");
        });  

        $(".search-log").on("click",function(){
            $(this).toggleClass("on");
            $(".nav-log").slideToggle("on");
        });  
            
  
        $(".mopen").on("click",function(){
            $(this).toggleClass("on"); 
            $("nav").toggleClass("on"); 
         });

         $("nav>ul>li>a").on("click",function(){
            $(this).parent().toggleClass("on").siblings().removeClass("on");
        });
        
         $(".submenu-first").on("click",function(){
            $(this).parent().toggleClass("on").siblings().removeClass("on");
        })

        $('.arttext').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.art'
          });
          $('.art').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.arttext',
            arrows: false,
            dots: false,
          });

                $("#art .xi-angle-left-min").on("click", function(){
                    $(".art").slick("slickPrev")
                    
                });
                
                $("#art .xi-angle-right-min").on("click", function(){
                    $(".art").slick("slickNext")
                    
                });   
                
                        
        $('.brandname').slick({
            slidesToShow:1,
            slidesToScroll: 1,
            arrows:false,
            fade: true,
            asNavFor: '.brandslider'
          });
          $('.brandslider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.brandname',
            arrows: false,
            dots: false,
          });

          $("#brand .xi-angle-left-min").on("click", function(){
            $(".brandname").slick("slickPrev")
            
        });
        
        $("#brand .xi-angle-right-min").on("click", function(){
            $(".brandname").slick("slickNext")
            
        });   
            
    $("#footer-button").click(function(){
        $("#fotter-family").slideToggle();
        $("#footer-sub").toggleClass("on")
    });
    
    $("#fotter-family>li").hover(function(){
        $(this).addClass("on");},function(){
        $(this).removeClass("on");
    });

    // $('.rightlist').masonry({
    //     itemSelector: '.mlist',
    //     columnWidth:100,
    //     gutter: 10,
    //     horizontalOrder:true,
    //     // originLeft: false //왼쪽부터 정렬 
    //     // originTop: false //바닥부터
    //     // transitionDuration: '0.2s' //위치 전환 시간
    //   });
});
