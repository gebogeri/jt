// MYQUERY NEW 「詳細情報」表示切り替え

$(function(){
    var $trigger = $('#comToggleSelect'),
        $target = $('#comToggleArea');

    $trigger.on('change', function(){
        if($(this).val() == "1"){
            $target.show();
        }else{
            $target.hide();
        }
    });
});