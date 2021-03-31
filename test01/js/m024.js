$(function(){

    $(".popclose").on("click",popupClose);
    function popupClose(){
        // $(".popup").hide();
        $(this).parent().hide();
    }

});
