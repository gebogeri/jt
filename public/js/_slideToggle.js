$(function(){
    $doc = $(document);

    // Pattern 1 - toggle next elem
    $doc.on('click', '.toggleNext', function(){
        $(this).toggleClass('isOpen').next().slideToggle();
    });
});