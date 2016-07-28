$(function(){
    $box = $('#search_toggle'),
    $btn = $('.btn_search_toggle');

    $btn.on('click',function(){
        $box.slideToggle();
    });
});