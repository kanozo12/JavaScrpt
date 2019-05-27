import $ from 'jquery';

$(function(){
    $("#changeBtn").on("click", function(){
        $("h1").text("글자가 변경되었습니다. 변경변경");
    });
});