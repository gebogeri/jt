$(function(){
    var $tab = $('.tabs li');

    $tab.on('click',function(){
        var target = $(this).data('tab'),
            $tabsAll = $tab.closest('.tabs').next('.tabs_content');

        $tab.removeClass('isSelected');
        $(this).addClass('isSelected');

        $tabsAll.find('.tabs_content_item').not('[data-tab="'+target+'"]').removeClass('def');
        $tabsAll.find('.tabs_content_item[data-tab="'+target+'"]').addClass('def');
    });
});