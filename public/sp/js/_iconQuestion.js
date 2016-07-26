/////////////////////////////////
//
// 青い？マークの設定
//
/////////////////////////////////

$(function(){
    var $btnQ = $('.btn_faq'),
        $doc = $(document);

    // 表示非表示切り替え
    $btnQ.on('touchend',function(){
        $(this).toggleClass('isOpen');
    });

    // スクロールや他の場所をタップした時点で閉じる
    $doc.on('touchend scroll', function(e){
        if(!$(e.target).closest('.subTtl_main_faq').length){
            $btnQ.removeClass('isOpen');
        }else{
            $btnQ.not(e.target).removeClass('isOpen');
        }
    });

});