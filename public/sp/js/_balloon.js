/////////////////////////////////
//
// 吹き出し
//
/////////////////////////////////

$(function(){
    var $win = $(window),
        $doc = $(document),
        $btnBalloon = $('.btn_balloon');

    $btnBalloon.on('touchend', function(e){
        if( !$(e.target).closest('.balloon').length )
        $(this).toggleClass('active');
    });

    $win.on('scroll', function(){
        $('.btn_balloon').removeClass('active');
    });
});