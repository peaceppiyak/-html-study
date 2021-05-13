$(function(){
    var $this=$(".section");
    var btxt=["tesla","model","interier","autopoilot"];
    $("#fullpage").fullpage({           
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',                      
        afterLoad: function(origin,destination){
            console.log(btxt[1]);
            //destination.index 숫자 0.1.2.3
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
            $(".gnb-right li").eq(destination.index).addClass("on").siblings().removeClass("on");
            $(".btext").text(btxt[destination.index]);
            var bnum=$(".gnb-right li").eq(destination.index).find("a").text();
            $(".bnum").text(bnum);
        }
    });
});