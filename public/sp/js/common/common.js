$(function(){
    var $win = $(window),
        $doc = $(document),
        $html = $('html, body'),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $btnMenu = $('#menuToggle'),
        $menu = $('#menu'),
        currentScrollY;

    // メニューの切り替え
    $btnMenu.on('touchend',function(){

        currentScrollY = $win.scrollTop();
        $body.toggleClass('noscroll').css('top', (-scrollTop) + 'px');

        $(this).parent().toggleClass('isOpen');
        $menu.toggleClass('isOpen');

    });

});