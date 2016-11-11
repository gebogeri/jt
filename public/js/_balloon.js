$(function(){
    var $doc = $(document);

    $doc.on('click', '.btn_balloon', function(){

        $(this).find('.balloon').toggleClass('isOpen');
    })
    .on('click scroll', function(e){
        if(!$(e.target).closest('.btn_balloon').length){
            $('.balloon').removeClass('isOpen');
        }
    });
});