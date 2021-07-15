$(function(){

    //header
    $(window).on("scroll", function(){
        var wct=$(window).scrollTop();
        if(wct>0){
            $("header").addClass("on");
        }else{
            $("header").removeClass("on");
        }
        
    });

    //main-visual
    var mSlider=$(".main-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed: 4000,
        fade:true,
        pauseOnHover:false,
        dots:true,
    }); 

    //main-visual - slider-btn
    $("#main-visual a.prev").on("click",function(){
        $(".main-slider").slick("slickPrev")
    });
    $("#main-visual a.next").on("click",function(){
        $(".main-slider").slick("slickNext")
    });

    //main-visual - slider-btn img change
    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function() {
        $('img[data-alt-src]').each(function() { 
            new Image().src = $(this).data('alt-src'); 
        }).hover(sourceSwap, sourceSwap); 
    });

    //main-visual - slider-tab
    $(".slider-tab li").eq(0).addClass("on");
    $(".main-slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide);
        $(".slider-tab li").eq(currentSlide).addClass("on").siblings().removeClass("on");        
    });
        
    $(".slider-tab li").on("click",function(){
        var idx=$(this).index();
        $(".main-slider").slick("slickGoTo", idx);
        $(this).addClass("on").siblings().removeClass("on");
        return false;
    });

    //#content02 - on
    $(window).on("scroll", function(){
        var wct=$(window).scrollTop();
        $("#content02").each(function(){
            var this_top=$(this).offset().top;
            if(wct>this_top-200) {
                $(this).addClass("on");
            }
        });
        if(wct<500) {
            $("#content02").removeClass("on");
        }
    });

    //content01-slider
    var contentSlider01=$(".food-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed:400,
        cssEase:"linear",
    });  

    var contentPrev=$("#content01 i.xi-angle-left-thin");
    var contentNext=$("#content01 i.xi-angle-right-thin");
    
    contentPrev.on("click", function(){
        contentSlider01.slick("slickPrev")
    });
    contentNext.on("click", function(){
        contentSlider01.slick("slickNext")
    });

    var contentItem=$(".food-slider figure");
    contentItem.eq(3).addClass("on")
    contentSlider01.on("afterChange", function(event,slick,current){
        contentItem.eq(current+3).addClass("on").siblings().removeClass("on");
    });
    
    //steak slider
    var mainSlider=$(".steak").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        vertical:true,
        speed:900,
    });

    var slideItem=$(".steak figure");
    slideItem.eq(0).addClass("on");
    slideItem.on("afterChange", function(e,s,c){
        console.log(c);
        slideItem.eq(c).addClass("on").siblings().removeClass("on");
    });

    var direction=true;

    //steak slider - i
    var slidePrev=$("#content03 i.xi-angle-up-thin");
    var slideNext=$("#content03 i.xi-angle-down-thin");
    
    slidePrev.on("click", function(){
        direction=false;
        mainSlider.slick("slickPrev");        
    });
    slideNext.on("click", function(){
        mainSlider.slick("slickNext")
    });

    slideItem.eq(1).addClass("on");
    mainSlider.on("afterChange", function(event,slick,current){
        slideItem.eq(current+1).addClass("on").siblings().removeClass("on");
        direction=true;
    });

    mainSlider.on("beforeChange", function(event,slick,current,next){
        direction ? v="+" : v="-";
        slideItem.eq(current+1).animate({backgroundPositionY:v + 200},1000).siblings().css({backgroundPositionY:0});
    });

    //menu-slider
    $(".slider-img").slick({
        arrows:false,
        autoplaySpeed:2000,
        pauseOnHover:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
        dots:true,
    });

    $(".slider-img").eq(0).slick("slickPlay");

    //menu-slider - tab
    $("#content05 .tab li").on("click", function(){
        let idx=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".slider-img").eq(idx).addClass("on").siblings().removeClass("on");
        $(".slider-img").eq(idx).slick("slickPlay").siblings().slick("slickPause")
    });


    //#content05 - on
    $(window).on("scroll", function(){
        var wct=$(window).scrollTop();
        $("#content05").each(function(){
            var this_top=$(this).offset().top;
            if(wct>this_top-200) {
                $(this).addClass("on");
            }
        });
        if(wct<500) {
            $("#content05").removeClass("on");
        }
    });    

    //#content06 - on
    $(window).on("scroll", function(){
        var wct=$(window).scrollTop();
        $("#content06").each(function(){
            var this_top=$(this).offset().top;
            if(wct>this_top-200) {
                $(this).addClass("on");
            }
        });
        if(wct<500) {
            $("#content06").removeClass("on");
        }
    });      

    //wines
    $(".wines>div").slick({
        arrows:true,
        autoplay:false,
        dots:true,
        prevArrow:"<div><i class='xi-angle-left-min'></i></div>",
        nextArrow:"<div><i class='xi-angle-right-min'></i></div>",
    });

    //#content07 - on
    $(window).on("scroll", function(){
        var wct=$(window).scrollTop();
        $("#content07").each(function(){
            var this_top=$(this).offset().top;
            if(wct>this_top-200) {
                $(this).addClass("on");
            }
        });
        if(wct<500) {
            $("#content07").removeClass("on");
        }
    });    

    //#content09 - on
    $(window).on("scroll", function(){
        var wct=$(window).scrollTop();
        $("#content09").each(function(){
            var this_top=$(this).offset().top;
            if(wct>this_top-200) {
                $(this).addClass("on");
            }
        });
        if(wct<500) {
            $("#content09").removeClass("on");
        }        
    });    

    //#content10 - on
    $(window).on("scroll", function(){
        var wct=$(window).scrollTop();
        $("#content10").each(function(){
            var this_top=$(this).offset().top;
            if(wct>this_top-200) {
                $(this).addClass("on");
            }
        });
        if(wct<500) {
            $("#content10").removeClass("on");
        }        
    });    

    //content10 - counter
    function cU(){
        $('.counter1').text('1980');
        $(".counter1").counterUp({
            delay: 20,
            time: 2000,
        });   
        $('.counter2').text('1988');
        $(".counter2").counterUp({
            delay: 20,
            time: 2000,
        });  
        $('.counter3').text('15');
        $(".counter3").counterUp({
            delay: 30,
            time: 2000,
        });  
        $('.counter4').text('100');
        $(".counter4").counterUp({
            delay: 40,
            time: 2000,
        });
        $('.counter5').text('1977');
        $(".counter5").counterUp({
            delay: 50,
            time: 2000,
        });    
        $('.counter6').text('2013');
        $(".counter6").counterUp({
            delay: 60,
            time: 2000,
        });                
    }

    var cu0=true;
    var thisTop=$("#content10").offset().top//지금 섹션의 위치 값을 구함
    $(window).on("scroll", function(){
        var sctr=$(window).scrollTop();
        if(sctr > thisTop-200){
            if(!cu0){ cU(); cu0=true; }                        
        }else{
            cu0=false;
        }
    });

    //totop
    $(".totop").on("click", toTop);
    function toTop(){
        $("html,body").animate({scrollTop:0},1000);
    }
    $(".totop").hide();
    $(window).on("scroll", topShow);
    function topShow(){
        if($(window).scrollTop()>500){
        $(".totop").fadeIn();
        }else{
            $(".totop").fadeOut();            
        }
    }
    
    //mopen
    $(".mopen").on("click", function(){
        $(this).toggleClass("ox");
        $("header").toggleClass("ox");
    });


});