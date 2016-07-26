$(function(){

    var $doc = $(document);

/////////////////////////////////
//
// KNOWLEDGE スライドトグル
//
/////////////////////////////////

    var $btnKnow = $('.knowledge_item_btn');
    $btnKnow.on('touchend', function(){
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

});