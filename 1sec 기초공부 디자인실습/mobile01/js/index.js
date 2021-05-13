$(function(){
    
    $('#fpg').fullpage({
    //options here
    anchors:['m01','m02','m03'],
    autoScrolling:true,
    scrollHorizontally: true,
    afterLoad: function(origin,destination){
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        $("nav a").eq(destination.index).addClass("on").siblings().removeClass("on");
        }
    });




});