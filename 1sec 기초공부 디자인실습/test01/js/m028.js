$(function(){
    //$(this)는 이벤트가 먹는 이것
    //$(this).index()는 이것의 번호
    $(".tab-menu li").on("click",tabMenu)
    function tabMenu(){
        var idx=$(this).index();
        console.log(idx);
        $(".tab-contents>div").removeClass("on");
        $(".tab-contents>div").eq(idx).addClass("on");
        
        $(".tab-menu li").removeClass("on");
        $(this).addClass("on");
    }
    $(".tab-menu2 li").on("click",tabMenu2)
    function tabMenu2(){
        var idx=$(this).index();
        console.log(idx);
        $(".tab-contents2>div").removeClass("on");
        $(".tab-contents2>div").eq(idx).addClass("on");
        
        $(".tab-menu2 li").removeClass("on");
        $(this).addClass("on");
    }

});
