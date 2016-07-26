/////////////////////////////////
//
// SETTING
//
/////////////////////////////////

$(function(){
    var $btnDelete = $('.btn_delete'),
        deleteElem = '.deleteElem';

    $btnDelete.on('click',function(){
        $(this).closest(deleteElem).remove();
    });
});