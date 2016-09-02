$(function(){
    $doc = $(document);

    $doc.on('click', '.js_copyBtn .edit_addBtn', function(){
        var $this = $(this).closest('.js_copyBtn'),
            $paste = $this.prev('.js_copyArea'),
            $content = $paste.find('.js_copyContent:last-child').clone(),
            num = Number( $content.data('num') ) + 1;

        $content.attr('data-num', num).addClass('multi').find('.num').html(num);
        $content.find('span.select2').remove();
        $content.find("textarea, :text, select").val("").end().find(":checked").prop("checked", false);

        if(num === 2){
            $content.find('.removeArea').append('<span class="edit_removeBtn"></span>');
        }

        $paste.append($content);

        $c = $paste.find('.js_copyContent:last-child');
        try{
            var kind = $paste.data('select2').split('_');
        }catch(e){
            var kind = $paste.data('select2');
        }

        $.each(kind, function(){

            if( eval(String(this)) ){
                // placeholderを決定
                var msg = eval(String(this));

                $c.find('.select2_'+this).attr('tabindex', '').select2({
                    placeholder: msg,
                });
            }
        });

    })
    .on('click', '.js_copyParBtn .edit_addBtn', function(){
        var $this = $(this).closest('.js_copyParBtn'),
            $paste = $this.next('.js_copyParArea'),
            $content = $paste.find('.js_copyParContent:last-child').clone(),
            num = Number( $content.data('num') ) + 1;

        $content.find('.multi').remove();
        $content.attr('data-num', num).addClass('multi').find('.mainNum').html(num);
        $content.find('span.select2').remove();
        $content.find("textarea, :text, select").val("").end().find(":checked").prop("checked", false);

        if(num === 2){
            $content.append('<span class="edit_removeParBtn"></span>');
        }

        $paste.append($content);

        $c = $paste.find('.js_copyParContent:last-child');
        try{
            var kind = $paste.data('select2').split('_');
        }catch(e){
            var kind = [$paste.data('select2'),];
        }

        $.each(kind, function(){

            if( eval(String(this)) ){
                // placeholderを決定
                var msg = eval(String(this));

                $c.find('.select2_'+this).attr('tabindex', '').select2({
                    placeholder: msg,
                });
            }
        });

    })
    .on('click', '.edit_removeBtn', function(){
        $(this).closest('.js_copyContent.multi').remove();
    })
    .on('click', '.edit_removeParBtn', function(){
        $(this).closest('.js_copyParContent.multi').remove();
    });
});