$(function(){
    // アコーディオン
    $('.btn_edit').on('click', function() {
        var menu = $(this).closest(".normal_area")
        menu.hide();
        menu.next(".edit_area").fadeIn();
    });
    $('.btn_cencel').on('click', function() {
        var content = $(this).closest(".edit_area")
        content.hide();
        content.prev(".normal_area").fadeIn();
    });

    $(document).on('focus','.select-box',function(){
        if($(this).find('select').hasClass('active')){
            $(this).find('select').addClass('focus');
        }
    }).on('change', '.select-box select',function(){
        $(this).addClass('active').removeClass('focus');
    });
});