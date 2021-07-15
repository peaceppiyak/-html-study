$(function(){
    
    $('#full-wrpa').fullpage({
    //options here
    anchors:['s01','s02','s03','s04','s05'],
    autoScrolling:true,
    scrollHorizontally: true,
    afterLoad: function(origin,destination){
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        $(".menu-right li").eq(destination.index).addClass("on").siblings().removeClass("on");
        }
    });

    // 따로 이름 안주고 바로 function실행되게 함
    $(".xi-bars").on("click", function(){
        $(".popup").addClass("on");
    });


    $(".xi-close").on("click", popUpX);
    function popUpX(){
        $(".popup").removeClass("on");
    };


    //slick
    $(".slider-wrap>div").slick({
        arrows:false,
        autoplay:true,
    });

    $(".slider-num li").on("click",slideNum);
    function slideNum(){
        var idx=$(this).index();
        $(".slider-wrap>div").slick("slickGoTo",idx);
        $(this).addClass("on").siblings().removeClass("on");
    }





});