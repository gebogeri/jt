/////////////////////////////////
//
// SETTINGページ
//
/////////////////////////////////

$(function(){
    var $doc = $(document),
        btnEdit = '.btn_edit',
        btnReset = '.btn_reset',
        btnDelete = '.btn_delete',
        emailAdd = '.btn_subAdd',
        emailDelete = '.btn_subDelete',
        $btnAdd = $('.subTtl_add.settingEditAdd'),
        $btnLangAdd = $('.setting_item_edit_languageAdd_btn'),
        $userBox = $('#userBox'),
        deleteElem = '.d_elem',

        $contentWrap = $('#settingUserBox'),
        $content = $contentWrap.find('.setting:first-child').clone();

    // メールアドレス2以降削除
    $content.find('.multi').remove();



    $doc.on('click', btnEdit, function(){ // 編集フィールドの切り替え
        $(this).fadeToggle().prev().toggle();
        $(this).next().fadeToggle();
    })
    .on('click', btnReset, function(){
        var $editBox = $(this).closest('.setting_item_edit');
        $editBox.toggle().prev().fadeToggle().prev().fadeToggle();
    })
    .on('touchend', btnDelete, function(){ // ボックスの削除
        $(this).closest(deleteElem).remove();
    });

    // メールアドレスの追加・削除
    $doc.on('touchend', emailDelete, function(){
        $(this).closest('.setting_item_edit_emailBox').remove();
    });

    // 項目追加
    $btnAdd.on('touchend', function(){
        var $this = $(this).closest('.setting_ttl').next();
            num = Number( $contentWrap.data('num') ) + 1;

        if($contentWrap.data('select2') !== ""){
            kind = $contentWrap.data('select2').split('_');
        }else{
            kind = null;
        }

        // 番号繰り上げ
        $content.attr('data-num', num).find('.mainNum').html(("0"+num).slice(-2));
        // select2のリセット
        $content.find('span.select2').remove();
        // フォームのリセット
        $content.find("textarea, :text, select").val('').end().find(":checked").prop("checked", false);

        // ペースト
        $contentWrap.append($content);

        // select2適用
        if(kind){
            $.each(kind, function(){

                if( eval(String(this)) ){
                    // placeholderを決定
                    var msg = eval(String(this));

                    $contentWrap.find('.setting:last-child .select2_'+this).attr('tabindex', '').select2({
                        placeholder: msg,
                    });
                }
            });
        }

    });


});