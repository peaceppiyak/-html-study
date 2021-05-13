$(function(){
   $(".xi-pause").on("click",movieStop);
    function movieStop(){
        $(".seamove").trigger("pause");
    }
    
    $(".xi-play").on("click",moviePlay);
    function moviePlay(){
        $(".seamove").trigger("play");
    }
});