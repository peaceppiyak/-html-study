$(function(){
  
  
  
  
$(window).on("scroll",function(){
//    $("header").addClass("on");
    var sct=$(window).scrollTop();
    console.log(sct);
    if(sct>200) {
        $("header").addClass("on");
    }else{
        $("header").removeClass("on");
    }
});
  
  
  
  });