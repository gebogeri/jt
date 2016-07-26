/////////////////////////////////
//
// 共通設定
//  - グロナビ
//  - seletタグ
//
/////////////////////////////////


$(function(){
    var $btnMenu = $('#menuToggle'),
        $menu = $('#menu'),
        $btnMenuSlide = $('#menu .gNav_menu_target.arrow'),
        $btnMenu = $('#menuToggle'),

        $body = $('body'),

        $win = $(window),
        $doc = $(document),

        currentScrollY;

    // メニューの切り替え
    $btnMenu.on('touchend',function(){

        var _parent = $(this).parent();

        if(_parent.hasClass('isOpen')){
            $body.removeClass('noscroll').attr('style', '');
            $win.scrollTop(currentScrollY);
        }else{
            currentScrollY = $win.scrollTop();
            $body.toggleClass('noscroll').css('top', (-currentScrollY) + 'px');
        }

        _parent.toggleClass('isOpen');
        $menu.toggleClass('isOpen');

    });

    // サブメニュー開閉
    $btnMenuSlide.on('touchend',function(){
        $(this).toggleClass('isOpen') // arrow
        .next().stop().slideToggle(); // Open
    });

    $doc.on('change', 'select', function(){
        $(this).css('color','#333');
    });
});