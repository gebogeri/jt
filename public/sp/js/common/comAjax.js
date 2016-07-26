$(function(){
    var contentArea = $('#column-communication-data'),
    tabBtn = $(".tabs li"),
    tabCont = $(".query-side-content > li");
    $(window).on('load', function(){
        var q = $('#column-communication').data('query');
        console.log(q);
        ajaxLoad(0,q);
    });

    tabBtn.on('click', function(){
        var p = $(this).data('tabs'),
        q = $(this).data('query');
        console.log(p,q);
        ajaxLoad(p,q);
    });

    function ajaxLoad(p,q){
        var part = (p == 0) ? 'latest' :
                   (p == 1) ? 'question' :
                   (p == 2) ? 'case' :
                   'other';

        $.ajax({
            type: 'GET',
            url: '/sp/communication/include/ajax/'+q+'/'+part+'.html',
            dataType: 'html',
            success: function(data){
                console.log("success");
                contentArea.html(data);
                tabBtn.removeClass('isSelected').eq(p).addClass('isSelected');
                tabCont.removeClass('isSelected').eq(p).addClass('isSelected');
                toggle();
                return false;
            }
        });
    }
});
