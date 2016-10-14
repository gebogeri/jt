/*
    ツールチップ追従
*/

$(function(){

    $doc = $(document);

    $doc.on('mousemove', '.labelPar', function(e){
        $this = $(this).find('.label')
        if(!$(e.target).closest('.balloon').length){
            $(this).children().css({
                "top":e.clientY+25+"px",
                "left":e.clientX-25+"px"
            });
        }
    });
});