$(function(){
    var $this=$(".section");
    $("#fullpage").fullpage({           
        //licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        // afterRender:function(){
        //     $this.eq(0).addClass("on");//첫페이지에 애니메이션
        // },                        
        afterLoad: function(origin,destination){
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
        }
    });
});