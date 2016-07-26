$(function(){
    var popupIco = $('#profile_top_info .pop_up');

    $('#profile_top_info .sub-profile-box h3').on('click',function(evt){
        if(!$(evt.target).closest(popupIco).length){
            $(this).next().slideToggle();
            $(this).closest('.sub-profile-box').toggleClass('active');
        }
    });

    $('#profile_top_info span.slide-box-btn').on('click',function(){
        $(this).closest('.slide-box').slideUp();
        $(this).closest('.sub-profile-box').removeClass('active');
    });


    popupIco.on('click',function(){
        popupIco.not($(this)).removeClass('active');
        $(this).toggleClass('active');
    });

    $(window).on('scroll',function(){
        popupIco.removeClass('active');
    });

});