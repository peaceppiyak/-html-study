$(function(){
   
    $("header nav li").on("mouseenter", function(){
        if($("nav").hasClass("on")){
            $("header nav li").on("click",function(){
                var idx=$(this).index();
				$(".mega>div").removeClass("on");
                $(".mega>div").eq(idx).addClass("on");
				$(this).addClass("on").siblings().removeClass("on");
               
            })
            return false;
        }else{
            var idx=$(this).index();
            $(".mega>div").eq(idx).show().siblings().hide();
            $(this).addClass("on").siblings().removeClass("on");
            $(".mega-back").addClass("on");
		

        }
    })
    

	
    $(".mega>div").on("mouseleave", function(){
        if($("nav").hasClass("on")){
            $("header nav li").on("click",function(){
                var idx=$(this).index();
                
            })
            return false;
        }else{
            $(".mega>div").hide();
            $(".mega-back").removeClass("on");
            $("header nav li").removeClass("on"); 
        }

    })

	$("header nav .bye").on("mouseenter", function(){
		$(".mega-back").removeClass("on");
		$(this).addClass("on");
	})


	$("header nav .bye").on("mouseleave", function(){
		$(".mega-back").removeClass("on");
		$(this).removeClass("on");
	})

   

    $(".b-slider").slick({
        arrows:false,
        dots:false,
        slidesToShow:5,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    })
      

   
     
    $(".fa-chevron-left").on("click", function(){
        $(".b-slider").slick("slickPrev");
        })  
    $(".fa-chevron-right").on("click", function(){
        $(".b-slider").slick("slickNext");
        });



    $("#make-up li").on("click", function(){
        var idx=$(this).index();
        $("#make-up .ma-ex").eq(idx).addClass("on").siblings().removeClass("on");
    })  
    
    $("#make-up .ma-ex .ma-te i").on("click", function(){
        $("#make-up .ma-ex").removeClass("on");

    })

    if(!$.cookie("popup")){
        $(".popup").show();
    }else{
        $(".popup").hide();
    }
    
    $(".popup a").on("click",function(){
        $.cookie('popup', 'Y', { expires: 1 });
        $(".popup").hide();
    });

    $(".err").on("click",function(){
        $.removeCookie('popup');
    });

    $(".popup span").on("click",function(){
        $(".popup").hide();
    });
    


    $(function() {
        $( ".popup" ).draggable();
    });

    $(function() {
        $( ".ma-ex" ).draggable();
    });





    $(".mopen").on("click",function(){
        $("header nav").toggleClass("on");
        $(".mega>div").removeClass("on");
		$(this).toggleClass("on");
		$("header nav li").removeClass("on");
    })

});