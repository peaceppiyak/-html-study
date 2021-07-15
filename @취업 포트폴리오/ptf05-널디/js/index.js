
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






    //ssey
    $(".ssey-bg").slick({
        autoplay:false,
        arrows:false,
        pauseOnHover: false,
        pauseOnFocus: false,
    })

    $(".ssey-slide").slick({
        autoplay:false,
        arrows:false,
        fade:true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $(".ssey-show").slick({
        autoplay:false,
        arrows:false,
        fade:true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });




    $(".ssey-slide").on("afterChange", function(event,slick,current){
        $(".ssey-slide img").eq(current).addClass("on").siblings().removeClass("on")
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
        $(".ssey-show").slick("slickGoTo",idx);
    }

    $(".ssey figure").on("mousemove", function(e){
        let x=e.pageX;
        let y=e.pageY;
        console.log(x,y);
        $(".cur").css({top:y,left:x})
    })






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


    $(".xi-arrow-left").on("click",function(){
        $(".lookbook").slick("slickPrev");
        $(".book-content").slick("slickPrev");
 
    });


    $(".xi-arrow-right").on("click",function(){
        $(".lookbook").slick("slickNext");
        $(".book-content").slick("slickNext");

    });


    //content-slider
    // var contentSlider01=$(".content-slider").slick({
    //     arrows:false,
    //     autoplay:true,
    //     autoplaySpeed:0,
    //     pauseOnHover:false,
    //     pauseOnFocus:false,
    //     dots:false,
    //     speed:2000,
    //     centerMode: true,
    //     variableWidth: true,
    //     cssEase:"linear",
    // });  

    // var contentPrev=$("#content01 i.xi-angle-left-thin");
    // var contentNext=$("#content01 i.xi-angle-right-thin");
    
    // contentPrev.on("click", function(){
    //     contentSlider01.slick("slickPrev")
    // });
    // contentNext.on("click", function(){
    //     contentSlider01.slick("slickNext")
    // });

    // var contentItem=$(".content-slider figure");
    // contentItem.eq(3).addClass("on")
    // contentSlider01.on("afterChange", function(event,slick,current){
    //     contentItem.eq(current+3).addClass("on").siblings().removeClass("on");
    // });





});