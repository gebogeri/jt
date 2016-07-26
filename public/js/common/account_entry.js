$(function(){
    $(document).on('click','.lawyer-item',function(evt){
        if(!$(this).parent().hasClass('scroll-box')){
            $(this).toggleClass('selected');
        }
    });
    $('.lawyer-box').slimScroll();
});