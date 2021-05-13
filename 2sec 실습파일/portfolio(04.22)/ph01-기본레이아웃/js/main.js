$(function(){
    //-------------
    $(".visual-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
    });

    //scrollevent

    $(window).on("scroll", scrollEvent);
    function scrollEvent(){
        let wct=$(window).scrollTop();
        $(".section").each(function(){
            let $this=$(this);
            let this_top=$this.offset().top;
            if(wct>this_top-200) $this.addClass("on").siblings().removeClass("on");
        })
    }
    




    //------------
});