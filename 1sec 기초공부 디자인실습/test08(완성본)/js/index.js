$(function(){
    var $this=$(".section");
    var btxt=["tesla","model","interier","autopoilot"];
    $("#fullpage").fullpage({           
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',                      
        afterLoad: function(origin,destination){
            console.log(btxt[1]);
            //destination.index 0.1.2.3
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
            $(".gnb-right li").eq(destination.index).addClass("on").siblings().removeClass("on");
            $(".btext").text(btxt[destination.index]);
            var bnum=$(".gnb-right li").eq(destination.index).find("a").text();
            $(".bnum").text(bnum);
        }
    });

    $(".gnb-right a").on("click",menuMove);
    function menuMove(){
        $("thml,body").stop().animate({scrollTop:$(this.hash).offset().top},600);
        $(this).parent().addClass("on");
        $(this).parent().parent().siblings().removeClass("on");
        return false;
    }
});