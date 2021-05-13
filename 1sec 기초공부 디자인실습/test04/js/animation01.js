$(function(){
    $(".num li").on("click",valMove);
    function valMove(){
        var idx=$(this).index();
        $(".val>div").animate({top:-idx*450},1000,"easeOutBounce")
    }
});