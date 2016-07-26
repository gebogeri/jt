$(function(){
    // スライドトグル
    var form = $('#careerForm');
    var toggleForm = $('#search_toggle'),
    toggleBtn = $('.btn_search_toggle');

    toggleBtn.on('touchend',function(){
        toggleForm.toggle();
        form.toggleClass('active');
        $("#businessArea").select2({
          placeholder: "テキストを入力"
        });
    });

    $(document).on('click','#profile-tab li:not(.selected)',function(){
        $('#profile-tab li').removeClass('selected');
        $(this).addClass('selected');
        $('#all').toggleClass('view');
    });
    // 弁護士の選択
    var modalEdit = $('#modal_edit');
    var tabLi = $('#timeline-tab li');

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
        $('#all').toggleClass('view');
    });
});