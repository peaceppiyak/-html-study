$(function(){
    
    $('#full-wrpa').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    afterLoad: function(origin,destination){
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        }
    });
});