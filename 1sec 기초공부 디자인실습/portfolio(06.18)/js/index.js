$(function(){

    
    // $('#full-wrap').fullpage({
    //     //options here
    //     anchors:['home','project','work','about'],
    //     autoScrolling:true,
    //     scrollHorizontally: true,
    //     afterLoad: function(origin,destination){
    //         $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
    //         $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
    //         // destination.index==4 ? $("nav li").css({color:"#fff"}) : $("nav li").css({color:"#333"}); 이건 색깔바꿀때 사용할것
    //         }
    //     });

    var $this=$(".section");
    var $this_s=$(".slide");
    $this.eq(0).addClass("on");
    
    $("#portfolio").fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors:['home', 'project', 'work', 'profile'],
        controlArrows: false,
        loopHorizontal: false,
        afterRender:function(){
            $this.eq(0).addClass("on");
        },              
        afterLoad: function(origin,destination){
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
            $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
            if(destination.index==1) {
                $this_s.eq(0).addClass("on");
            }
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
        },
        
        afterSlideLoad: function(section, origin, destination, direction) {
            $this_s.eq(destination.index).addClass("on").siblings().removeClass("on");
        }
        
        
    });

    //가로 슬라이드
    $(".pf01").on("mousewheel", function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            fullpage_api.moveSlideLeft();
        }
        else{
            fullpage_api.moveSlideRight();
        }
    });



    //방울
    document.addEventListener('mousemove', function(e) {
        let body = document.querySelector('.home');
        let circle = document.createElement('h6');
        let x = e.offsetX;
        let y = e.offsetY;
        circle.style.left = x + "px";
        circle.style.top = y + "px";
        let size = Math.random() * 100;
        circle.style.width = 20 + size + "px";
        circle.style.height = 20 + size + "px";
        body.appendChild(circle);
        setTimeout(function() {
          circle.remove();
        }, 1800);
      });









    
    
    

    
   
    
    
    
});