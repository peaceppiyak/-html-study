
    
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


        $(window).on("scroll", scEvent02);
        function scEvent02(){
        var sct=$(window).scrollTop();
        if(sct>mst-500){
            $("#select").addClass("on")
        }else{
            $("#select").removeClass("on")
        }
    }





    $(".place-right li").on("click",tabMenu)
    function tabMenu(){
        var idx=$(this).index();
        console.log(idx);
        $(".place-left>figure").removeClass("on");
        $(".place-left>figure").eq(idx).addClass("on");
        
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

















    });
    
   