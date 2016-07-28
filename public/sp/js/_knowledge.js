$(function(){

    var $doc = $(document);

/////////////////////////////////
//
// KNOWLEDGE スライドトグル
//
/////////////////////////////////

    var $btnKnow = $('.knowledge_item_btn');
    $btnKnow.on('click', function(){
        $(this).toggleClass('isOpen')
        .prev().slideToggle();
        if($(this).hasClass('isOpen')){
            $(this).find('span').html('CLOSE');
        }else{
            $(this).find('span').html('DETAIL');
        }
    });


/////////////////////////////////
//
// KNOWLEDGE エディット 弁護士の選択
//
/////////////////////////////////

    var $choiceArea = $('#choiceArea'),
        $selectedArea = $('#selectedArea'),
        $knowledgeLawyer = $('#knowledgeLawyer');

    $doc.on('click', 'li.lawyer_item', function(e){
        if( !$(e.target).closest('.lawyer_item_btn a').length ){

            if( $(this).closest('#selectedArea').length ){
                var delNum = $(this).data('num');
                $('#choiceArea .lawyer_item[data-num='+delNum+']').removeClass('isSelected');
                $(this).remove();
            }else{
                $(this).toggleClass('isSelected');
            }

        }
    });

    $knowledgeLawyer.on('click', function(){
        var i = false;

        $choiceArea.find('.isSelected').each(function(){
            if(!i){
                $selectedArea.html($(this).clone());
                i = true
            }else{
                $(this).clone().appendTo($selectedArea);
            }
        });

    });


/////////////////////////////////
//
// KNOWLEDGE エディット 案件のインポート
//
/////////////////////////////////

    var $knowledgeModal = $('#knowledgeImportProject');

    // モーダル開/遷移時
    $doc.on('click', '.modal_link', function(){
        var $this = $(this),
            linkName = $this.data('url');

        // ajaxロード
        $.ajax({
            type: 'GET',
            url: '/sp/knowledge/include/'+linkName,
            dataType: 'html'
        }).done(function(data){
            $knowledgeModal.html(data);
        }).fail(function(jqXHR, textStatus, errorThrown){});

    // 案件をタップ
    }).on('click', '.projectS_item', function(e){
        // 選択時
        if( !$(e.target).closest('.projectS_item_main_enter').length ){
            $(this).toggleClass('isSelected');

        // 詳細展開時
        }else{
            var d = $(this).find('.projectS_item_main_enter').data('url');

            // ajaxロード
            $.ajax({
                type: 'GET',
                url: '/sp/knowledge/include/'+d,
                dataType: 'html'
            }).done(function(data){
                $('#projectList').hide();
                $('#projectDetail').html(data).show();
            }).fail(function(jqXHR, textStatus, errorThrown){
                console.log('ファイルが存在しません');
            });
        }

    }).on('click', '.modal_back', function(){
        $('#projectList').show();
        $('#projectDetail').hide();
    });

});