



$(function(){

    $('#full-wrpa').fullpage({
    //options here
    anchors:['s01','s02','s03','s04','s05','s06'],
    autoScrolling:true,
    scrollHorizontally: true,
    afterLoad: function(origin,destination){
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        $(".menu-right li").eq(destination.index).addClass("on").siblings().removeClass("on");
        $(".gnb-right li").eq(destination.index).addClass("on").siblings().removeClass("on");
        $(".main-text h2").eq(destination.index).addClass("on").siblings().removeClass("on");
        }
    });




    // main



    //lookbook
    $(".lookbook").slick({
        arrows:false,
        autoplay:true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $(".book-content").slick({
        arrows:false,
        autoplay:true,
        fade:true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });




    $(".xi-angle-left-thin").on("click",function(){
        $(".lookbook").slick("slickPrev");
        $(".book-content").slick("slickPrev");
 

    });


    $(".xi-angle-right-thin").on("click",function(){
        $(".lookbook").slick("slickNext");
        $(".book-content").slick("slickNext");


    });


    //ssey
    $(".ssey-bg").slick({
        autoplay:true,
        arrows:false,
        pauseOnHover: false,
        pauseOnFocus: false,
    })

    $(".ssey-slide").slick({
        autoplay:true,
        arrows:false,
        fade:true,
        pauseOnHover: false,
        pauseOnFocus: false,
    })


    
    $(".ssey-line li").eq(0).addClass("on")
        $(".ssey-bg").on("afterChange",function(event,slick,currentSlider){
        $(".ssey-bg").eq(currentSlider).addClass("on").siblings().removeClass("on");
        $(".ssey-line li").eq(currentSlider).addClass("on").siblings().removeClass("on");
        
        var inTxt=$(".ssey-bg").eq(currentSlider).find("img").attr("alt");

    });


    $(".ssey-line li").eq(0).addClass("on")
        $(".ssey-slide").on("afterChange",function(event,slick,currentSlider){
        $(".ssey-slide").eq(currentSlider).addClass("on").siblings().removeClass("on");
        $(".ssey-line li").eq(currentSlider).addClass("on").siblings().removeClass("on");
        
        var inTxt=$(".ssey-slide").eq(currentSlider).find("img").attr("alt");

    });


    
    $(".ssey-line li").on("click",slideGoto);
    function slideGoto(){
        var idx=$(this).index();
        console.log(idx);
        $(".ssey-slide").slick("slickGoTo",idx);
        $(".ssey-bg").slick("slickGoTo",idx);
    }

    $(".ssey figure").on("mousemove", function(e){
        let x=e.pageX;
        let y=e.pageY;
        console.log(x,y);
        $(".cur").css({top:y,left:x})
    })


    //track
    $(".track-left").slick({
        autoplay:true,
        arrows:false,
        fade:true,
        pauseOnHover: false,
        pauseOnFocus: false,
    })

    $(".slider-btn.prev").on("click",function(){
        $(".track-left").slick("slickPrev");
 

    });


    $(".slider-btn.next").on("click",function(){
        $(".track-left").slick("slickNext");

    });





});