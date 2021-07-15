$(function(){

    
    $('#full-wrap').fullpage({
        //options here
        anchors:['s01','s02','s03','s04','s05'],
        autoScrolling:true,
        scrollHorizontally: true,
        afterLoad: function(origin,destination){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
            }
        });

        //mopen
        $(".mopen").on("click",navOpen);
        function navOpen(){
        $(".menu").toggleClass("on");
        $(this).toggleClass("on");
    }

        //search
        $(".xi-search").on("click",function(){ 
            $("form").toggleClass("on");
        });

        //lang
        $(".xi-globus").on("click",function(){ 
            $(".lang").toggleClass("on");
        });

        $(".xi-close").on("click",function(){ 
            $(".lang").removeClass("on");
        });


        //main
        $(".main-slider").slick({
			dots:true,
			infinite: true,
			pauseOnHover: false,
			speed:1000,
			fade: true,
			arrows:false,
		});

        $(".slider-btn.prev").on("click",function(){
            $(".main-slider").slick("slickPrev");
        });
    
    
        $(".slider-btn.next").on("click",function(){
            $(".main-slider").slick("slickNext");
        });



        //edition
        $(".edition").slick({
			dots:false,
			infinite: true,
			pauseOnHover: false,
			speed:1000,
			fade: true,
			arrows:false,
            autoplay:true,
            vertical : false,
		});

        $(".edition-line figure").on("click",tabMenu)
        function tabMenu(){
            var idx=$(this).index();
            console.log(idx);
            $(".edition").removeClass("on");
            $(".edition").eq(idx).addClass("on");
            $(".edition-text").removeClass("on");
            $(".edition-text").eq(idx).addClass("on");
            
            $(".edition-line figure").removeClass("on");
            $(this).addClass("on");
        }

        $(".xi-angle-left-thin").on("click",function(){
            $(".edition").slick("slickPrev")
        })
    
        $(".xi-angle-right-thin").on("click",function(){
            $(".edition").slick("slickNext")
        })
    






        //collection
        $(".collection").slick({
            autoplay:true,
			dots:false,
			infinite: true,
			pauseOnHover: false,
			speed:3000,
			fade: false,
			arrows:false,
            pauseOnFocus:false,
            slidesToShow:5,
            slidesToScroll: 1,
		});

        $(".collection").on("afterChange", function(e,s,c){
            $(".collection figure").eq(c+7).addClass("on").siblings().removeClass("on");
        });







        //best
        $(".best ul li").on("click",tab)
        function tab(){
            var idx=$(this).index();
            console.log(idx);
            $(".best-bg").removeClass("on");
            $(".best-bg").eq(idx).addClass("on");

            $(".best ul li").removeClass("on");
            $(this).addClass("on");
        }


        








    
    
    

    
   
    
    
    
});