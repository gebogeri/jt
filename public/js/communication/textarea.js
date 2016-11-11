// textarea サイズ変更
$(function(){
    var $switch = $('.flexTextareaSwitch');

    $switch.on('click',function(){
        if($(this).hasClass('isActive')){
            var sign = '-';
        }else{
            var sign = '+';
        }

        $(this).toggleClass('isActive');
        $(this).next('.flexTextarea').animate({
            height: sign + '=365',
        },250);

    });
});