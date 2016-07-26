/////////////////////////////////
//
// タブ切り替え
//
/////////////////////////////////

$(function(){
    var $tab = $('.tabs li');

    $tab.on('touchend', function(){
        if( !$(this).hasClass('isSelected') ){
            $(this).parent('.tabs').find('li').toggleClass('isSelected');
            $(this).parent('.tabs').next('.tabsBox').find('ul').toggle();
        }
    });

});