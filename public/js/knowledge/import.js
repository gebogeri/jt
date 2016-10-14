// エディット-案件のインポート
$(function(){
    var $doc = $(document);

    $doc.on('click', '.prjItem', function(e){
        if(!$(e.target).closest('.detailLink').length){
            $(this).toggleClass('isSelected');
        }
        var $checkBox = $(this).closest('.slimScrollDiv').next(),
            num = $(this).data('num');

        var $item = $checkBox.find('[data-num="'+num+'"]');
        if($item.prop('checked')){
            $item.prop('checked', false);
        }else{
            $item.prop('checked', true);
        }
    })
    .on('click', '.detailLink', function(){
        $('#modalImportDetail').addClass('display');
    })
    .on('click', '.modal_import_back', function(){
        $('#modalImportDetail').removeClass('display');
        $('#modalImportDetail .scrollArea').empty();
    });

});