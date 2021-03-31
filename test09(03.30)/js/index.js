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
});