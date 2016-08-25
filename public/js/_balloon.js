$(function(){
    var $doc = $(document),
        $balloonBtn = $('.btn_balloon');

    $balloonBtn.on('click', function(){

        $(this).find('.balloon').toggleClass('isOpen');
    });

    $doc.on('click scroll', function(e){
        if(!$(e.target).closest('.btn_balloon').length){
            $('.balloon').removeClass('isOpen');
        }
    });
});