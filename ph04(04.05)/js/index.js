
    
    $(function(){
    
    
        $(".products").slick({
            autoplay:true,
            autoplaySpeed:3000,
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
        



        var mst=$("#story").offset().top;


        $(window).on("scroll", scEvent02);
        function scEvent02(){
        var sct=$(window).scrollTop();
        if(sct>mst-500){
            $("#story").addClass("on")
        }else{
            $("#story").removeClass("on")
        }
    }

    
    });
    
   