$(function(){
   
$(".popup span").on("click", popupclose);
        //대상.on("이벤트",할일=함수)
    function popupclose(){
        $(".popup").hide();
        //document.querySelector(".popup").style.display="none";
    }
    
    //top close
$(".top span").on("click",topclose);
    function topclose(){
        //addClass , removeClass , toggleClass , hasClass
        $(".top").toggleClass("on");
        $(this).toggleClass("on");
    }
});
