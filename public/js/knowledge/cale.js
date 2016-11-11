// サイドバー-カレンダートグル
$(function(){
    $('.knowledgeCale,.comCale').on('click', function(){
        $(this).toggleClass('isOpen').next().slideToggle(100);
    });
});