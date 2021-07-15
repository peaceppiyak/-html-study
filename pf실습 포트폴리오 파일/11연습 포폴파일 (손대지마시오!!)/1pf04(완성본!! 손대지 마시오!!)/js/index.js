
    
    $(function(){
    
    
        $(".products").slick({
            autoplay:true,
            autoplaySpeed:4000,
            infinite: true,
            slidesToShow: 4,
            arrows:false,
            dots:false,
            pauseOnHover: false,
            pauseOnFocus: false,
        });
        
        $("#product .xi-angle-left-thin").on("click", function(){
            $(".products").slick("slickPrev");
        });
        
        
        $("#product .xi-angle-right-thin").on("click", function(){
            $(".products").slick("slickNext");
        });
        



    var mst=$("#select").offset().top;
    var mot=$("#story").offset().top;


    $(window).on("scroll", scEvent02);
        function scEvent02(){
        var sct=$(window).scrollTop();
        if(sct>mst-500){
            $("#select").addClass("on")
        }else{
            $("#select").removeClass("on")
        }
    }




    $(window).on("scroll", scEvent01);
    function scEvent01(){
        
        var sct=$(window).scrollTop();
        if(sct>mot-1200){
            $("#story").addClass("on")
        }else{
            $("#story").removeClass("on")
        }
        console.log(sct,mot)
    }










    $(".place-right li").on("click",tabMenu)
    function tabMenu(){
        var idx=$(this).index();
        console.log(idx);
        $(".place-left>figure").removeClass("on");
        $(".place-left>figure").eq(idx).addClass("on");

        $(".place-text>div").removeClass("on");
        $(".place-text>div").eq(idx).addClass("on");

        
        $(".place-right li").removeClass("on");
        $(this).addClass("on");
    }

    

    $(".perfume-slide").slick({
        autoplay:true,
        autoplaySpeed:4000,
        infinite: true,
        slidesToShow: 1,
        arrows:false,
        dots:false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    
    $("#perfume .xi-angle-left-thin").on("click", function(){
        $(".perfume-slide").slick("slickPrev");
    });
    
    
    $("#perfume .xi-angle-right-thin").on("click", function(){
        $(".perfume-slide").slick("slickNext");
    });





    $(".xi-pause").on("click",movieStop);
    function movieStop(){
        $(".move").trigger("pause");
    }
    
    $(".xi-play").on("click",moviePlay);
    function moviePlay(){
        $(".move").trigger("play");
    }

















    });
    
   