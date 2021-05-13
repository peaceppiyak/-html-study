$(function(){
    $("#shoes dd").on("click",shoesMove);
    function shoesMove(){
        //$(this).index() 자신의 번호
        //var -->let const
        var idx=$(this).index()-1;
        console.log(idx);
        $("#shoes ul").css({top:-450*idx})
    }
})

