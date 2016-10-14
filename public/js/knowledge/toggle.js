$(function(){
    $btn = $('.knowledge_item_toggleBtn');

    $btn.on('click', function(){
        $(this).toggleClass('isOpen')
        .prev().slideToggle(180);
    });
})