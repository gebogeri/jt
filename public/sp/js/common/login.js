$(function(){
    var btnServes = $('#container .serves_toggle');
    btnServes.on('touchend',function(){
        $(this).next().stop().slideToggle(280);
    });

    var navWrap = $('#gNav'),
    $html = $('html');
    btnNavClose = $('#btn_navClose span'),
    btnNav = $('#btn_menu');

    btnNavClose.on('touchend',function(){
        navWrap.removeClass('active');
        $html.removeClass('isOpen');
    });
    btnNav.on('touchend',function(){
        navWrap.toggleClass('active');
        $html.toggleClass('isOpen');
    });


    var modalQ = $('#modal_q');
    modalQ.on('touchend',function(){
        $(this).toggleClass('isOpen');
    });

    var a = $('#modal [rel="modalNext"]'),
        loginForm = $('#modal form'),
        c = $('a[rel="leanModal"]');
    a.on('click',function(){
        loginForm.hide();
        $('#modal'+String($(this).data('next')) ).fadeIn();
        return false;
    });
    c.on('click',function(){
        loginForm.hide();
        loginForm.first().show();
    })

});