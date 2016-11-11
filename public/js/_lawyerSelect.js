$(function(){

    $doc.on('click', '.lawyerItem', function(e){
        if( !$(e.target).closest('a').length ){
            var $selectedArea = $(this).closest('.selectedArea');
            // 選択番号保持
            var delNum = $(this).data('num');

            if( $selectedArea.length ){
                if($selectedArea.closest('.tabs_content').length){
                    $selectedArea = $selectedArea.closest('.tabs_content');
                }

                $(this).remove();
                $selectedArea.find('.choiceArea .lawyerItem[data-num='+delNum+']').removeClass('isSelected');

                //チェックボックス操作
                $selectedArea.find('.checkArea').find('[data-num="'+delNum+'"]').prop('checked', false);

            }else{
                $(this).toggleClass('isSelected');

                // チェックボックス操作
                var $choiceArea = $(this).closest('.choiceArea');
                if($choiceArea.closest('.slimScrollDiv').length){
                    $choiceArea = $choiceArea.closest('.slimScrollDiv');
                }

                var checkBox = $choiceArea.next().next().find('[data-num="'+delNum+'"]');

                if(checkBox.prop('checked')){
                    checkBox.prop('checked', false);
                }else{
                    checkBox.prop('checked', true);
                }
            }

        }
    }).on('click', '.selectedTab', function(){

        $parent = $(this).closest('.tabs').next();

        $parent.find('.selectedArea').html('');

        $parent.find('.choiceArea .lawyerItem.isSelected').each(function(){
            $parent.find('.selectedArea').append($(this).clone());
        });
    });

});