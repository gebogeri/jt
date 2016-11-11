$(function(){
    $doc = $(document);

    // Pattern 1 - toggle next elem
    $doc.on('click', '.toggleNext', function(e){
        if(!$(e.target).closest('.btn_balloon').length){
            $(this).toggleClass('isOpen').next().slideToggle();
        }
    })
    .on('click', '.togglePrev', function(e){
        if(!$(e.target).closest('.btn_balloon').length){
            $(this).toggleClass('isOpen').prev().slideToggle();
        }
    });


});