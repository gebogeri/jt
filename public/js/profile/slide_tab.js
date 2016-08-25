var scrl_dir;
$(function(){
    // 矢印を代入
    var $arrow = $('.tabs.profile_slideTabs .tabs_arrow'),
        $tabsContainer = $('.slideTabsContainer'),
        itemWidth = $tabsContainer.find('li:first-child').innerWidth() + 1;

    var scrollAmount = $tabsContainer.scrollLeft(),
        rightMargin = $tabsContainer.find('li').length * itemWidth - 2 - $tabsContainer.width();

    var scrl_flg = false;
    var scroll = function(){
        if(scrl_dir === 'left' && scrollAmount > 1){
            scrollAmount -= 2;
            $tabsContainer.scrollLeft(scrollAmount);
        }else if(scrl_dir === 'right' && scrollAmount < rightMargin){
            scrollAmount += 2;
            $tabsContainer.scrollLeft(scrollAmount);
        }
        if( scrl_flg === true ){
            setTimeout(scroll, 1);
        }
    };

    $arrow.mousedown(function(e){
        scrl_flg = true;
        scrl_dir = $(e.target).data('direction');
        setTimeout(scroll, 1);
        return false;
    }).mouseup(function(){
        scrl_flg = false;
        clearTimeout(scroll);
    }).mouseleave(function(){
        scrl_flg = false;
        clearTimeout(scroll);
    });

    $tabsContainer.on('scroll', function(){
        scrollAmount = $(this).scrollLeft();
    });
});