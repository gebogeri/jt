$(function(){
    // スライドトグル
    var toggleForm = $('#bg_w');
    var toggleBtn = $('.search_oc');
    toggleBtn.on('click',function(){
        if(toggleForm.hasClass('detail_search')){
            var scroll = $(window).scrollTop();
            $(window).scrollTop(scroll);
            toggleForm.removeClass('detail_search');
        }else{
            toggleForm.addClass('detail_search');
        }
    });

    // 弁護士の選択
    var modalEdit = $('#modal_edit'),
    tabLi = $('#timeline-tab li'),
    lawBox = $('.lawyer-box');

    $(document).on('click','.lawyer-item',function(evt){
        var i = true;
        while( i == true ){
            if($(evt.target).closest($('.icon_follow')).length){
                $(this).find('.icon_follow').toggleClass('follow'); // フォロー、アンフォローをクラスで制御
                break;
            }else if($(evt.target).closest($('.icon_profile')).length){
                var link = $(this).find('.icon_profile').attr('rel');
            }else if($(evt.target).closest($('.icon_message')).length){
                var link = $(this).find('.icon_message').attr('rel');
            }else{
                $(this).toggleClass('selected');
                break;
            }
            window.open(link);
            break;
        }
    }).on('click','#timeline-tab li:not(.selected)',function(){
        tabLi.removeClass('selected');
        $(this).addClass('selected');
        var tabS = $(this).attr('id').slice(4),
            tabD = tabS == 'all' ? $('#selected'):$('#all');
        $('#'+tabS).show();
        tabD.hide();
    });

    var scrollBox = $('#comparison-box div.scrollY');
    // Windowsの場合スクロールバーを削除
    if (navigator.platform.indexOf("Win") != -1) {
        scrollBox.css({
            width:'-webkit-calc(100% + 36px)',
            width:'calc(100% + 36px)',
            paddingRight:'26px'
        });
    }

    // 比較ページ上部固定
    var fixBox = $('#comparison-box .list-box .lawyer-item > div.clear:first-child');
    $('#horizonal').on('scroll',function(){
        var scroll = $(this).scrollTop() - 1;
        fixBox.css('top',scroll);

    });


});