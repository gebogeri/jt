$(function(){

    $(document)
    // 小項目追加
    .on('touchend', '.profile_edit_block_addBtn', function(){
        var $content = $(this).prev().clone(),
            num = Number( $content.data('num') ) + 1,
            kind = $content.data('select2').split('_'),
            msg;

        // 番号繰り上げ
        $content.addClass('multi').attr('data-num', num).find('.num').html(num);
        // select2のリセット
        $content.find('span.select2').remove();
        // フォームのリセット
        $content.find("textarea, :text, select").val("").end().find(":checked").prop("checked", false);
        if(num === 2){
            $content.append('<span class="profile_edit_copyArea_delete"></span>');
        }

        // ペースト
        $(this).before($content);

        // select2適用
        $content = $(this).prev();
        $.each(kind, function(){

            if( eval(String(this)) ){
                // placeholderを決定
                msg = eval(String(this));

                $content.find('.select2_'+this).attr('tabindex', '').select2({
                    placeholder: msg,
                });
            }
        });
    })
    .on('touchend', '.subTtl_add.profileEdit',function(){
        var $this = $(this).parent().next(),
            $content = $this.find('.profile_edit').clone(),
            num = Number( $content.data('num') ) + 1,
            kind = $content.data('select2').split('_'),
            msg;

        $content.find('.multi').remove();
        // 番号繰り上げ
        $content.attr('data-num', num).find('.mainNum').html(num);
        // select2のリセット
        $content.find('span.select2').remove();
        // フォームのリセット
        $content.find("textarea, :text, select").val('').end().find(":checked").prop("checked", false);
        if(num === 2){
            $content.append('<span class="profile_edit_delete"></span>');
        }

        // ペースト
        $this.append($content);

        // select2適用
        $content = $this.find('.profile_edit:last-child');
        $.each(kind, function(){

            if( eval(String(this)) ){
                // placeholderを決定
                msg = eval(String(this));

                $content.find('.select2_'+this).attr('tabindex', '').select2({
                    placeholder: msg,
                });
            }
        });
    })
    // 少項目の削除
    .on('touchend', '.profile_edit_block_copyArea_delete', function(){
        $(this).parent().remove();
    })
    // 大項目の削除
    .on('touchend', '.profile_edit_delete', function(){
        $(this).parent().remove();
    });
});